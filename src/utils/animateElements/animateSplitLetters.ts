import './animateSplitLetters.scss';

const createLetterAnimation = (element: HTMLElement) => {
  const text = element.textContent || '';
  const words = text.split(' ');  // Split into words first

  // Clear existing content
  element.textContent = '';

  let letterIndex = 0;

  words.forEach((word, wordIndex) => {
    const wordContainer = document.createElement('span');
    wordContainer.className = 'word-container';
    
    const letters = word.split('');
    
    letters.forEach((letter) => {
      const letterSpan = document.createElement('span');
      letterSpan.className = 'animated-letter';
      letterSpan.textContent = letter;

      const randomX = (Math.random() - 0.5) * 100;
      const randomY = (Math.random() - 0.5) * 100;
      const randomRotateX = (Math.random() - 0.5) * 360;
      const randomRotateY = (Math.random() - 0.5) * 360;
      const randomRotateZ = (Math.random() - 0.5) * 360;

      letterSpan.style.setProperty('--initialX', `${randomX}px`);
      letterSpan.style.setProperty('--initialY', `${randomY}px`);
      letterSpan.style.setProperty('--initialRotateX', `${randomRotateX}deg`);
      letterSpan.style.setProperty('--initialRotateY', `${randomRotateY}deg`);
      letterSpan.style.setProperty('--initialRotateZ', `${randomRotateZ}deg`);
      letterSpan.style.animationDelay = `${letterIndex * 0.05}s`;

      wordContainer.appendChild(letterSpan);
      letterIndex++;
    });

    element.appendChild(wordContainer);

    if (wordIndex < words.length - 1) {
      const space = document.createElement('span');
      space.className = 'word-space';
      space.innerHTML = '&nbsp;';
      element.appendChild(space);
    }
  });
};

export const animateSplitLetters = (element: HTMLElement | null) => {
  if (!element) return;

  // Create a unique ID for each animated element if it doesn't have one
  if (!element.id) {
    element.id = `animated-text-${Math.random().toString(36).substr(2, 9)}`;
  }

  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          // Add class to prevent re-animation
          entry.target.classList.add('animated');
          createLetterAnimation(entry.target as HTMLElement);
          // Disconnect after animation starts
          observer.disconnect();
        }
      });
    },
    {
      root: null, // viewport
      rootMargin: '00% 0px', // Add 10% margin to trigger earlier
      threshold: 0.3 // Lower threshold to match element animations
    }
  );

  // Start observing the element
  observer.observe(element);
};
