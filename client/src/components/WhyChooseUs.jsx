import React from 'react'

const WhyChooseUs = () => {
  return (
 <section className='max-w-7xl mx-auto px-4 py-16'>

        <h2 className='text-center font-heading font-bold text-3xl text-gray-800 mb-10'>
          Why Choose MedCare?
        </h2>


        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>


          <div className='border-t-4 border-b-4 border-primary/30 rounded-2xl p-6 shadow-sm '>
            <h3 className='font-semibold text-gray-800 text-lg mb-2'>
              Qualified Doctors
            </h3>

            <p className='text-gray-500 text-sm'>
              Get appointments with experienced and trusted healthcare professionals.
            </p>

          </div>



          <div className='border-t-4 border-b-4 border-primary/30 rounded-2xl p-6 shadow-sm '>
            <h3 className='font-semibold text-gray-800 text-lg mb-2'>
              Easy Appointments
            </h3>

            <p className='text-gray-500 text-sm'>
              Book your medical appointments quickly from anywhere.
            </p>

          </div>



          <div className='border-t-4 border-b-4 border-primary/30 rounded-2xl p-6 shadow-sm '>
            <h3 className='font-semibold text-gray-800 text-lg mb-2'>
              Patient Care
            </h3>

            <p className='text-gray-500 text-sm'>
              We focus on providing comfortable and reliable healthcare services.
            </p>

          </div>


        </div>

      </section>  )
}

export default WhyChooseUs