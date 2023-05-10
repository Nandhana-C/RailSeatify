import React, { useRef } from 'react';
import Head from 'next/head';
import { useAuth } from '../backend/useAuth';
import { doc, setDoc } from 'firebase/firestore';
import {useRouter} from 'next/router';
import { db } from '../backend/firebase';

function Register() {
    const formRef = useRef();
    const { user, userDb, api, setUserDb,onSignout } = useAuth();
    console.log(userDb);

    const router = useRouter();



    const FormVaildToast = (type) => {
        api[type]({
          message: "Error",
          description: "Please fill all the fields and check the contact number",
        });
      };
      const RegSuccessToast = (type) => {
        api[type]({
          message: "Registred Successfully",
          description: "You are successfully registered",
        });
      };

    const addNewUserData = (e) => {
        e.preventDefault();
        var userData = {
            name: formRef.current[0]?.value,
            dob: formRef.current[1]?.value,
            gender: formRef.current[2]?.value,
            email: formRef.current[3]?.value,
        }
        if (
            !userData.name ||
            !userData.dob ||
            !userData.gender ||
            !userData.email
        ) {
            FormVaildToast("error");
        } else {
            if (userDb?.uid) {
                setDoc(doc(db, "users", userDb?.uid), userData, { merge: true })
                    .then(() => {
                        setUserDb({...userDb, ...userData});
                        if (typeof window !== "undefined") {
                            window.localStorage.setItem(
                                "userDb",
                                JSON.stringify({ ...userDb, ...userData })
                            );
                            }
                        RegSuccessToast("success");
                        router.push(`/dashboard/${userDb?.uid}`);
                    })
                    .catch((error) => {
                        alert(error.message);
                    });
            }
        }
    }
            
  return (
    <>
      <section className="w-full flex justify-center items-center flex-col font-montserrat p-4 md:p-16">
        <Head>
          <title>Registration</title>
        </Head>
        <div className="mx-auto text-center">
          <h1 className="text-3xl my-8">REGISTER</h1>
        </div>
        <form
          onSubmit={(e) => addNewUserData(e)}
          ref={formRef}
          className="w-full h-full mx-auto max-w-5xl rounded-xl text-[#007fff]"
        >
          <input
            className=" w-full my-2 h-14 pl-[15px] rounded-md placeholder-[#007fff]  focus:outline-none focus:ring-2 focus:ring-[#0067cf] focus:ring-opacity-50 focus:placeholder-slate-500 focus:border-transparent"
            type="text"
            placeholder="Name"
          />
          <div className="grid lg:grid-cols-2 gap-3">
          <input
            className=" w-full my-2 h-14 pl-[15px] rounded-md placeholder-[#007fff]  focus:outline-none focus:ring-2 focus:ring-[#0067cf] focus:ring-opacity-50 focus:placeholder-slate-500 focus:border-transparent"
            type="text"
            onFocus={
                (e)=> {
                  e.currentTarget.type = "date";
                  e.currentTarget.focus();
                 }
               }
            placeholder="Date of Birth"
          />
          <select className="w-full my-2 h-14 pl-[15px] pr-[30px] rounded-md placeholder-[#007fff]  focus:outline-none focus:ring-2 focus:ring-[#0067cf] focus:ring-opacity-50 focus:placeholder-slate-500 focus:border-transparent">
              <option hidden className="text-[#858585] bg-white">
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
            </select>
            </div>
          <div className="grid lg:grid-cols-2 gap-3">
            <input
                className=" w-full my-2 h-14 pl-[15px] rounded-md placeholder-[#007FFF] bg-white outline-none"
                type="text"
                placeholder="Phone Number"
                value={user?.phoneNumber}
                disabled
            />
            <input
            className=" w-full my-2 h-14 pl-[15px] rounded-md placeholder-[#007fff]  focus:outline-none focus:ring-2 focus:ring-[#0067cf] focus:ring-opacity-50 focus:placeholder-slate-500 focus:border-transparent"
            type="text"
            placeholder="Email"
            />
          </div>
          <button
            className="bg-white hover:bg-[#007fff] hover:text-white transition-all duration-300 p-4 mt-2 rounded-md w-full"
            type="submit"
          >
            Register
          </button>
          
        </form>
      </section>
    </>
  )
}

export default Register