import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link';


const DashboardNav = () => {
  return (
    <section className="w-full px-8 py-4 border-b flex justify-between items-center">
    <div className="md:flex hidden gap-8 font-semibold text-sm">
      <h1 className="cursor-pointer text-black">Home</h1>
      <h1 className="cursor-pointer text-gray-500">Train Status</h1>
      <Link href="/bookings"><h1 className="cursor-pointer text-gray-500">Bookings</h1></Link>
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
  )
}

export default DashboardNav