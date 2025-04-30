// import React from 'react'
import './managementAgile.scss'
import Waves from '../../assets/images/svg/Waves';
import ImgOne from '../../assets/images/ManagementAgile/Introduction to Project Management and Agile img1.webp'
import ImgTwo from '../../assets/images/ManagementAgile/Introduction to Project Management and Agile img2.webp'

const ManagementAgile = () => {
  return (
    <section className="managementAgile relative">
      <div className='pagetitle relative pt-40 pb-30 lg:pt-50 lg:pb-40'>
          <div className='absolute top-0 left-0 w-full h-full'>
            <Waves 
                className="absolute top-0 right-0 w-1/2 h-auto "
                color1="#FF9F0C"
                color2="#ec792b"
                color3="#e47224"
            />
          </div>
        <div className="container">
            <h1 className="text-4xl font-bold text-center">Introduction to Project Management and Agile</h1>
        </div>
      </div>
      
      <div className="container lg:!max-w-5xl py-10">
        <div className='title_container orangeLinearText text-center mb-10'>
          <h2 className='title text-4xl lg:text-5xl'>Earn a certificate in Introduction to Project Management and Agile!</h2>
        </div>

        <p>Do you want to learn Scrum and Agile Project Management how they are applied in real projects, in practice, and daily work? In this course, you will gain theoretical knowledge based on our trainers' experience and practical exercises that will help you apply agile methods more easily in your first job.</p>

        <p>Today, there is still a demand for the Scrum Master position, especially in the IT industry, as well as a demand for the right people to fill these positions. The Scrum Master job offers flexibility, work in a growing industry, and most importantly, work in teams where you will build interpersonal relationships with your colleagues, and where work is a pleasure, not a burden. This course is designed to introduce participants to the main concepts of Scrum and prepare them for their first job.</p>

        <p>Upon completion of the course, you will receive a certificate and a digital badge.</p>

        <p>The course will be led by our trainers with over a decade of experience working in Scrum and in agile companies from various domains: airlines, automotive, fintech, crypto, biometrics, supply chain, energy, data mining.</p>

        <p>We approach each participant individually, according to their learning pace.</p>

        <img 
          src={ImgOne}
          alt="Introduction to Project Management and Agile" 
          className='w-full h-auto rounded-lg shadow-lg my-8'
        />

        <h3 className='text-2xl mb-5'>The course covers the following topics:</h3>

        <ul className='list-disc list-inside mb-8'>
          <li>Basics of project management</li>
          <li>Differences between traditional (Waterfall) and Agile approaches</li>
          <li>Different Agile methods</li>
          <li>Basic Scrum concepts</li>
          <li>Scrum roles and responsibilities</li>
          <li>Team formation</li><li>Scrum ceremonies</li>
          <li>Sprint planning and daily meetings</li>
          <li>Reviews and retrospectives</li>
          <li>Scrum artifacts</li>
          <li>Task prioritization</li>
          <li>Communication with key stakeholders</li>
          <li>Project management tools</li>
          <li>Reporting</li>
        </ul>

        <img 
          src={ImgTwo}
          alt="Introduction to Project Management and Agile" 
          className='w-full h-auto rounded-lg shadow-lg my-8'
        />

        <h3 className='text-2xl mb-5'>Upon completing the course, participants receive:</h3>

        <ul className='list-disc list-inside mb-8'>
          <li>A certificate of completion - Introduction to Agile Project Management and Scrum.</li>
          <li>A digital badge.</li>
          <li>Access to a private Slack group, where you can exchange experiences with other participants and ask questions that mentors will answer.</li>
          <li>Assistance with CV creation.</li>
          <li>Additional discounts for all future training sessions organized by the Smart Consulting training center.</li>
        </ul>

        <p>To learn more about upcoming training dates, contact us via email: <br />
          <a className='text-xl' href="mailto:milica.vojtek@smartconsulting-agency.com"><strong>milica.vojtek@smartconsulting-agency.com</strong></a>
        </p>
      </div>
    </section>
  )
}

export default ManagementAgile
