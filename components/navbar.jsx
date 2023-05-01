import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/Logo.png'
import { useState } from 'react'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white text-black h-20">
            <Link 
            href="#" 
            class="flex items-center">
                <Image 
                width={40}
                height={40}
                src={Logo} 
                class="h-8 mr-3" alt="Logo"/>
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">RailSeatify</span>
            </Link>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
                <button type="button" className="text-white w-full bg-[#007fff] hover:bg-[#0067cf]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-md px-4 py-2 text-center mr-3 md:mr-0">Logn</button>
            {/* <button type="button" className="text-white bg-[#007fff] hover:bg-[#0067cf]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Get started</button> */}
            </div> 
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
            <Link 
            href="#" 
            class="flex items-center">
                <Image 
                width={40}
                height={40}
                src={Logo} 
                class="h-8 mr-3" alt="Logo"/>
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">RailSeatify</span>
            </Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/contact">
                        CONTACT
                    </NavLink>
                    <NavLink to="/about">
                        ABOUT
                    </NavLink>
                    <NavLink to="/login">
                        LOGIN
                    </NavLink>
                </div>
            
            </div>
        </nav>
    )
}