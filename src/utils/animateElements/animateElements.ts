import './animateElements.scss';

// Animation types that can be used with data-animate attribute
export type AnimationType = 
  | 'fade-in'
  | 'fade-in-up'
  | 'fade-in-down'
  | 'fade-in-left'
  | 'fade-in-right'
  | 'fly-in-up'
  | 'fly-in-down'
  | 'fly-in-left'
  | 'fly-in-right';

export const initializeAnimations = () => {
  // Find all elements with data-animate attribute
  const animatedElements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          const element = entry.target;
          const animationType = element.getAttribute('data-animate') as AnimationType;
          
          // Add animation class
          element.classList.add('animated', animationType);
          
          // Optional: Remove observer after animation
          observer.unobserve(element);
        }
      });
    },
    {
      root: null, // viewport
      rootMargin: '0% 0px', // Add 10% margin to trigger earlier
      threshold: 0.5 // Lower threshold - trigger when just 10% is visible
    }
  );

  // Observe all elements with animations
  animatedElements.forEach(element => {
    // Set initial state
    const animationType = element.getAttribute('data-animate') as AnimationType;
    element.classList.add(animationType + '-initial');
    
    observer.observe(element);
  });
};