import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './trainings.scss'
import { animateSplitLetters } from '../../utils/animateElements/animateSplitLetters';
import { initializeAnimations } from '../../utils/animateElements/animateElements';

import joystick from '../../assets/images/Trainings/joystick.svg'
import clipboard from '../../assets/images/Trainings/clipboard.svg'
import teacher from '../../assets/images/Trainings/teacher.svg'
import box from '../../assets/images/Trainings/box.svg'
import robot from '../../assets/images/Trainings/robot.svg'
import tools from '../../assets/images/Trainings/tools.svg'

const trainingsContent = [
    {
        title: "Business Agility Gamification",
        icon: joystick,
        href: '/BusinessAgility'
    },
    {
        title: "Introduction to Project Management and Agile",
        icon: clipboard,
        href: '/ManagementAgile'
    },
    {
        title: "Scrum Master",
        icon: teacher,
        href: '/ScrumMaster'
    },
    {
        title: "Product Ownership",
        icon: box,
        href: '/ProductOwnership'
    },
    {
        title: "Introduction to AI for Project Managers",
        icon: robot,
        href: '/AIProjectManagers'
    },
    {
        title: "Atlassian Tools Administration",
        icon: tools,
        href: '/AtlassianTools'
    }
]


const Trainings = () => {
    useEffect(() => {
        // Initialize both animation systems
        const animatedElements = document.querySelectorAll('[data-animate-letters]');
        animatedElements.forEach(element => {
            animateSplitLetters(element as HTMLElement);
        });
        initializeAnimations(); // Initialize element animations
    }, []);

  return (
    <section id="trainings" className='trainings-section relative py-15 lg:py-20'>
      <div className='container'>
            <div className='title_container orangeLinearText mb-10 lg:mb-20'>
                <h2 className='title text-4xl lg:text-5xl'>Trainings</h2>
            </div>
        
            <div className='flex flex-wrap gap-10 justify-center treining_cards'>
                {trainingsContent.map((item, index) => (
                    <Link 
                        key={index} 
                        className='basis-full lg:basis-1/4 lg:mb-0 rounded-2xl bg-white relative flex flex-col justify-center items-center overflow-hidden training_card'
                        to={item.href}
                        data-animate="fly-in-up"
                    >
                        <div className='card_content text-center'>
                            <div className='icon_container relative text-center flex justify-center items-start mb-10'>
                                <img src={item.icon} alt={item.title} className='h-16' />
                            </div>
                            <h5 className='!font-(family-name:--font-montserrat) !capitalize text-darkBlue-500 text-xl !font-semibold text-center mb-5 z-10 relative'>{item.title}</h5>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Trainings
