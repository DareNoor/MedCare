import { Briefcase, GraduationCap, MapPin, Star, Table } from 'lucide-react'
import React, { useState } from 'react'

const DoctorDetails = () => {
  const [activeTab, setActiveTab] = useState('about')
  return (
 <div className='max-w-7xl mx-auto px-4 py-10'>
  <div className='flex flex-col lg:flex-row gap-10'>
    <div className='lg:w-2/5'>
    <img 
        src='https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600'
        className='w-full h-96 object-cover object-top rounded-2xl'
      />
    </div>
<div className='lg:w-3/5'>
  
  <div className='flex items-center justify-between'>
    <div>
      <h1 className='font-heading font-bold text-3xl text-gray-800'>Dr. Ahmed Khan</h1>
      <p className='text-accent font-medium mt-1'>Cardiologist</p>
    </div>
    <div className='bg-primary-light rounded-xl px-4 py-2 flex items-center gap-1'>
      <Star size={16} className='fill-yellow-400 text-yellow-400'/>
      <span className='font-bold text-gray-800'>4.9</span>
      <span className='text-gray-500 text-sm'>(120)</span>
    </div>
  </div>

  <div className='flex flex-wrap gap-4 mt-6'>
    <div className='flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg'>
      <Briefcase size={16} className='text-primary'/>
      <span className='text-sm text-gray-600'>12 years experience</span>
    </div>
    <div className='flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg'>
      <MapPin size={16} className='text-primary'/>
      <span className='text-sm text-gray-600'>Lahore</span>
    </div>
    <div className='flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg'>
      <GraduationCap size={16} className='text-primary'/>
      <span className='text-sm text-gray-600'>MBBS, FCPS</span>
    </div>
  </div>

  <p className='text-gray-500 mt-6 leading-relaxed'>
    Dr. Ahmed Khan is a highly experienced cardiologist with over 12 years of practice. 
    He specializes in interventional cardiology and has successfully treated thousands of patients.
  </p>

  <div className='flex items-center justify-between mt-8 bg-primary-light rounded-2xl p-6'>
    <div>
      <p className='text-gray-500 text-sm'>Consultation Fee</p>
      <p className='text-primary font-bold text-2xl'>PKR 2000</p>
    </div>
    <button className='bg-accent hover:bg-blue-700 text-white px-7 py-3.5 rounded-lg font-medium transition-colors'>
      Book Appointment
    </button>
  </div>

</div>

  </div>
  <div className='mt-12'>
  <div className='flex gap-8 border-b border-r-gray-200'>
    {['about','reviews','availability'].map((tab)=>(
      <button key={tab} onClick={()=>setActiveTab(tab)} className={`pb-4 text-sm font-medium capitalize transition-colors relative ${
        activeTab=== tab?'text-primary':'text-gray-400 hover:text-gray-600' 
      }`}>
        {tab}
        {activeTab===tab && (
          <span className='absolute bottom-0 left-0 right-0 h-0.5 bg-primary'></span>
        )}
      </button>
    ))}
  </div>
  <div className='py-8'>
    {activeTab==='about' &&(
      <div>
        <h3 className='font-heading font-semibold text-xl text-gray-800 mb-3'>About Doctor</h3>
 <p className='text-gray-500 leading-relaxed'>
          Dr. Ahmed Khan completed his MBBS from King Edward Medical University and FCPS in Cardiology. 
          He has worked with leading hospitals across Pakistan and is known for his patient-centered approach.
        </p>
              </div>
    )}
    {activeTab==='reviews' &&(
      <div>
        <h3 className='font-heading font-semibold text-xl text-gray-800 mb-3'>Patient Reviews</h3>
                <p className='text-gray-500'>120 reviews · 4.9 average rating</p>

      </div>
    )}
    {activeTab ==='availability' && (
      <div>
        <h3 className='font-heading font-semibold text-xl text-gray-800 mb-3'>Available Slots</h3>
                <p className='text-gray-500'>Mon - Sat: 9:00 AM - 5:00 PM</p>

      </div>
    )}
  </div>
</div>
 </div>
  )
}

export default DoctorDetails