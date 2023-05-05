import Image from 'next/image'
import React from 'react';
import HeroImg from '../assets/HeroImg.png';
// import { useAuth } from '../backend/useAuth';
import { useRouter } from 'next/router';

function Hero() {
  
// const { onSignin } = useAuth();
const router = useRouter();
// 
  return (
   <section className="bg-white text-black md:mx-10">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Now</h1>
				<h1 className='text-5xl font-bold leading-none sm:text-6xl'><span className="text-[#0067cf]">Reserve</span> seat in Unreserved
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				<br className="hidden md:inline lg:hidden"/>Ut enim ad minim veniam, quis nostrud exercitation 
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<button  
				onClick={() => router.push('/login')}
				className="px-8 py-3 text-lg font-semibold rounded border border-b-2 shadow-md text-[#007fff] hover:bg-[#007fff] hover:text-white hover:transition-transform">
					Get started
				</button>
				
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<Image src={HeroImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
  )
}

export default Hero




