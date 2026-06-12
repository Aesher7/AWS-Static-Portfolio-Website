// ============ Portfolio interactivity ============
(function(){
  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(toggle){
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // Resume dropdown
  const resumeBtn = document.getElementById('resumeBtn');
  const resumeMenu = document.getElementById('resumeMenu');
  if(resumeBtn){
    resumeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      resumeMenu.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if(!resumeMenu.contains(e.target)) resumeMenu.classList.remove('open');
    });
  }

  // Reveal on scroll with staggered effect
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en, idx) => {
      if(en.isIntersecting){
        setTimeout(() => {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }, idx * 50);
      }
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Mouse tracking on skill cards
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Lightbox for architecture diagrams
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  document.querySelectorAll('.arch-card img').forEach(img => {
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lb.classList.add('open');
    });
  });
  if(lb){
    lb.addEventListener('click', (e) => {
      if(e.target === lb || e.target.classList.contains('close')) lb.classList.remove('open');
    });
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') lb.classList.remove('open');
    });
  }

  // Animated counter for stats (optional)
  const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if(!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start);
      if(progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  };

  // Smooth parallax scroll effect on hero
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if(hero && scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });

  // Add hover effects to buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(255,255,255,0.5)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s ease-out';
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Contact form (mock)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.getElementById('formMsg');
      msg.textContent = '✨ Thanks! Your message has been recorded locally.';
      msg.classList.add('show');
      const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
        ts: new Date().toISOString()
      };
      try{
        const list = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        list.push(data);
        localStorage.setItem('contactSubmissions', JSON.stringify(list));
      }catch(_){}
      form.reset();
      setTimeout(() => msg.classList.remove('show'), 4500);
    });
  }

  // Ambient animation - gentle floating particles effect
  const createParticles = () => {
    if(Math.random() > 0.85) {
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      particle.style.width = '4px';
      particle.style.height = '4px';
      particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '0';
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = '-10px';
      particle.style.opacity = '0.6';
      document.body.appendChild(particle);

      let y = -10;
      const x = parseFloat(particle.style.left);
      const drift = (Math.random() - 0.5) * 2;

      const animate = () => {
        y += 1 + Math.random() * 0.5;
        particle.style.transform = `translateX(${drift * y * 0.02}px)`;
        particle.style.top = y + 'px';
        particle.style.opacity = Math.max(0, 0.6 - (y / window.innerHeight) * 0.6);

        if(y < window.innerHeight) {
          requestAnimationFrame(animate);
        } else {
          particle.remove();
        }
      };
      animate();
    }
  };
  setInterval(createParticles, 200);
})();
