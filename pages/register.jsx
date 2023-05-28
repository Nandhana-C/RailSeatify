import React, { useRef } from 'react';
import Head from 'next/head';
import { useAuth } from '../backend/useAuth';
import { doc, setDoc } from 'firebase/firestore';
import {useRouter} from 'next/router';
import { db } from '../backend/firebase';
import RegisterSvg from '../assets/register.png';
import Image from 'next/image';

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
            dob: formRef.current[2]?.value,
            gender: formRef.current[3]?.value,
            email: formRef.current[1]?.value,
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
      <section className="w-full h-full flex justify-center items-center flex-col font-montserrat p-4 md:p-16">
        <Head>
          <title>Registration</title>
        </Head>
        <div className="bg-white p-4 rounded-md">
          <Image src={RegisterSvg} alt={"phone"} className='w-5/6'/>
          <div className='flex flex-col gap-4 mt-4 items-center text-center'>
            <h1 className='text-2xl font-semibold'>Enter your details to get started</h1>
            <p className='text-gray-500 text-sm w-72'></p>
          </div>
        <form
          onSubmit={(e) => addNewUserData(e)}
          ref={formRef}
          className="h-full mx-auto w-96 rounded-xl text-[#007fff]"
        >
          <input
            className=" w-full border my-2 h-14 pl-[15px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0067cf] focus:ring-opacity-50 focus:border-transparent"
            type="text"
            placeholder="Name"
          />
          <input
            className=" w-full border my-2 h-14 pl-[15px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0067cf] focus:ring-opacity-50 focus:border-transparent"
            type="text"
            placeholder="Email"
          />
          <div className="grid lg:grid-cols-2 gap-3">
          <input
            className=" w-full border my-2 h-14 pl-[15px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0067cf] focus:ring-opacity-50 focus:border-transparent"
            type="text"
            onFocus={
                (e)=> {
                  e.currentTarget.type = "date";
                  e.currentTarget.focus();
              }
            }
            placeholder="Date of Birth"
          />
          <select className="w-full border my-2 h-14 pl-[15px] pr-[30px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0067cf] focus:ring-opacity-50 focus:border-transparent">
              <option hidden className="text-[#858585] bg-white">
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
            </select>
            </div>
          <div className="grid lg:grid-cols-1 gap-3">
            <input
                className=" w-full border my-2 h-14 pl-[15px] placeholder:text-[#858585] rounded-md bg-white outline-none"
                type="text"
                placeholder="Phone Number"
                value={user?.phoneNumber}
                disabled
                />
          </div>
          <button
            className={`bg-[#0067cf] mt-2 w-full text-white cursor-pointer rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0067cf]`}
            type="submit"
          >
            Register
          </button>
          
        </form>
      </div>
      </section>
    </>
  )
}

export default Register