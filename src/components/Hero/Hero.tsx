import { useEffect, useRef } from 'react'
import './hero.scss'
import Button from '../Button/Button'
import { scrollToSection } from '../../utils/scrollToSection';
import { animateSplitWords } from '../../utils/animateElements/animateSplitWords';


const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    animateSplitWords(titleRef.current);
  }, []);

  return (
    <section className="hero relative ">
      <div className="hero-content text-white text-center pt-40 lg:pt-60 pb-20">
        <div className="max-w-5xl">
          <h1 
            ref={titleRef}
            id="animated_title_main" 
            className="mb-5 text-3xl lg:text-5xl font-bold text-darkBlue-500"
          >
            AGILE TRANSFORMATIONS|AGILE COACHING|PROJECT MANAGEMENT|BUSINESS PROCESS ANALYSIS|ATLASSIAN TOOLS ADMINISTRATION|TRAININGS & WORKSHOP
          </h1>
          <p className="mb-5 text-darkBlue-500 font-medium lg:text-lg">
            We support businesses in implementing, maintaining, and monitoring agile methodologies for their processes and operations, accompanying them on their path to success.
          </p>

          <Button
            // href={'#calendly-section'} 
            containerClass=''
            btnPrimary
            btnLg
			onClick={() => {
				scrollToSection('calendly-section', 1200);
			}}
          >
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
