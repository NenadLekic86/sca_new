export const animateSplitWords = (element: HTMLElement | null) => {
    if (!element) return;
  
    const text = element.textContent || '';
    const words = text.split('|').filter(word => word.trim() !== '');
  
    // Clear existing content
    element.textContent = '';
  
    words.forEach((word, index) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'split-word';
      wordSpan.textContent = word.trim();
  
      const randomX = (Math.random() - 0.5) * 1000;
      const randomY = (Math.random() - 0.5) * 600;
      const randomRotateX = (Math.random() - 0.5) * 360;
      const randomRotateY = (Math.random() - 0.5) * 360;
      const randomRotateZ = (Math.random() - 0.5) * 360;
  
      wordSpan.style.setProperty('--initialX', `${randomX}px`);
      wordSpan.style.setProperty('--initialY', `${randomY}px`);
      wordSpan.style.setProperty('--initialRotateX', `${randomRotateX}deg`);
      wordSpan.style.setProperty('--initialRotateY', `${randomRotateY}deg`);
      wordSpan.style.setProperty('--initialRotateZ', `${randomRotateZ}deg`);
      wordSpan.style.animationDelay = `${index * 0.15}s`;
  
      element.appendChild(wordSpan);
  
      if (index < words.length - 1) {
        const separator = document.createElement('span');
        separator.textContent = ' | ';
        separator.className = 'separator';
        element.appendChild(separator);
      }
    });
  };
  