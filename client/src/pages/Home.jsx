import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FeaturedDoctors from '../components/FeaturedDoctors'
import HowItWorks from '../components/HowItWorks'
import CTABanner from '../components/CTABanner'
const Home = () => {
  return (
    <>
    <Hero/>
    <Services/>
    <FeaturedDoctors/>
    <HowItWorks/>
    <CTABanner/>
    </>
  )
}

export default Home