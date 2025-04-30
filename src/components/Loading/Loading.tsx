import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './loading.scss';

const Loading = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;
    
    const tl = gsap.timeline();

    tl.from(overlay, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut"
    })
    .from(content, {
      y: 20,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out"
    });

    return () => {
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut"
        });
      }
    };
  }, []);

  return (
    <div className="loading-overlay" ref={overlayRef}>
      <div className="loading-content" ref={contentRef}>
        <div className="loading-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="loading-text">Loading<span>.</span><span>.</span><span>.</span></p>
      </div>
    </div>
  );
};

export default Loading;
