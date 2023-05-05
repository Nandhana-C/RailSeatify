import React, {useRef, useState} from 'react';
import { useAuth } from '../backend/useAuth';

function Login() {

    const FormVaildToast = (type) => {
        api[type]({
          message: "Error",
          description: "Please enter a valid phone number",
        });
      };
    // const [userPhn, setUserPhn] = useState(typeof window !== "undefined" && JSON.parse(localStorage.getItem("userPhn")));
    const { onSignin,api } = useAuth();
    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        // const data = new FormData(formRef.current);
        const phoneNo = '+91' + formRef.current[0]?.value
        if (phoneNo.length !== 13) {
            FormVaildToast("error");}
        else{
        localStorage.setItem("userPhn", JSON.stringify(phoneNo));
        onSignin();}

    }

  return (
    <section className='h-screen flex justify-center items-center w-screen'>
        <div className='h-4/6 md:w-96 w-5/6 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold text-[#0067cf]'>Verify Your Phone No</h1>
            <form
            ref={formRef}
            onSubmit={(e) => handleSubmit(e)} 
            className='flex flex-col justify-center items-center w-5/6 m-10'>
                <input  type="tel" placeholder='+91 XXXXX-XXXXX' className='w-full border-2 border-[#0067cf] rounded-lg p-2 my-2 focus:outline-none focus:ring-2 focus:ring-[#0067cf]' />
                <button className='w-full bg-[#0067cf] text-white cursor-pointer rounded-lg p-2 my-2 focus:outline-none focus:ring-2 focus:ring-[#0067cf] mt-5'>Send OTP</button>
                <div id='sign-in-button'></div>
            </form>
        </div>
    </section>
  )
}

export default Login