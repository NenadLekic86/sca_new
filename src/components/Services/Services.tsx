import { useEffect } from 'react'
import './services.scss'
import { animateSplitLetters } from '../../utils/animateElements/animateSplitLetters';
import { initializeAnimations } from '../../utils/animateElements/animateElements';


import ServicesImg from '../../assets/images/ServicesSection/what_do_we_do_image.png'
import icon_1_c from '../../assets/images/ServicesSection/icon_1_c.png'
import icon_2_c from '../../assets/images/ServicesSection/icon_2_c.png'
import icon_6_c from '../../assets/images/ServicesSection/icon_6_c.png'
import icon_7_c from '../../assets/images/ServicesSection/icon_7_c.png'
import icon_1_w from '../../assets/images/ServicesSection/icon_1_w.png'
import icon_2_w from '../../assets/images/ServicesSection/icon_2_w.png'
import icon_6_w from '../../assets/images/ServicesSection/icon_6_w.png'
import icon_7_w from '../../assets/images/ServicesSection/icon_7_w.png'


// Card data for dynamic rendering
const aboutServices = [
    {
        title: "ATLASSIAN TOOLS SETUP, OPTIMIZATION AND INTEGRATION",
        content: [
            "Integration with other products (Jira to Jira, Salesforce, Zendesk, Slack)",
            "Workflow and process optimization and automation",
            "Setup of new projects in Atlassian suit (Jira Software, Service Management, Confluence)",
            "Plugin management for Atlassian tools",
            "Advanced reporting, dashboards, and filters Customization and configuration on project level"
        ],
        icon_c: icon_1_c,
        icon_w: icon_1_w
    },
    {
        title: "AGILE COACHING AND TRAINING",
        content: [
            "Partnership with the clients in 1 on 1 and team sessions",
            "Identification of meaningful goals and planning their realization",
            "Team and organization survey and capability building",
            "Driving business agility and scaling initiatives, organizational coaching, change management",
            "Training teams to be Agile",
            "Training Product Owners, Scrum Masters, and management",
            "Team building activities"
        ],
        icon_c: icon_2_c,
        icon_w: icon_2_w
    },
    {
        title: "PROJECT MANAGEMENT",
        content: [
            "Project-based consultancy",
            "Leading complex projects and providing expertise",
            "The fast ramp-up in a startup environment, the LEAN introduction of PM",
            "Training project managers",
            "PMO set up with best practices and procedures"
        ],
        icon_c: icon_6_c,
        icon_w: icon_6_w
    },
    {
        title: "BUSINESS PROCESS MAPPING AND OPTIMIZATIONS",
        content: [
            "Analysis of the as is processes",
            "Recommendation of the to be processes",
            "Working with process owners in process optimization and improvements"
        ],
        icon_c: icon_7_c,
        icon_w: icon_7_w
    }
];

const Services = () => {
    useEffect(() => {
            // Initialize both animation systems
            const animatedElements = document.querySelectorAll('[data-animate-letters]');
            animatedElements.forEach(element => {
                animateSplitLetters(element as HTMLElement);
            });
            initializeAnimations(); // Initialize element animations
        }, []);

    return (
        <section id="services" className="services relative pt-15 pb-16 lg:pt-20 lg:pb-50 bg-darkBlue-500/10">
            <div className="container">
                <div className='title_container orangeLinearText mb-10 lg:mb-20'>
                    <h2 data-animate-letters className='title text-4xl lg:text-5xl'>Our Services</h2>
                </div>

                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className='basis-full lg:basis-1/3 mb-20 lg:mb-0 service_title_image'>
                        {/* <div className='orangeLinearText'>
                            <h3 className='text-4xl lg:text-5xl mb-20'>Our Services</h3>
                        </div> */}
                        <img 
                            src={ServicesImg}
                            alt="What do we do" 
                            className='w-full h-auto object-cover relative lg:mt-20 lg:-left-10'
                            loading="lazy" 
                            data-animate="fly-in-up"
                        />
                    </div>
                    <div className='basis-full lg:basis-2/3'>
                        <div className='flex flex-wrap gap-10 sm:gap-8 card_container'>
                            {aboutServices.map((card, index) => (
                                <div 
                                    key={index}
                                    className="basis-full md:basis-[calc(48%-0.25rem)] p-10 rounded-2xl bg-white relative service_card"
                                    data-animate="fly-in-up"
                                >
                                    <div className="avatar relative -top-25 lg:-top-30 left-15 -translate-x-10 z-10">
                                        <div className="w-16 icon_color">
                                            <img src={card.icon_c} />
                                        </div>
                                        <div className="w-16 icon_white">
                                            <img src={card.icon_w} />
                                        </div>
                                    </div>
                                    <h4 className='text-darkBlue-500 text-2xl mb-5 z-10 relative'>{card.title}</h4>
                                    <ul className='z-10 relative list-disc pl-5'>
                                        {card.content.map((item, i) => (
                                            <li key={i} className="mb-2">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
