import React from 'react'
import { Link } from 'react-router-dom'

const CTABanner = () => {
  return (
<section className='py-16'>
  <div className='max-w-7xl mx-auto px-4'>
    <div className='bg-primary rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center'>
      <div className='p-10 lg:p-14'>
        <h2 className='font-heading font-bold text-3xl md:text-4xl text-white mb-4'>
                    Need Medical Advice? Talk to a Doctor Today
 </h2>
 <p className='text-white/70 mb-8'>
           Get instant consultation from certified doctors anytime, anywhere. Your health is just a click away.

 </p>
 <Link to='/appointments' className='inline-block bg-accent hover:bg-blue-700 text-white px-7 py-3.5 rounded-lg font-medium transition-colors'>
Book Appointment
 </Link>
      </div>
      <div className='hidden lg:block h-full'>
        <img src='https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=800'
          alt='Doctor consultation' className='object-top w-full h-full object-cover'
/>
      </div>
    </div>
  </div>
</section>
  )
}

export default CTABanner