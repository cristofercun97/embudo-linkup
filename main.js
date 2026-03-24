/* ----------------------------------------------------------
       SCROLL REVEAL ANIMATION
    ---------------------------------------------------------- */
    const revealEls = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));


    /* ----------------------------------------------------------
       TOP BAR — Scroll shrink effect
    ---------------------------------------------------------- */
    const topBar = document.getElementById('top-bar');
    window.addEventListener('scroll', () => {
      topBar.style.padding = window.scrollY > 40 ? '10px 20px' : '14px 20px';
    }, { passive: true });


    /* ----------------------------------------------------------
       VIDEO PLACEHOLDER — Load YouTube iframe on click
       Replace VIDEO_ID with the real YouTube video ID.
    ---------------------------------------------------------- */
    const videoPlaceholder = document.getElementById('video-placeholder');
    if (videoPlaceholder) {
      videoPlaceholder.addEventListener('click', () => {
        const VIDEO_ID = 'dQw4w9WgXcQ'; // PLACEHOLDER: Reemplaza con el ID real del video de YouTube
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;';
        videoPlaceholder.parentElement.appendChild(iframe);
        videoPlaceholder.style.display = 'none';
      });
    }


    /* ----------------------------------------------------------
       NEWSLETTER FORM — Placeholder submission
    ---------------------------------------------------------- */
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterSuccess = document.getElementById('newsletter-success');

    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletter-email').value.trim();

        if (!email || !email.includes('@')) {
          document.getElementById('newsletter-email').style.borderColor = 'rgba(255,100,100,0.6)';
          return;
        }

        const submitBtn = newsletterForm.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;

        if (window.db && window.fb) {
          window.fb.addDoc(
            window.fb.collection(window.db, 'form_submissions'),
            {
              email,
              landingId: 'newsletter',
              createdAt: window.fb.serverTimestamp()
            }
          ).catch(err => console.error('[LinkUp Firestore]', err));
        }

        console.log('[LinkUp Newsletter] Email capturado:', email);
        newsletterForm.style.display = 'none';
        newsletterSuccess.style.display = 'block';
      });

      document.getElementById('newsletter-email').addEventListener('input', (e) => {
        e.target.style.borderColor = '';
      });
    }


    /* ----------------------------------------------------------
       CTA CLICK TRACKING — Identifiers for analytics
       Futuros eventos de GA4 / Meta Pixel / TikTok Pixel
    ---------------------------------------------------------- */
    const ctaIds = [
      'hero-cta-primary',
      'tener-cta',
      'video-cta',
      'survey-main-cta',
      'final-survey-cta',
      'official-landing-cta',
      'footer-login'
    ];

    ctaIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', () => {
          /*
            PLACEHOLDER: Conectar con sistema de analytics real.
            Ejemplo GA4: gtag('event', 'cta_click', { cta_id: id });
            Ejemplo Meta Pixel: fbq('track', 'Lead');
          */
          console.log(`[LinkUp Analytics] CTA click: ${id}`);
        });
      }
    });
