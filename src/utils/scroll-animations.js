// Lightweight scroll reveal helper
// Adds `animate-on-scroll` to common elements and toggles `animate-visible` when in view
(function () {
  const selectors = [
    'header',
    '.hero-left h1',
    '.hero-left .hero-sub',
    '.hero-ctas',
    '.hero-right img',
    'section h2',
    'section p',
    '.service-card',
    '.feature-card-new',
    '.feature-card',
    '.why-img',
    '.counter-box',
    '.team-card',
    '.step-item',
    '.about-intro',
    '.story-img',
  ].join(', ');

  function init() {
    try {
      // Animations are enabled by default
      // Limit animations to selected routes for performance / UX
      const allowedPages = ['/', '/about', '/aboutus'];
      if (!allowedPages.includes(window.location.pathname)) return;

      const nodes = document.querySelectorAll(selectors);
      if (!nodes.length) return;

      nodes.forEach((el, i) => {
        el.classList.add('animate-on-scroll');
        // base stagger
        el.style.transitionDelay = (i % 6) * 80 + 'ms';
      });

      // Add stronger stagger specifically for service cards and legacy service items
      const serviceCards = document.querySelectorAll('.service-card, .service-item');
      serviceCards.forEach((el, i) => {
        el.classList.add('animate-on-scroll');
        el.style.transitionDelay = (i * 120) + 'ms';
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      nodes.forEach(el => observer.observe(el));

      // Parallax for hero image
      const heroImg = document.querySelector('.hero-right img.hero-direct-img');
      if (heroImg && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        let ticking = false;
        function onScroll() {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              const rect = heroImg.getBoundingClientRect();
              const viewportCenter = window.innerHeight / 2;
              const distance = rect.top + rect.height / 2 - viewportCenter;
              const translateY = Math.max(Math.min(-distance * 0.04, 40), -40);
              heroImg.style.transform = `translateY(${translateY}px)`;
              ticking = false;
            });
            ticking = true;
          }
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        // run once to set initial position
        onScroll();
      }

      // Create a one-time scroll intro overlay (shows on first user scroll per session)
      const key = 'scrollIntroShown';
      if (!sessionStorage.getItem(key)) {
        let overlay = document.createElement('div');
        overlay.className = 'scroll-intro-overlay';
        document.body.appendChild(overlay);

        function handleFirstScroll() {
          // show overlay briefly then hide
          overlay.classList.add('active');
          sessionStorage.setItem(key, '1');
          window.removeEventListener('scroll', handleFirstScroll);
          setTimeout(() => {
            overlay.classList.remove('active');
            setTimeout(() => overlay.remove(), 600);
          }, 900);
        }

        window.addEventListener('scroll', handleFirstScroll, { passive: true });
      }
    } catch (err) {
      console.error('scroll-animations init failed', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
