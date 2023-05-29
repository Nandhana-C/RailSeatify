import React from 'react'
import TrainIcon from '@mui/icons-material/Train';
import EastIcon from '@mui/icons-material/East';
import IosShareIcon from '@mui/icons-material/IosShare';
import Nav from '../components/dashboardnav';

const Bookings = () => {

const trains = [
{
    trainName : "ddee",
    trainNo : "1029",
    duration:"2Hrs",
    fare:"200",
    fromStationName:"hdj",
    fromStationCode:"jnjfn",
    startDate:"21-05-2023",
    startTime:"9:00am",
    tostationName:"qbw",
    tostationCode : "svhjn",
    endDate:"23-05-2023",
    endTime:"10:00am"
},
{
    trainName : "ddee",
    trainNo : "1029",
    duration:"2Hrs",
    fare:"100",
    fromStationName:"hdj",
    fromStationCode:"jnjfn",
    startDate:"21-05-2023",
    startTime:"9:00am",
    tostationName:"qbw",
    tostationCode : "svhjn",
    endDate:"22-05-2023",
    endTime:"10:00am"
}]
  return (
    <section className="w-full h-screen bg-white">
        <Nav/>
        <div className='m-10 w-[70%] mx-auto grid grid-cols-1  gap-4 overflow-y-scroll no-scrollbar'>
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
                        <h1 className='font-semibold'>{train.fromStationName} <span className='font-medium'>{`(${train.fromStationCode})`}</span></h1>
                        <p>{train.startDate} &bull; {train.startTime}</p>
                      </div>
                      <EastIcon/>
                      <div className='flex flex-col'>
                        <h1 className='font-semibold'>{train.tostationName} <span className='font-medium'>{`(${train.tostationCode})`}</span></h1>
                        <p>{train.endDate} &bull; {train.endTime}</p>
                      </div>
                    </div>
                    <div className='w-full flex flex-col gap-4 pt-2'>
                    </div>
                  </div>
                )
              })
            }
          </div>
    </section>
  )
}

export default Bookings