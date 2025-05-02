import React from 'react'
import HeroSection from '../components/home/HeroSection'
import CoursesSection from '../components/home/PopularCourses'
import LiveSessionsSection from '../components/home/UpComingLives'
import FeaturesSection from '../components/home/Feature'
import TestimonialsSection from '../components/home/TestimonialsSection'

import FAQSection from '../components/home/FAQ'
import TrustedByCarousel from '../components/home/Trusted'

const Home = () => {
  return (
    <div>
    <HeroSection />
    <CoursesSection />
    <LiveSessionsSection />
    <FeaturesSection />
    <TestimonialsSection />
    <TrustedByCarousel />
    <FAQSection />
    

    </div>
    
  )
}

export default Home