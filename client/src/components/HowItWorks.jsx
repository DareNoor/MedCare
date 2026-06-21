import React from 'react'

const HowItWorks = () => {
    const steps = [
  { number: '01', title: 'Find a Doctor', desc: 'Search and choose from our verified specialists' },
  { number: '02', title: 'Book Appointment', desc: 'Select your preferred date and time slot' },
  { number: '03', title: 'Get Consultation', desc: 'Visit clinic or consult online with ease' },
]
  return (
<section className='py-16 bg-primary-light'>
    <div className='text-center mb-12'>
      <span className='text-accent font-medium text-sm'>SIMPLE PROCESS</span>
     <h2 className='font-heading font-bold text-3xl md:text-4xl text-gray-800 mt-2'>
        How It Works
     </h2>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative'>
        {steps.map((step,index)=>(
            <div key={step.number} className='relative text-center'>
                <div className='w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4 relative z-10'>
                    {step.number}
                </div>
                <h2 className='font-heading font-semibold text-lg text-gray-800 mb-2'>{step.title}</h2>
                <p className='text-gray-500 text-sm max-w-xs mx-auto'>{step.desc}</p>
                {index<steps.length - 1 && (
<div className='hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/30 z-10'></div>                )}
            </div>
        ))}
    </div>
</section>
  )
}

export default HowItWorks