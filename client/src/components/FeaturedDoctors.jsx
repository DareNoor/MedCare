import React from 'react'
import { Star } from 'lucide-react'

const FeaturedDoctors = () => {
  const doctors = [
    { id: 1, name: 'Dr. Ahmed Khan', specialty: 'Cardiologist', experience: '12 years', rating: 4.9, image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400' },
    { id: 2, name: 'Dr. Sara Ali', specialty: 'Neurologist', experience: '8 years', rating: 4.8, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400' },
    { id: 3, name: 'Dr. Usman Malik', specialty: 'Orthopedic', experience: '15 years', rating: 4.9, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400' },
  ]

  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        
        <div className='text-center mb-12'>
          <span className='text-accent font-medium text-sm'>OUR DOCTORS</span>
          <h2 className='font-heading font-bold text-3xl md:text-4xl text-gray-800 mt-2'>
            Meet Our Specialists
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {doctors.map((doctor) => (
            <div key={doctor.id} className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-5'>
              <div className='relative rounded-xl overflow-hidden h-56 mb-4'>
                <img src={doctor.image} alt={doctor.name} className='object-top w-full h-full object-cover'/>
                <div className='absolute top-3 right-3 bg-white rounded-full px-3 py-1 flex items-center gap-1'>
                  <Star size={14} className='fill-yellow-400 text-yellow-400'/>
                  <span className='text-xs font-semibold'>{doctor.rating}</span>
                </div>
              </div>
              <h3 className='font-heading font-semibold text-lg text-gray-800'>{doctor.name}</h3>
              <p className='text-accent text-sm font-medium mt-1'>{doctor.specialty}</p>
              <p className='text-gray-500 text-xs mt-1'>{doctor.experience} experience</p>
              <button className='w-full mt-4 bg-primary-light text-primary py-2.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors'>
                Book Appointment
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturedDoctors