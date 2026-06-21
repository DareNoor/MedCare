import React from 'react'

const Appointments = () => {
  return (
    <>
    <div className='bg-primary py-12 text-center'>
      <h1 className='font-heading font-bold text-3xl md:text-4xl text-white'>Book Appointment</h1>
      <p className='text-white/70 mt-2'>Fill in your details to schedule a visit</p>
    </div>
    <div className='max-w-2xl mx-auto px-4 py-12'>
      <div className='bg-white rounded-2xl shadow-md p-8'>
        <div className='flex flex-col gap-5'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Select Doctor</label>
            <select className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none'>
              <option>Choose a doctor</option>
      <option>Dr. Ahmed Khan - Cardiologist</option>
      <option>Dr. Sara Ali - Neurologist</option>
      <option>Dr. Usman Malik - Orthopedics</option>
            </select>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Preferred Date</label>
              <input type="date" className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none' />

            </div>
            <div>
 <label className='block text-sm font-medium text-gray-700 mb-2'>Preferred Time</label>
      <select className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none'>
        <option>Choose time</option>
        <option>9:00 AM</option>
        <option>11:00 AM</option>
        <option>2:00 PM</option>
        <option>4:00 PM</option>
      </select>          
        </div>
     

          </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
  <div>
    <label className='block text-sm font-medium text-gray-700 mb-2'>Full Name</label>
    <input type='text' placeholder='Your name' className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none'/>
  </div>
  <div>
    <label className='block text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
    <input type='text' placeholder='+92 300 1234567' className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none'/>
  </div>
</div>
<div>
  <label className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
  <input type="email" placeholder='your@email.com' className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none' />

</div>
<div>
  <label className='block text-sm font-medium text-gray-700 mb-2'>Reason for Visit</label>
  <textarea rows={3} placeholder='Briefly describe your symptoms or reason' className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none'></textarea>
</div>
<button className='bg-accent hover:bg-blue-700 text-white py-3.5 rounded-lg font-medium transition-colors mt-2'>
  Confirm Appointment
</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Appointments