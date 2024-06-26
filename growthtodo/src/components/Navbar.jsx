import React from 'react'
import { Menu,X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import {navItems} from '../constants'
// import {Link} from "react-router-dom"



                                       

const Navbar = () => {
    const [mobileDrawOpen,setMobileDrawerOpen]=useState(false);
    
    const toggleNavbar=()=>{
setMobileDrawerOpen(!mobileDrawOpen)
    }

  const  scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            offsetTop: "60px"
          });
        }
      }
  return (
<nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
    <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
            <div className="flex tems-center flex-shrink-0">
                <img className=' h-10 w-10 mr-2'src={logo} alt='logo'/>
              <span className="text-xl tracking-tight">DreamSync</span>
            </div>
           <ul className="hidden lg:flex ml-14 space-x-12 text-red">
            {navItems.map((item, index)=>(
                <li key={index}>
                    <button className='text-white' onClick={
                        ()=>{
                            scrollToSection(item.href)
                        }
                    }>{item.label}</button>
                </li>
            ))}
           </ul>
           <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href='#' className="py-2 px-3 border rounded-md">Sign In</a>
            <a href='#' className="py-2 px-3 bg-gradient-to-r from-blue-500 to-blue-800  border rounded-md">Create an Account</a>
           </div>
           <div className="lg:hidden md:flex-col justify-end">
            <button onClick={toggleNavbar}>
                {mobileDrawOpen?<X/>:<Menu/>}
            </button>
           </div>
        </div>
        {mobileDrawOpen && (
     <div className="fixed right-0 z-20 bg-neutral-900- w-full p-10 flex flex-col justify-center items-center lg:hidden">
        <ul>
            {navItems.map((item,index)=>(
                <li key={index} className='py-4'>
                    <a href={item.href}>{item.label}</a>
                </li>
            ))}
        </ul>
        <div className='flex space-x-6'>
<a href='#' className='py-2 px-3 border rounded-md'>
    Sign In
</a>
<a href='#' className='py-2 px-2 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>
Create New Account
</a>
        </div>
     </div>        )}
    </div>
</nav>
  )
}

export default Navbar
