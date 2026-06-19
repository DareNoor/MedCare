import React from 'react'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
<section className='min-h-screen flex items-center'>
  <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
    <div>
      <span className='inline-block bg-primary-light text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4'>
            🏥 Trusted Healthcare Platform
<h1 className='font-heading font-bold text-4xl md:text-5xl text-gray-800 leading-tight mb-4'>
  Your Health, <span className='text-primary'>Our Priority</span>
</h1>
<p className='text-gray-500 text-lg mb-8 max-w-lg'>
      Book appointments with top-rated doctors near you. Quality healthcare made simple and accessible.

</p>
<div className='flex flex-wrap gap-4 mb-10'>
  <Link to='/appointments' className='bg-accent hover:bg-blue-700 text-white px-7 py-3.5 rounded-lg font-medium transition-colors'>
  Book Appointment
  </Link>
   <Link to='/doctors' className='relative overflow-hidden border border-primary text-primary px-7 py-3.5 rounded-lg font-medium transition-colors hover:text-white group'>
  <span className='absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300'></span>
  <span className='relative'>Find a Doctor</span>
</Link>
</div>
      </span>
    </div>
    <div className='relative'>
      <div className='relative  rounded-3xl overflow-hidden h-[400px] md:h-[500px]'>
        <img       src='https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800' alt="Doctor" className='w-full h-full object-top object-cover' />
      </div>
      <div className='absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3'>
        <div className='w-12 h-12 bg-primary-light rounded-full flex items-center justify-center'>
          <span className='text-primary font-bold text-lg'>15+</span>
        </div>
        <div>
          <p className='font-semibold text-gray-800 text-sm'>Years of</p>
          <p className='text-gray-500 text-xs'>Excellence</p>
        </div>
      </div>
      <div className='absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4'>
        <p className='font-heading font-bold text-primary text-2xl'>10K+</p>
        <p className='text-gray-500 text-xs'>Happy Patients</p>
      </div>
    </div>
  </div>
</section>  )
}

export default Hero