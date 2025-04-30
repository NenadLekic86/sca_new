// import React from 'react'
import './atlassianTools.scss'
import Waves from '../../assets/images/svg/Waves';
import ImgOne from '../../assets/images/AtlassianTools/AtlassianToolsAdministrationImg1.webp'

const AtlassianTools = () => {
  return (
    <section className="atlassianTools relative">
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
            <h1 className="text-4xl font-bold text-center">Atlassian Tools Administration</h1>
        </div>
      </div>
      
      <div className="container lg:!max-w-5xl py-10">
        <div className='title_container orangeLinearText text-center mb-10'>
          <h2 className='title text-4xl lg:text-5xl'>Became Proficient User and Administrator of Atlassian Tools!</h2>
        </div>

        <p>This course will help organizations and teams get up and running with the two most commonly used Atlassian tools - Jira Software and Confluence. It is covering basic user and administration functionalities.</p>

        <h3 className='text-2xl mb-5'>Learning objectives of this training are divided into two sections:</h3>

        <p>First section covers key Jira concepts such as issues, projects and boards, shows how to navigate Jira and manage work, and finally, includes expert tips and best practices that will make it easier for teams and organizations to use Jira. Also, it includes main Confluence concepts like spaces and pages, creating engaging content and team collaboration.</p>

        <p>Second section covers concepts regarding starting with a project in Jira Software, User management Working with the workflows - advanced features, Advanced filtering and issue updates, Automation and Integration with other apps. Also, it includes advanced Confluence concepts like user management, applying different macros inside the page, and creating templates.</p>

        <img 
          src={ImgOne}
          alt="Atlassian Tools Administration" 
          className='w-full h-auto rounded-lg shadow-lg my-8'
        />

        <h3 className='text-2xl mb-5'>This course is designed for:</h3>

        <ul className='list-disc list-inside mb-5'>
          <li>New Jira Software and Confluence users,</li>
          <li>Jira Software and Confluence users looking to grow their skills,</li>
          <li>Experienced Jira Software and Confluence users looking to validate their knowledge</li>
          <li>Teams using Jira Software and Confluence</li>
          <li>Admins who configure Jira Software projects to match a team's or organization's processes.</li>
          <li>Organizations that require global and project level changes in Jira tools.</li>
        </ul>

        <p>Participants will be provided access to the test instances of Jira Software and Confluence for practicing purposes.</p>

        <p>Upon completion of the course, participants receive an official certificate confirming that they have completed Administration of the Atlassian Tools training.</p>

        <p>To learn more about upcoming training dates, contact us via email: <br />
          <a className='text-xl' href="mailto:milica.vojtek@smartconsulting-agency.com"><strong>milica.vojtek@smartconsulting-agency.com</strong></a>
        </p>
      </div>
    </section>
  )
}

export default AtlassianTools
