import React from 'react'
import {Heart, Brain, Bone, Eye, Baby, Stethoscope} from 'lucide-react'
const Services = () => {
    const services = [
  { icon: <Heart size={28}/>, title: 'Cardiology', desc: 'Expert heart care and treatment' },
  { icon: <Brain size={28}/>, title: 'Neurology', desc: 'Advanced brain and nerve care' },
  { icon: <Bone size={28}/>, title: 'Orthopedics', desc: 'Bone and joint specialists' },
  { icon: <Eye size={28}/>, title: 'Ophthalmology', desc: 'Complete eye care services' },
  { icon: <Baby size={28}/>, title: 'Pediatrics', desc: 'Specialized care for children' },
  { icon: <Stethoscope size={28}/>, title: 'General Medicine', desc: 'Comprehensive health checkups' },
]
  return (
<section className='py-16 bg-cream'>
    <div className='max-w-7xl mx-auto px-4'>
     <div className='text-center mb-12'>
        <span className='text-accent font-medium text-sm'>OUR SERVICES </span>
        <h2 className='font-heading font-bold text-3xl md:text-4xl text-gray-800 mt-2'>
            Comprehensive Medical Care
        </h2>
     </div>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((service)=>(
            <div key={service.title} className='bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group'>
                <div className='w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors'>
                    {service.icon}
                </div>
                <h3 className='font-heading font-semibold text-lg text-gray-800 mb-2'>{service.title}</h3>
                <p className='text-gray-500 text-sm'>{service.desc}</p>
            </div>
        ))}
     </div>
    </div>
</section>
  )
}

export default Services