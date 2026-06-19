import React, { useEffect, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { FastForward, Menu, X } from 'lucide-react'
const Navbar = () => {
const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Appointments', path: '/appointments' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]
const [menuOpen,setMenuOpen]=useState(false)
const [scrolled, setScrolled]=useState(false)
useEffect(()=>{
  const handleScroll =()=>setScrolled(window.scrollY>20)
  window.addEventListener('scroll',handleScroll)
  return()=>window.removeEventListener('scroll',handleScroll)
},[])
  return (
<header className='fixed top-0 z-50 left-0 right-0'>
  <nav className={`transition-all duration-300 ${scrolled?'bg-white shadow-md py-3':'bg-white shadow py-4'}`}>
    <div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
      <Link to='/' className='flex items-center gap-2'>
      <div className='w-9 h-9 bg-primary rounded-lg flex items-center justify-center'>
        <span className='text-white font-heading font-bold text-lg'>M</span>
        </div>
        <div>
          <span className='font-heading font-bold text-xl text-primary'>Med</span>
          <span className='font-heading font-bold text-xl text-accent'>Care</span>

          </div></Link>
          <div className='hidden lg:flex items-center gap-8'>
            {navLinks.map((item)=>(
              <NavLink key={item.path} to={item.path}
              className={({isActive})=>`font-body text-sm font-medium transition-colors hover:text-primary ${isActive?'text-primary border-b-2 border-accent':'text-gray-600'}`}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className='hidden lg:flex items-center gap-3 '>
            <Link to='/appointments' className='bg-primary hover:bg-primary-dark text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors'>
            Login
            </Link>
            <Link to='/appointments' className='bg-accent hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors'>
            Book Appointment</Link>
          </div>
          <button onClick={()=>setMenuOpen(!menuOpen)} className='lg:hidden text-primary'>
            {menuOpen? <X size={24}/>:<Menu size={24}/>}
          </button>
    </div>
    {menuOpen && (
      <div className='lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4'>
        {navLinks.map((item)=>(
              <NavLink key={item.path} to={item.path} onClick={()=>setMenuOpen(false)}
              className={({isActive})=>`font-body text-sm font-medium  ${isActive?'text-primary ':'text-gray-600'}`}>
                {item.label}
              </NavLink>
            ))}
            <hr className='border-gray-100'/>
            <Link to='/login' onClick={()=>setMenuOpen(false)} className='bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-lg text-center'>
            Login
            </Link>
            <Link to='/appointments' onClick={()=>setMenuOpen(false)} className='bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-lg text-center'>
            Book Appointment</Link>      </div>
    )}
  </nav>
</header>
  )
}

export default Navbar