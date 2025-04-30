// import React from 'react'
import './scrumMaster.scss'
import Waves from '../../assets/images/svg/Waves';
import ImgOne from '../../assets/images/ScrumMaster/Scrum Master img1.webp'

const ScrumMaster = () => {
  return (
    <section className="scrumMaster relative">
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
            <h1 className="text-4xl font-bold text-center">Scrum Master</h1>
        </div>
      </div>
      
      <div className="container lg:!max-w-5xl py-10">
        <div className='title_container orangeLinearText text-center mb-10'>
          <h2 className='title text-4xl lg:text-5xl'>Become a Certified Scrum Master!</h2>
        </div>

        <p>Do you want to challenge yourself and gain helpful knowledge the fun way?</p>

        <p>With our course, you will get the knowledge and practice you need to jumpstart your path. After finishing this training, you will get a shareable certificate that testifies to your commitment to self-improvement.</p>

        <p>Working as a Scrum Master gives you the opportunity to influence your team, organization, and even your industry.</p>

        <h3 className='text-2xl mb-5'>Do you know what is the role of a Scrum Master in a Scrum team?</h3>

        <ul className='list-disc list-inside mb-5'>
          <li>To provide an environment without the impediments for the team,</li>
          <li>Protect the team and act as its advocate,</li>
          <li>Facilitating meetings, supporting the Scrum practice values.</li>
        </ul>

        <h3 className='text-2xl mb-5'>This course is designed for individuals who are:</h3>

        <ul className='list-disc list-inside mb-5'>
          <li>Working as a project manager, team leader, or manager who is wondering how product development processes are designed</li>
          <li>Wondering how to create an energizing workplace through playfulness</li>
          <li>An agile practitioner who wants to set solid foundations to your growth to higher level</li>
          <li>A member of the Development Team who is trying to improve the information flow and work of his team, or</li>
          <li>A person with little experience in Agile and Scrum, interested in learning more.</li>
        </ul>

        <img 
          src={ImgOne}
          alt="Atlassian Tools Administration" 
          className='w-full h-auto rounded-lg shadow-lg my-8'
        />

        <h3 className='text-2xl mb-5'>Learning Objectives:</h3>

        <ul className='list-disc list-inside mb-5'>
          <li>Scrum roles and responsibilities</li>
          <li>Sprint Planning</li>
          <li>Review and Retrospectives</li>
          <li>Estimating and Prioritizing Product Backlogs</li>
          <li>Working and helping Product Owners</li>
          <li>Transforming the organization to be more Agile</li>
        </ul>

        <h3 className='text-2xl mb-5'>By the end of this course, participants will:</h3>

        <ul className='list-disc list-inside mb-5'>
          <li>Learn new tools for effective team communication,</li>
          <li>Start improving the delivery of an authorized product in a supportive and productive work environment,</li>
          <li>Know how to consciously take charge of change,</li>
          <li>Notice immediate improvements in quality and almost certain improvements in customers satisfaction,</li>
          <li>Have the skills to help your team work seamlessly as a true team,</li>
          <li>Know how to bring problems to the surface so it could be addressed properly,</li>
          <li>Deeply feel the power of working as an uninterrupted team,</li>
          <li>Learn the satisfaction of being a servant-leader, and</li>
          <li>Receive a shareable certificate that testifies to participants' commitment to self-improvement.</li>
        </ul>

        <p>To learn more about upcoming training dates, contact us via email: <br />
          <a className='text-xl' href="mailto:milica.vojtek@smartconsulting-agency.com"><strong>milica.vojtek@smartconsulting-agency.com</strong></a>
        </p>
      </div>
    </section>
  )
}

export default ScrumMaster
