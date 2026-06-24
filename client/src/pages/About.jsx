import React from 'react'
import States from '../components/States'
import WhyChooseUs from '../components/WhyChooseUs'

const About = () => {
  return (
    <>
    <div className='bg-primary py-12 text-center'>
      <h1 className='font-heading font-bold text-3xl md:text-4xl text-white'>About MedCare</h1>
      <p className='text-white/70 mt-2'>
                Providing trusted healthcare solutions for everyone

      </p>
    </div>
    <section className='max-w-7xl mx-auto px-4 py-16'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <div className='relative'>
          <div className='rounded-3xl overflow-hidden h-[400px]'>
            <img
                src='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800'
                alt='Healthcare'
                className='w-full h-full object-cover'
              />
          </div>
          <div className='absolute -bottom-5 -right-5 bg-white shadow-xl rounded-2xl p-5'>
            <h3 className='text-primary font-bold text-2xl'>10K+</h3>
            <p className='text-gray-500 text-sm'>
              Patients Served
            </p>
          </div>
        </div>
        <div>
          <span className='inline-block bg-primary-light text-primary px-4 py-1 rounded-full text-sm font-medium mb-4' >
            About Us
          </span>
          <h2 className='font-heading font-bold text-3xl text-gray-800 leading-tight mb-5'>
                          Your Trusted Partner in
            <span className='text-primary'>Better Health</span>
          </h2>
          <p className='text-gray-500 leading-7 mb-5'>
            MedCare is a modern healthcare platform dedicated to making
              quality medical services accessible and simple. We connect
              patients with experienced doctors and provide a smooth
              healthcare experience.
          </p>
          <button className='bg-primary hover:bg-primary-dark text-white px-7 py-3 rounded-lg transition-colors'>Learn More</button>
        </div>
      </div>
    </section>
<States/>
<WhyChooseUs/>
    </>
  )
}

export default About