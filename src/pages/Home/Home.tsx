// import React from 'react'
import './home.scss'

import Hero from '../../components/Hero/Hero'
import AboutUs from '../../components/AboutUs/AboutUs'
import Services from '../../components/Services/Services'
import Trainings from '../../components/Trainings/Trainings'
import BlogSliderSection from '../../components/BlogSliderSection/BlogSliderSection'
import CalendlySection from '../../components/CalendlySection/CalendlySection'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Trainings />
      <BlogSliderSection />
      <CalendlySection />
    </>
  )
}

export default Home
