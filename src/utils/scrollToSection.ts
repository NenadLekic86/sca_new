export const scrollToSection = (id: string, duration: number = 1000) => {
    const target = document.getElementById(id);
    if (!target) return;
  
    const targetY = target.getBoundingClientRect().top + window.scrollY;
    const startY = window.scrollY;
    const diff = targetY - startY;
    const startTime = performance.now();
  
    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  
    const animate = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutQuad(progress);
  
      window.scrollTo(0, startY + diff * easedProgress);
  
      if (timeElapsed < duration) {
        requestAnimationFrame(animate);
      }
    };
  
    requestAnimationFrame(animate);
  };