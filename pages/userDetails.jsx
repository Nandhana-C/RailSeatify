import React, {use, useState} from 'react';
import Nav from '../components/dashboardNav';

const UserDetails = () => {

const [inputList, setinputList]= useState([{passengerName:'', gender:'', age:''}]);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setinputList(list);

  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, {passengerName:'', gender:'', age:''}]);
  }

  return (
    <section className="w-full h-screen bg-white">
      <Nav/>
    
    {/* body section */}
      <section className='my-5 mx-8'>
      { 
            inputList.map( (x,i)=>{
              return(
      <div className='w-full h-fit bg-white grid grid-cols-1 md:grid-cols-3 gap-5 rounded-md p-4'>
              {/* input fields */}
            
              <div className='w-full flex gap-4 p-2 items-center bg-slate-50 border rounded-md'>
                {/* <h1>From</h1> */}
                <input
                  className="px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#0067cf] focus:ring-opacity-50 focus:border-transparent"
                  type="text"
                  placeholder="Passenger Name"
                />
              </div>
              <div className='w-full flex gap-4 p-2 items-center bg-slate-50 border rounded-md'>
                <input 
                  className="px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#0067cf] focus:ring-opacity-50 focus:border-transparent"
                  type="number"
                  placeholder="Age"
                />
              </div>
              <div className='w-full flex gap-4 p-2 items-center bg-slate-50 border rounded-md'>
                <select className="px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#0067cf] focus:ring-opacity-50 focus:border-transparent">
                  <option hidden className="text-[#858585] bg-white">
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender">Transgender</option>
                </select>
              </div>
            </div>
              );})}
            
          
            <div className='grid md:grid-cols-2'>
              <div>
              <button
            className={`bg-[#0067cf] mx-4 mt-1 w-1/8 text-white cursor-pointer rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0067cf]`}
            type="submit"
            onClick={ handleaddclick}
            >
            Add Passenger
          </button>
              </div>
              <div className='grid md:place-items-end'>
              <button
            className={`bg-[#0067cf] mx-4 mt-1 w-1/8 text-white cursor-pointer rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0067cf]`}
            type="submit"
            >
            Book
          </button>
              </div>
          </div>
           
      </section>
  </section>
  )
}

export default UserDetails


