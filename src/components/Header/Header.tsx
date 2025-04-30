import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useWindowScroll } from "react-use";
import gsap from "gsap";

import Button from '../Button/Button';
import MenuSvg from '../../assets/images/svg/MenuSvg';
import Logo from '../../assets/images/SmartConsultingAgency_logo.webp';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { scrollToSection } from '../../utils/scrollToSection';

const Header = () => {
  const navItems = [
    {title: `About Us`, href: 'about', to: 'about', id: 0}, // Using scrollToSection for smooth scrolling you don't need to use "#" in href
    {title: `Services`, href: 'services', to: 'services', id: 1},
    {title: `Trainings`, href: 'trainings', to: 'trainings', id: 2},
    {title: `Blogs`, href: '/blogs', id: 3},
    {title: `Agilist`, href: 'https://agilist-game.com/', id: 4, target: '_blank', rel: 'noopener noreferrer'},
  ];

  const [openNavigation, setOpenNavigation] = useState(false);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (!navContainerRef.current) return;

    const isScrollingDown = currentScrollY > lastScrollY.current;

    // Kill any existing animations and force immediate completion
    gsap.killTweensOf(navContainerRef.current);

    // Add/remove floating-nav class
    if (currentScrollY > 0) {
      navContainerRef.current.classList.add('floating-nav');
      
      if (isScrollingDown && currentScrollY > 100) {
        gsap.set(navContainerRef.current, { y: -100 });
      } else if (!isScrollingDown) {
        gsap.to(navContainerRef.current, {
          y: 0,
          duration: 0.3,
          ease: "power3.out"
        });
      }
    } else {
      navContainerRef.current.classList.remove('floating-nav');
      gsap.set(navContainerRef.current, { y: 0 });
    }

    lastScrollY.current = currentScrollY;
  }, [currentScrollY]);

  const toggleNavigation = () => {
    const isSmallScreen = window.innerWidth < 1280;

    if (openNavigation) {
      gsap.to(navRef.current, {
        x: isSmallScreen ? '100%' : '0%', // Move off-screen
        duration: 0.3,
        ease: 'power3.out',
      });
      setTimeout(() => {
        setOpenNavigation(false);
      }, 300); // Allow animation to complete before hiding
    } else {
      setOpenNavigation(true);
      gsap.fromTo(
        navRef.current,
        { x: isSmallScreen ? '100%' : '0%' },
        {
          x: '3%',
          duration: 0.3,
          ease: 'power3.out',
        }
      );
    }
  };

  const closeNavigation = () => {
    if (openNavigation) {
      gsap.to(navRef.current, {
        x: '100%', // Move off-screen
        duration: 0.3,
        ease: 'power3.out',
      });
      setTimeout(() => {
        setOpenNavigation(false);
      }, 300); // Allow animation to complete before hiding
    }
  };

  const handleClick = () => {
    if (openNavigation) toggleNavigation();
  };

  return (
    <div
      ref={navContainerRef}
      className={`header fixed inset-x-0 md:inset-x-5 top-4 z-50 max-w-[95vw] mx-auto lg:max-w-full h-20 border-none transition-all duration-700 flex items-center bg-white shadow-xl rounded-xl`}
    >
      <div className='container'>
        <div className="flex items-center">
          <a className="block w-[12rem] xl:mr-8" href="/">
            <img src={Logo} alt="SmartConsultingAgency_logo" />
          </a>

          <nav
            ref={navRef}
            className={` ${ openNavigation ? "flex" : "hidden" } fixed -top-4 left-0 right-0 bottom-0 h-screen bg-orange-500 lg:h-auto lg:static lg:flex lg:m-auto lg:bg-transparent`}
          >
            <div className="offcanvas-content mx-auto">
              <a className="block lg:hidden w-[14rem] mt-40 mb-40" href="/">
                <img src={Logo} alt="SmartConsultingAgency_logo" />
              </a>

              <div className={`nav-items-container relative z-[2] flex flex-col items-center justify-center m-auto lg:flex-row`}>
                
                {navItems.map((item) => (
                  item.href.startsWith('#') ? (
                    <a 
                      key={item.id}
                      // href={item.href}
                      onClick={() => {
                        handleClick();
                        scrollToSection(item.href, 1200);
                      }}
                      className={`nav-item nav-hover-btn relative ms-0 sm:ms-5 xl:ms-8 mb-4 lg:mb-0 font-medium text-[0.85rem] xl:text-lg leading-normal text-darkBlue-500 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-darkBlue-500 cursor-pointer`}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      key={item.id}
                      to={item.href}
                      onClick={() => {
                        handleClick();
                        scrollToSection(item.href, 1200);
                      }}
                      target={item.target}
                      rel={item.rel}
                      className={`nav-item nav-hover-btn relative ms-0 sm:ms-5 xl:ms-8 mb-4 lg:mb-0 font-medium text-[0.85rem] xl:text-lg leading-normal text-darkBlue-500 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-darkBlue-500 cursor-pointer`}
                    >
                      {item.title}
                    </Link>
                  )
                ))}
                <LanguageSelector
                  containerClass="lg:hidden"
                />
              </div>
            </div>
          </nav>

          <div className='button-group me-0 ms-auto lg:ms-0'>
            <div className='flex flex-row items-center justify-center gap-4'>
              <LanguageSelector
                containerClass="!hidden lg:!inline-block"
                onLanguageChange={closeNavigation} 
              />
              
              <Button
                containerClass="!hidden lg:!inline-block"
                btnPrimary
                // href="#calendly-section"
                onClick={() => {
                  scrollToSection('calendly-section', 1200);
                }}
              >
                Book a Call
              </Button>

              <Button 
                containerClass="lg:hidden"
                hideElementLg 
                btnPrimary
                offcanvasBtn
                onClick={toggleNavigation}>
                <MenuSvg openNavigation={openNavigation}/>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header