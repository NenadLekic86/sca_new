// import React from 'react'
import './aiProjectManagers.scss'
import Waves from '../../assets/images/svg/Waves';
import ImgOne from '../../assets/images/AIProjectManagers/Introduction to AI for Project Managers img1.webp'

const AIProjectManagers = () => {
  return (
    <section className="AIProjectManagers relative">
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
            <h1 className="text-4xl font-bold text-center">Introduction to AI for Project Managers</h1>
        </div>
      </div>
      
      <div className="container lg:!max-w-5xl py-10">
        <div className='title_container orangeLinearText text-center mb-10'>
          <h2 className='title text-4xl lg:text-5xl'>Application of AI in Project Management and Product Development!</h2>
        </div>

        <p>Are you ready to enhance your project management and innovative product creation skills with the latest technologies? We present a unique opportunity to explore the world of Artificial Intelligence (AI) and learn how to apply it at every step of your project development.</p>

        <p>During this interactive training, participants will cover the basics of AI and Machine Learning, identifying areas where AI can improve efficiency. Through several simulations, practical examples of AI application will be demonstrated.</p>

        <p>This course on the use of Artificial Intelligence in project management and product development is designed to give you a deep understanding of how AI can transform the way you think, plan, and execute your projects. </p>

        <h3 className='text-2xl mb-5'>Whether you are a project manager, scrum master, or product development specialist, this course will enable you to:</h3>

        <ul className='list-disc list-inside mb-5'>
          <li>Understand the basics of Artificial Intelligence,</li>
          <li>Identify opportunities for AI application,</li>
          <li>Develop strategies for implementation considering technical, organizational, and ethical aspects,</li>
          <li>Automate certain aspects of project management and innovative product creation,</li>
          <li>Overcome challenges when using AI-based tools.</li>
        </ul>

        <img 
          src={ImgOne}
          alt="Introduction to Project Management and Agile" 
          className='w-full h-auto rounded-lg shadow-lg my-8'
        />

        <h3 className='text-2xl mb-5'>Learning objectives and covered areas:</h3>

        <ul className='list-disc list-inside mb-5'>
          <li>Artificial Intelligence - basic concepts</li>
          <li>Machine Learning and types of learning</li>
          <li>Using different types of data</li>
          <li>Lifecycle of developing machine learning models</li>
          <li>Examples of AI applications</li>
          <li>AI-based tools</li>
          <li>Process automation</li>
          <li>Using Artificial Intelligence in project management</li>
          <li>Using Artificial Intelligence in product development</li>
          <li>Hybrid approach - combining AI with human factor modeling</li>
          <li>Implementing AI projects in companies</li>
          <li>Overview of future trends and continuous learning paths.</li>
        </ul>

        <p>Upon completion of the course, participants receive an official certificate confirming that they have completed training in the use of AI in project management and product development.</p>

        <p>To learn more about upcoming training dates, contact us via email: <br />
          <a className='text-xl' href="mailto:milica.vojtek@smartconsulting-agency.com"><strong>milica.vojtek@smartconsulting-agency.com</strong></a>
        </p>
      </div>
    </section>
  )
}

export default AIProjectManagers
