import React from 'react'
import {Mail, MapPin, Phone} from 'lucide-react'
const Contact = () => {

  return (
    <>
    <div className='bg-primary py-12 text-center'>
  <h1 className='font-heading font-bold text-3xl md:text-4xl text-white'>Get In Touch</h1>
  <p className='text-white/70 mt-2'>We're here to help with your healthcare needs</p>
</div>
<div className='max-w-7xl mx-auto px-4 py-12'>
  <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12'>
    <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition-shadow'>
      <div className='w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4'>
        <Phone className='text-primary size-{24}'/>
      </div>
      <h3 className='font-heading font-semibold text-gray-800'>Call Us</h3>
            <p className='text-gray-500 text-sm mt-1'>+92 300 123 4567</p>

    </div>
     <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition-shadow'>
      <div className='w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4'>
        <Mail className='text-primary' size={24}/>
      </div>
      <h3 className='font-heading font-semibold text-gray-800'>Email Us</h3>
      <p className='text-gray-500 text-sm mt-1'>info@medcare.com</p>
    </div>
     <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition-shadow'>
      <div className='w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4'>
        <MapPin className='text-primary' size={24}/>
      </div>
      <h3 className='font-heading font-semibold text-gray-800'>Visit Us</h3>
      <p className='text-gray-500 text-sm mt-1'>DHA Phase 6, Lahore</p>
    </div>
  </div>
  <div className='max-w-2xl mx-auto'>
    <div className='bg-white rounded-2xl shadow-md p-8'>
      <h2 className='font-heading font-bold text-2xl text-gray-800 mb-6 text-center'>Send Us a Mesage</h2>
      <div className='flex flex-col gap-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Full Name</label>
            <input type="text" placeholder='Your name' className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none' />

          </div>
          <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
          <input type='email' placeholder='your@email.com' className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none'/>
        </div>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-2'>Subject</label>
        <input type='text' placeholder='How can we help?' className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none'/>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-2'>Message</label>
        <textarea rows={4} placeholder='Your message...' className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none'></textarea>
      </div>

      <button className='bg-primary hover:bg-primary-dark text-white py-3.5 rounded-lg font-medium transition-colors mt-2'>
        Send Message
      </button>

      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Contact