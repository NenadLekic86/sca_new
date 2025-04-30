// import React from 'react'
import './calendlySection.scss'

import {InlineWidget} from 'react-calendly'


const CalendlySection = () => {
  return (
    <section id="calendly-section" className="calendly-section relative py-10 lg:py-20">
        <div className="container">
            <div className='title_container orangeLinearText mb-10'>
                <h2 className='title text-4xl lg:text-5xl'>Book a Free Consultation</h2>
            </div>
            
            <div className='title_container text-center max-w-4xl mx-auto'>
                <h5 className='title !font-(family-name:--font-montserrat) !capitalize text-xl !font-semibold'>Unlock your team's potential with expert training and Agile methodologies. Book a call now to transform your team's performance!</h5>
            </div>
            <InlineWidget url="https://calendly.com/nikola-y-bh/15min"/>
        </div>
    </section>
  )
}

export default CalendlySection
