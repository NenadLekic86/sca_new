import { useEffect } from 'react'
import './aboutUs.scss'
import { animateSplitLetters } from '../../utils/animateElements/animateSplitLetters';
import { initializeAnimations } from '../../utils/animateElements/animateElements';

import AboutUsImg from '../../assets/images/AboutUsSection/aboutUsImage_section.webp'

const aboutUsContent = [
    {
        title: "Our why?",
        content: ["We believe that only with proper knowledge, right tools and timed actions, businesses and teams could achieve great results."]
    },
    {
        title: "Our Consultants",
        content: ["With 10+ years of team management experience and a PhD in System Control and Modeling, we hold certifications including PMP®, PMI-ACP®, Certified Scrum Professional, and a Microsoft Data Science certificate."]
    },
]

const AboutUs = () => {
    useEffect(() => {
        // Initialize both animation systems
        const animatedElements = document.querySelectorAll('[data-animate-letters]');
        animatedElements.forEach(element => {
            animateSplitLetters(element as HTMLElement);
        });
        initializeAnimations(); // Initialize element animations
    }, []);

    return (
    <section id="about" className='aboutUs-section relative py-15 lg:py-20'>
        <div className='container'>
            <div className='title_container orangeLinearText mb-10 lg:mb-20'>
                <h2 data-animate-letters className='title text-4xl lg:text-5xl'>About Us</h2>
            </div>

            <div className='flex flex-col lg:flex-row gap-4'>
                <div className='basis-full lg:basis-1/2 mb-20 lg:mb-0 about_us_image'>
                    <div className='shape-img-bg relative'>
                        <img 
                            src={AboutUsImg}
                            alt="About Us" 
                            className='w-full h-auto object-cover relative lg:mt-20 lg:-left-10'
                            loading="lazy" 
                            data-animate="fade-in-up"
                        />
                    </div>
                </div>
                <div className='basis-full lg:basis-1/2'>
                    <div className='about_us_content'>
                        <div className='top_content mb-10'>
                            <h2 data-animate-letters className='title text-4xl lg:text-5xl mb-10'>
                                Welcome to Smart Consulting Agency
                            </h2>
                            <p>We are a consulting agency aiming to assist businesses in the project management area and process optimization field.</p>
                        </div>

                        <div className='flex flex-col lg:flex-row gap-10 mb-10'>
                            {aboutUsContent.map((item, index) => (
                                <div 
                                    key={index} 
                                    className='basis-full lg:basis-1/2 p-10 rounded-2xl bg-orange-500/10 main_content' 
                                    data-animate="fly-in-left">
                                    <h3 className='text-2xl mb-5'>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            ))}
                        </div>

                        <div data-animate="fly-in-right" className='big_content bg-darkBlue-500 text-white p-10 rounded-2xl'>
                            <h3 className='text-2xl mb-5 !text-white'>What do we do?</h3>
                            <ul className='list-disc pl-5'>
                                <li>Coach businesses, teams, or individuals in agile project management.</li>
                                <li>Provide training in artificial intelligence, business process mapping, agile project management, Scrum, and JIRA.</li>
                                <li>Consult on business process analysis, mapping, and optimization.</li>
                                <li>Supply documents and electronic materials on agile approaches and business process reengineering.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default AboutUs
