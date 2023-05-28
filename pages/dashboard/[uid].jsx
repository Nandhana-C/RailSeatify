import React, { useEffect } from 'react';
import axios from 'axios';
import Train from '../../assets/train-solid.svg';
import { Image } from 'antd';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PeopleIcon from '@mui/icons-material/People';
import { trains } from '../../assets/trains';
import TrainIcon from '@mui/icons-material/Train';
import EastIcon from '@mui/icons-material/East';
import IosShareIcon from '@mui/icons-material/IosShare';

function IdDashboard() {

  const getDetails = async () => {
      const options = {
      method: 'GET',
      url: 'https://irctc1.p.rapidapi.com/api/v1/searchStation',
      params: {query: 'BJU'},
      headers: {
        'X-RapidAPI-Key': '54e99d4111msh99df70f20bb0e5cp1c0f1djsn1c6ae01cda58',
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   getDetails();
  // },[])

  return (
    <section className="w-full h-screen bg-white">
      {/* header section */}
      <section className="w-full px-8 py-4 border-b flex justify-between items-center">
        <div className="md:flex hidden gap-8 font-semibold text-sm">
          <h1 className="cursor-pointer text-black">Home</h1>
          <h1 className="cursor-pointer text-gray-500">Train Status</h1>
          <h1 className="cursor-pointer text-gray-500">Bookings</h1>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='border-r flex gap-4'>
            <div className='w-8 h-8 bg-gray-300/20 border rounded-full flex justify-center items-center'>
              <SettingsIcon className='text-gray-600' fontSize='small'/>
            </div>
            <div className='mr-4 w-8 h-8 bg-gray-300/20 border rounded-full flex justify-center items-center'>
              <NotificationsIcon className='text-gray-600' fontSize='small'/>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-sm">Jayanth Srinivasan</h1>
          </div>
        </div>
      </section>
      {/* body section */}
      <section className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 md:px-16 bg-slate-100">
          <div className='w-full h-fit bg-white grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md p-4'>
            {/* input fields */}
            <div className='w-full flex gap-4 p-2 items-center bg-slate-50 border rounded-md'>
              <LocationOnIcon className='text-gray-600' fontSize='small'/>
              {/* <h1>From</h1> */}
              <input
                className="px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#0067cf] focus:ring-opacity-50 focus:border-transparent"
                type="text"
                placeholder="From"
              />
            </div>
            {/* input fields */}
            <div className='w-full flex gap-4 p-2 items-center bg-slate-50 border rounded-md'>
              <LocationOnIcon className='text-gray-600' fontSize='small'/>
              {/* <h1>To</h1> */}
              <input
                className="px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#0067cf] focus:ring-opacity-50 focus:border-transparent"
                type="text"
                placeholder="To"
              />
            </div>
            {/* input fields */}
            <div className='w-full flex gap-4 p-2 items-center bg-slate-50 border rounded-md'>
              <h1>Class</h1>
              <select                
                className="px-4 w-full py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0067cf] focus:ring-opacity-50 focus:border-transparent">
                <option hidden className="text-[#858585] bg-white">
                  All Class
                </option>
                <option value="All Class">All Class</option>
                <option value="Anubhuti Class (EA)">Anubhuti Class (EA)</option>
                <option value="AC First Class (1A)">AC First Class (1A)</option>
                <option value="Vistadome AC (EV)">Vistadome AC (EV)</option>
                <option value="Exec. Chair Car (EC)">Exec. Chair Car (EC)</option>
                <option value="AC 2 Tier (2A)">AC 2 Tier (2A)</option>
                <option value="First Class (FC)">First Class (FC)</option>
                <option value="AC 3 Tier (3A)">AC 3 Tier (3A)</option>
              </select>
            </div>
            {/* input fields */}
            <div className='w-full flex gap-4 p-2 items-center bg-slate-50 border rounded-md'>
              <CalendarMonthIcon className='text-gray-600' fontSize='small'/>
              <input
                className="px-4 w-full py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0067cf] focus:ring-opacity-50 focus:border-transparent"
                type="text"
                onFocus={
                    (e)=> {
                      e.currentTarget.type = "date";
                      e.currentTarget.focus();
                  }
                }
                placeholder="Date"
              />
            </div>
            {/* input fields */}
            <div className='w-full flex justify-between gap-4 p-2 items-center bg-slate-50 border rounded-md'>
              <div className='w-8 h-8 bg-slate-100 rounded border flex justify-center items-center'>
                <RemoveIcon className='text-gray-600 cursor-pointer' fontSize='small'/>
              </div>
              <div className='flex items-center gap-2'>
                <PeopleIcon className='text-gray-600' fontSize='small'/>
                {"2"}
              </div>
              <div className='w-8 h-8 bg-slate-100 rounded border flex justify-center items-center'>
                <AddIcon className='text-gray-600 cursor-pointer' fontSize='small'/>
              </div>
            </div>
            {/* search */}
            <div className='p-4 w-full cursor-pointer flex justify-center items-center bg-[#0067cf] text-white border rounded-md'>
            Search
            </div>
          </div>
          {/* trains */}
          <div className='w-full grid grid-cols-1 gap-4 overflow-y-scroll no-scrollbar'>
            {
              trains.map((train, index) => {
                return(
                  <div className='w-full flex flex-col gap-2 bg-white rounded-md p-4 shadow' key={index}>
                    <div className='w-full flex justify-between'>
                      <div className='flex gap-2 items-center'>
                        <TrainIcon className='text-[#007ff7]'fontSize='large'/>
                        <div className="flex flex-col">
                          <h1 className='font-semibold'>{train.trainNo} - {train.trainName}</h1>
                          <p className='text-sm text-gray-500'>{train.duration}</p>
                        </div>
                      </div>
                      <p className='border w-fit h-fit p-2 rounded-md text-green-400 border-green-400 font-bold'>₹ {train.fare}</p>
                    </div>
                    <div className='flex justify-between border-b pb-4 items-center text-sm'>
                      <div className='flex flex-col '>
                        <h1 className='font-semibold'>{train.from.stationName} <span className='font-medium'>{`(${train.from.stationCode})`}</span></h1>
                        <p>{train.startDate} &bull; {train.startTime}</p>
                      </div>
                      <EastIcon/>
                      <div className='flex flex-col'>
                        <h1 className='font-semibold'>{train.to.stationName} <span className='font-medium'>{`(${train.to.stationCode})`}</span></h1>
                        <p>{train.endDate} &bull; {train.endTime}</p>
                      </div>
                    </div>
                    <div className='w-full flex flex-col gap-4 pt-2'>
                      <div className='flex w-full text-sm justify-between'>
                        {/* <div className='flex gap-4'>
                          <p className='text-gray-500 bg-slate-200/20 font-medium border border-gray-300 p-1 rounded hover:bg-gray-200/50 cursor-pointer'>Sleeper (SL)</p>
                          <p className='text-gray-500 bg-slate-200/20 font-medium border border-gray-300 p-1 rounded hover:bg-gray-200/50 cursor-pointer'>AC 3 Tier (3A)</p>
                          <p className='text-gray-500 bg-slate-200/20 font-medium border border-gray-300 p-1 rounded hover:bg-gray-200/50 cursor-pointer'>AC 2 Tier (2A)</p>
                        </div> */}
                          <select                
                            className="px-4 bg-slate-50 border border-slate-200 w-fit py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0067cf] focus:ring-opacity-50 focus:border-transparent">
                            <option hidden className="text-[#858585] bg-white">
                              Select class
                            </option>
                            <option value="Sleeper (SL)">Sleeper (SL)</option>
                            <option value="AC 2 Tier (2A)">AC 2 Tier (2A)</option>
                            <option value="AC 3 Tier (3A)">AC 3 Tier (3A)</option>
                          </select>
                        <p className='cursor-pointer font-medium flex gap-1 items-center text-amber-500 bg-amber-300/30 py-1 px-2 rounded'><IosShareIcon fontSize='small'/>Share</p>
                      </div>
                      <div className='flex gap-4 pb-2 overflow-x-scroll'>
                        {
                          [1,2,3,4,5,6,7,8].map((item, index) => (
                          <div key={index} className='cursor-pointer bg-slate-50 min-w-fit px-4 text-sm font-medium border border-slate-200 p-2 rounded-md'>
                            <h1>Sun 28 May</h1>
                            <p className='text-red-500'>WL 9</p>
                          </div>
                          ))
                        }
                      </div>
                      <div>
                        <button  className='px-4 py-2 w-fit cursor-pointer flex justify-center items-center bg-[#0067cf] text-white border rounded-md'>Book</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
      </section>
    </section>
  )
}

export default IdDashboard