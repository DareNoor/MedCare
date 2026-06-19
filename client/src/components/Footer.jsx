import { Phone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
<footer>
  <div className='bg-accent py-3'>
    <div className='max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2'>
      <p className='text-white text-sm font-medium flex items-center gap-2'>
        <Phone size={16}/>24/7 Emergency: +92 300 123 4567
      </p>
      <a href="tel:+923001234567" className='bg-white text-accent text-sm font-semibold px-4 py-1.5 rounded-full'>Call Now</a>
    </div>
  </div>
  <div className='bg-primary-dark text-white py-14'>
    <div className='max-w-7xl mx-auto px-4 flex flex-col items-center text-center'>
 <Link to='/' className='flex items-center gap-2 mb-3'>
      <div className='w-10 h-10 bg-white rounded-lg flex items-center justify-center'>
        <span className='text-primary font-heading font-bold text-xl'>M</span>
      </div>
      <div>
        <span className='font-heading font-bold text-2xl text-white'>Med</span>
        <span className='font-heading font-bold text-2xl text-accent'>Care</span>
      </div>
    </Link>
    <p className='text-white/70 text-sm max-w-md'>      Connecting you with trusted doctors and accessible healthcare, anytime, anywhere in Pakistan.
</p>
  <div className='bg-primary rounded-2xl p-6 mt-8 w-full max-w-md'>
    <p className='font-heading font-semibold text-lg mb-1'>Stay Updated</p>
    <p className='text-white/70 text-sm mb-4'>Get health tips and updates in your inbox</p>
    <div className='flex gap-2'>
      <input type="email" placeholder='Enter your email' className='flex-1 px-4 py-2.5 rounded-lg text-sm text-gray-800 outline-none'/>
<button className='bg-accent hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors'>
      Subscribe
    </button>    </div>
  </div>
        </div>
        <div className='border-t border-white/10 mt-10 pt-8 w-full'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-center gap-4'>
          <div className='flex flex-wrap justify-center gap-6 text-sm text-white/70'>
          <Link to='/' className='hover:text-accent transition-colors'>Home</Link>
      <Link to='/doctors' className='hover:text-accent transition-colors'>Doctors</Link>
      <Link to='/appointments' className='hover:text-accent transition-colors'>Appointments</Link>
      <Link to='/about' className='hover:text-accent transition-colors'>About</Link>
      <Link to='/contact' className='hover:text-accent transition-colors'>Contact</Link>
   
          </div>
          <div className='flex items-center gap-4'>
             <a href='#' className='hover:text-accent transition-colors'><FaFacebook size={16}/></a>
      <a href='#' className='hover:text-accent transition-colors'><FaTwitter size={16}/></a>
      <a href='#' className='hover:text-accent transition-colors'><FaInstagram size={16}/></a>

          </div>
          <p className='text-white/50 text-xs'>
                © {new Date().getFullYear()} MedCare. All rights reserved.

          </p>
        </div>
        </div>
 
  </div>
 

</footer>  )
}

export default Footer