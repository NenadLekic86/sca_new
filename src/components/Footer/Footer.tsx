// import React from 'react'
import './footer.scss'
import { BsEnvelopeAt } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";

import { Link } from 'react-router-dom';
import Logo from '../../assets/images/SmartConsultingAgency_logo.webp';

const Footer = () => {

    const footerNavItems = [
        {title: `Privacy Policy`, href: '/PrivacyPolicy', id: 0},
        {title: `Terms and Conditions`, href: '/TermsPolicy', id: 1},
        {title: `Return Policy`, href: '/ReturnPolicy', id: 2},
        {title: `Delivery Policy`, href: '/DeliveryPolicy', id: 3},
    ];

    const socialLinks = [
        {title: `Instagram`, href: 'https://www.instagram.com/smart_consulting_agency/', icon: <FaInstagram />},
        {title: `LinkedIn`, href: 'https://www.linkedin.com/company/smart-consulting-agency', icon: <AiOutlineLinkedin />},
        {title: `TikTok`, href: 'https://www.tiktok.com/@smartconsultingagency', icon: <AiOutlineFacebook />},
    ];

  return (
    <footer className="footer-section bg-gradient-to-r from-darkBlue-500/10 to-transparent
 text-base-content py-10 lg:py-20">
        <div className="container">
            <div className='top-footer flex flex-col lg:flex-row justify-between'>
                <aside>
                    <a className="block w-[20rem] relative lg:-top-8" href="/">
                        <img src={Logo} alt="SmartConsultingAgency_logo" />
                    </a>
                </aside>
            
                <div className="footer-links flex flex-col lg:flex-row gap-15 lg:gap-40 mt-10 lg:mt-0">
                    <nav className='flex flex-col gap-4 lg:gap-6'>
                        <div className='title_container orangeLinearText'>
                            <h4 className='title text-2xl lg:text-3xl'>LET'S TALKS</h4>
                        </div>
                        <ul className='flex flex-col gap-4'>
                            <li>
                                <a 
                                    href="mailto:nikola@smartconsulting-agency.com" 
                                    className='flex items-center gap-2 hover:text-orange-500 transition-colors duration-300'
                                >
                                    <BsEnvelopeAt className='text-orange-500 text-xl'/>
                                    <span>nikola@smartconsulting-agency.com</span>
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="mailto:milica.vojtek@smartconsulting-agency.com" 
                                    className='flex items-center gap-2 hover:text-orange-500 transition-colors duration-300'
                                >
                                    <BsEnvelopeAt className='text-orange-500 text-xl'/>
                                    <span>milica.vojtek@smartconsulting-agency.com</span>
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="mailto:contact@smartconsulting-agency.com"
                                    className='flex items-center gap-2 hover:text-orange-500 transition-colors duration-300'
                                >
                                    <BsEnvelopeAt className='text-orange-500 text-xl'/>
                                    <span>contact@smartconsulting-agency.com</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav className='flex flex-col gap-4'>
                        <div className='title_container orangeLinearText'>
                            <h4 className='title text-2xl lg:text-3xl'>TERMS</h4>
                        </div>
                        {footerNavItems.map((item) => (
                            <Link
                                key={item.id}
                                to={item.href}
                                className={`nav-item relative ms-0 lg:mb-0 font-medium text-[0.85rem] xl:text-lg leading-normal text-darkBlue-500 hover:text-orange-500 transition-colors duration-300 cursor-pointer`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            <div className='bottom-footer flex flex-col lg:flex-row justify-between items-center mt-10 border-solid border-t-1 border-darkBlue-500 pt-10'>
                <div className='copyright text-center lg:text-left'>
                    <p className='text-sm lg:text-base'>© 2025 Smart Consulting Agency. All rights reserved.</p>
                </div>
                <div className='socials flex gap-4 mt-4 lg:mt-0'>
                    {socialLinks.map((link, index) => (
                        <a 
                            href={link.href}
                            key={index}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='text-4xl text-darkBlue-500 hover:text-orange-500 transition-colors duration-300'>
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
