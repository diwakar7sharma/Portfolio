/**
 * Smooth scrolling to an element by ID
 * @param elementId - The ID of the element to scroll to
 * @param offset - Additional offset from the top (for fixed headers)
 */
export const scrollToElement = (elementId: string, offset: number = 80): void => {
  const element = document.getElementById(elementId);
  
  if (element) {
    const topPosition = element.getBoundingClientRect().top + window.scrollY - offset;
    
    window.scrollTo({
      top: topPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Add smooth scrolling to all anchor links with hash href
 */
export const initSmoothScroll = (offset: number = 80): void => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const anchorElement = target.closest('a[href^="#"]') as HTMLAnchorElement;
    
    if (anchorElement) {
      event.preventDefault();
      const hash = anchorElement.hash.substring(1);
      scrollToElement(hash, offset);
    }
  });
};

/**
 * Initialize the active section tracking
 * Adds 'active' class to nav links based on the current visible section
 */
export const initActiveSectionTracking = (
  sectionSelector: string = 'section[id]',
  navLinkSelector: string = 'nav a',
  activeClass: string = 'active'
): void => {
  const sections = document.querySelectorAll(sectionSelector);
  const navLinks = document.querySelectorAll(navLinkSelector);
  
  if (sections.length === 0 || navLinks.length === 0) return;
  
  const observerOptions = {
    rootMargin: '-100px 0px -80% 0px',
    threshold: 0
  };
  
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.id;
        
        navLinks.forEach(link => {
          const href = (link as HTMLAnchorElement).getAttribute('href');
          if (href && href === `#${activeId}`) {
            link.classList.add(activeClass);
          } else {
            link.classList.remove(activeClass);
          }
        });
      }
    });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
};
