import React from 'react'

const States = () => {
  return (
  <section className='bg-gray-50 py-16'>

        <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6'>


          <div className='bg-white rounded-2xl shadow-sm p-8 text-center'>
            <h2 className='text-primary font-bold text-3xl'>
              15+
            </h2>
            <p className='text-gray-500 mt-2'>
              Years Experience
            </p>
          </div>


          <div className='bg-white rounded-2xl shadow-sm p-8 text-center'>
            <h2 className='text-primary font-bold text-3xl'>
              100+
            </h2>
            <p className='text-gray-500 mt-2'>
              Expert Doctors
            </p>
          </div>


          <div className='bg-white rounded-2xl shadow-sm p-8 text-center'>
            <h2 className='text-primary font-bold text-3xl'>
              10K+
            </h2>
            <p className='text-gray-500 mt-2'>
              Happy Patients
            </p>
          </div>


        </div>

      </section>  )
}

export default States