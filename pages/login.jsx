import React, {use, useRef, useState} from 'react';
import { useAuth } from '../backend/useAuth';
import Image from 'next/image';
import Phone from '../assets/phone.svg';

function Login() {

  const [loading, setLoading] = useState(false)

    const FormVaildToast = (type) => {
        api[type]({
          message: "Error",
          description: "Please enter a valid phone number",
        });
      };
    const { onSignin,api } = useAuth();
    const formRef = useRef();
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        const phoneNo = '+91' + formRef.current[0]?.value
        if (phoneNo.length !== 13) {
            FormVaildToast("error");
            setLoading(false);
        }
        else{
        setLoading(false);
        localStorage.setItem("userPhn", JSON.stringify(phoneNo));
        onSignin();
      }

    }
  return (
  
    <section className='h-[calc(100vh-80px)] flex justify-center items-center w-screen'>
        <div className='h-fit md:w-96 w-5/6 bg-white rounded-lg shadow flex flex-col justify-center items-center p-4'>
            <Image src={Phone} alt={"phone"} className=''/>
            <div className='flex flex-col gap-4 mt-4 items-center text-center'>
              <h1 className='text-2xl font-semibold'>Enter your phone number</h1>
              <p className='text-gray-500 text-sm w-72'>We will send a code via SMS text message to your phone number.</p>
            </div>
            <form
            ref={formRef}
            onSubmit={(e) => handleSubmit(e)} 
            className='flex flex-col justify-center items-center w-5/6 m-10'>
              <div className='flex flex-col w-full gap-4'>
                <input  type="tel" placeholder='+91 XXXXX-XXXXX' className='w-full outline outline-[#0067cf] rounded-md px-4 py-4 focus:outline-2' />
                <button className={`${loading ? "bg-gray-500" : "bg-[#0067cf]"} w-full  text-white cursor-pointer rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0067cf]`}>{loading ? "Sending.." : "Send"}</button>
                <div id='sign-in-button'></div>
              </div>
            </form>
        </div>
    </section>
  )
}

export default Login