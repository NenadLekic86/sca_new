// import React from 'react'
import './businessAgility.scss'
import Waves from '../../assets/images/svg/Waves';
import ImgOne from '../../assets/images/businessAgility/BusinessAgilityGamificationImg1.webp'

const BusinessAgility = () => {
  return (
    <section className="businessAgility relative">
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
            <h1 className="text-4xl font-bold text-center">Business Agility Gamification</h1>
        </div>
      </div>
      
      <div className="container lg:!max-w-5xl py-10">
        <div className='title_container orangeLinearText text-center mb-10'>
          <h2 className='title text-4xl lg:text-5xl'>Earn a certificate in Business Agility through Gamification!</h2>
        </div>

        <p>Get ready to challenge your wit, employ cunning strategies and ultimately emerge victorious in this business adventure!</p>

        <p>Whether you're a seasoned strategist or a newcomer to the realm of business, you are embarking on this thrilling learning journey.</p>

        <p>Our Business Agility Gamification training is conducted using the Agilist - Business Agility Educational Board Game. </p>

        <h3 className='text-2xl mb-5'>Goal of the game</h3>

        <p>The primary goal of the game is to be the player with the highest Profit at the end of the last iteration. Maximum duration of the game is 20 iterations.</p>

        <p>Agilist players will compete in product development, team management, testing their decision-making skills, strategic planning, and adaptability along the way.</p>

        <img 
          src={ImgOne}
          alt="Introduction to Project Management and Agile" 
          className='w-full h-auto rounded-lg shadow-lg my-8'
        />

        <div className='title_container orangeLinearText text-center mb-10'>
          <h3 className='title text-3xl lg:text-4xl'>Earn a certificate in Business Agility through Gamification!</h3>
        </div>

        <h3 className='text-2xl mb-5'>AGILE METHODOLOGIES UNDERSTANDING:</h3>

        <p>Participants will gain understanding of Kanban and Scrum, and how they can be integrated for effective product development and business operations.</p>

        <h3 className='text-2xl mb-5'>STRATEGIC DECISION-MAKING:</h3>

        <p>Players should be able to develop strategic decision-making skills by making choices related to product selection, resource allocation, budgeting and team management.</p>

        <h3 className='text-2xl mb-5'>HOLISTIC UNDERSTANDING OF BUSINESS OPERATIONS:</h3>

        <p>Participants will gain a holistic understanding of business operations by experiencing the interconnectedness of various aspects, including product development, financial management and team dynamics.</p>

        <h3 className='text-2xl mb-5'>PRODUCT DEVELOPMENT LIFECYCLE:</h3>

        <p>Participants will learn the iterative process of product development, from conception to market success.</p>

        <h3 className='text-2xl mb-5'>FINANCIAL LITERACY:</h3>

        <p>Players will enhance their financial literacy by balancing budgets, handling revenue generation, and maintaining a detailed balance sheet per iteration.</p>

        <h3 className='text-2xl mb-5'>ADAPTABILITY AND FLEXIBILITY</h3>
        
        <p>Players will develop adaptability and flexibility as they respond to changing scenarios in the game.</p>

        <p>You can find here more about the game: <a className='text-xl font-semibold' href="https://agilist-game.com/" target="_blank">www.agilist-game.com</a></p>

        <p>To learn more about upcoming training dates, contact us via email: <br />
          <a className='text-xl' href="mailto:milica.vojtek@smartconsulting-agency.com"><strong>milica.vojtek@smartconsulting-agency.com</strong></a>
        </p>
      </div>
    </section>
  )
}

export default BusinessAgility
