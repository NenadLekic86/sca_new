// import React from 'react'
import './productOwnership.scss'
import Waves from '../../assets/images/svg/Waves';
import ImgOne from '../../assets/images/ProductOwnership/Product Ownership img1.webp'

const ProductOwnership = () => {
  return (
    <section className="productOwnership relative">
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
            <h1 className="text-4xl font-bold text-center">Product Ownership</h1>
        </div>
      </div>
      
      <div className="container lg:!max-w-5xl py-10">
        <div className='title_container orangeLinearText text-center mb-10'>
          <h2 className='title text-4xl lg:text-5xl'>Become a Certified Product Owner!</h2>
        </div>

        <p>This course is designed to teach the participants about becoming a Scrum Product Owner.</p>

        <p>Upon successfully completing the learning objectives, the participants will become eligible to earn the industry recognized and shareable Product Owner certificate.</p>

        <img 
          src={ImgOne}
          alt="Introduction to Project Management and Agile" 
          className='w-full h-auto rounded-lg shadow-lg my-8'
        />

        <h3 className='text-2xl mb-5'>Learning objectives:</h3>

        <ul className='list-disc list-inside mb-5'>
          <li>Product Owner Core Competencies</li>
          <li>Describing Purpose and Strategy</li>
          <li>Understanding Customers and Users</li>
          <li>Validating Product Assumptions</li>
          <li>Working with the Product Backlog</li>
        </ul>

        <p>These learning objectives take into consideration that every scrum implementation is different and that Teams and organizations apply Scrum within their context, but the fundamental framework always remains the same.</p>

        <h3 className='text-2xl mb-5'>This course is designed for individuals who are:</h3>

        <ul className='list-disc list-inside mb-5'>
          <li>Working as a project manager, team leader, or manager who is curious about product development processes</li>
          <li>Interested in creating an energizing workplace through playfulness</li>
          <li>Agile practitioners aiming to solidify their foundation for growth to a higher level</li>
          <li>Members of the Development Team seeking to improve information flow and team performance</li>
          <li>Individuals with little experience in Agile and Scrum, eager to learn more</li>
        </ul>

        <h3 className='text-2xl mb-5'>By the end of this course, participants will:</h3>

        <ul className='list-disc list-inside mb-5'>
          <li>Gain practical insights into stakeholder management.</li>
          <li>Learn techniques for iterative planning.</li>
          <li>Understand methods to ensure continuous product improvement.</li>
          <li>Be able to adapt agile principles to fit various project environments.</li>
          <li>Develop a deeper understanding of the Product Owner's role and responsibilities.</li>
          <li>Enhance their ability to prioritize and manage the product backlog effectively.</li>
        </ul>

        <p>To learn more about upcoming training dates, contact us via email: <br />
          <a className='text-xl' href="mailto:milica.vojtek@smartconsulting-agency.com"><strong>milica.vojtek@smartconsulting-agency.com</strong></a>
        </p>
      </div>
    </section>
  )
}

export default ProductOwnership
