import { Briefcase, Search, Star } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Doctors = () => {
  const specialties = ['All', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dermatology', 'General']
const [activeSpecialty, setActiveSpecialty] = useState('All')
const doctors = [
  { id: 1, name: 'Dr. Ahmed Khan', specialty: 'Cardiology', experience: '12 years', rating: 4.9, fee: 'PKR 2000', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400' },
  { id: 2, name: 'Dr. Sara Ali', specialty: 'Neurology', experience: '8 years', rating: 4.8, fee: 'PKR 2500', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400' },
  { id: 3, name: 'Dr. Usman Malik', specialty: 'Orthopedics', experience: '15 years', rating: 4.9, fee: 'PKR 3000', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400' },
  { id: 4, name: 'Dr. Ayesha Tariq', specialty: 'Pediatrics', experience: '10 years', rating: 4.7, fee: 'PKR 1800', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400' },
  { id: 5, name: 'Dr. Bilal Hassan', specialty: 'Dermatology', experience: '9 years', rating: 4.6, fee: 'PKR 2200', image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400' },
{ id: 6, name: 'Dr. Hira Shah', specialty: 'General', experience: '6 years', rating: 4.5, fee: 'PKR 1500', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400' },
]
  return (
    <>
<div className='bg-primary py-16 text-center'>
  <h1 className='font-heading font-bold text-3xl md:text-4xl text-white mb-4'>
    Find Your Doctor
  </h1>
  <p className='text-white/70 mb-6'>Book appointments with the best specialists</p>
  <div className='max-w-xl mx-auto px-4'>
    <div className='flex items-center bg-white rounded-lg overflow-hidden shadow-lg'>
      <input placeholder='Search doctor or specialty...' className='flex-1 px-5 py-3.5 outline-none text-gray-700' />
      <button className='bg-accent text-white px-6 py-5'>
        <Search size={18}/>
      </button>
    </div>
  </div>
</div> 
<div className='max-w-7xl mx-auto px-4 py-8'>
  <div className='flex gap-3 overflow-x-auto pb-2 mb-8'>
    {specialties.map((spec)=>(
      <button key={spec} onClick={()=>setActiveSpecialty(spec)}
      className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeSpecialty===spec?'bg-primary text-white':'bg-white text-gray-600 border border-gray-200 hover:border-primary'}`}>{spec}</button>
    ))}
  </div>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {doctors.map((doctor)=>(
      <Link to={`/doctor/${doctor.id}`} key={doctor.id}>
        <div className='bg-white border-l-4 border-t-4 border-primary/60  rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden  group'>
  
  {/* Image with gradient overlay */}
  <div className='relative h-60 overflow-hidden'>
    <img 
      src={doctor.image} 
      alt={doctor.name} 
      className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div>
    
    {/* Rating badge */}
    <div className='absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1'>
      <Star size={13} className='fill-yellow-400 text-yellow-400'/>
      <span className='text-xs font-bold text-gray-800'>{doctor.rating}</span>
    </div>

    {/* Specialty badge on image */}
    <div className='absolute bottom-3 left-3'>
      <span className='bg-accent text-white text-xs font-medium px-3 py-1 rounded-full'>
        {doctor.specialty}
      </span>
    </div>
  </div>

  {/* Content */}
  <div className='p-5'>
    <h3 className='font-heading font-semibold text-lg text-gray-800'>{doctor.name}</h3>
    
    <div className='flex items-center gap-1 text-gray-500 text-xs mt-1'>
      <Briefcase size={13}/>
      <span>{doctor.experience} experience</span>
    </div>

    <div className='flex items-center justify-between mt-4 pt-4 border-t border-gray-100'>
      <div>
        <p className='text-gray-400 text-xs'>Consultation Fee</p>
        <p className='text-primary font-bold text-lg'>{doctor.fee}</p>
      </div>
      <span className='bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg group-hover:bg-accent transition-colors'>
        Book
      </span>
    </div>
  </div>

</div>
      </Link>
    ))}
  </div>
</div>
</>
 )
}

export default Doctors