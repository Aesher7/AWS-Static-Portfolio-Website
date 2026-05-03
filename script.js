const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const payload = Object.fromEntries(formData.entries());
    const submitButton = contactForm.querySelector('button[type="submit"]');

    if (formStatus) {
      formStatus.textContent = 'Sending...';
      formStatus.style.color = '#6d7b96';
    }
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch('/functions/v1/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Request failed');

      contactForm.reset();
      if (formStatus) {
        formStatus.textContent = "Message sent! I'll get back to you soon.";
        formStatus.style.color = '#23926f';
      }
    } catch (error) {
      const subject = encodeURIComponent('Portfolio Contact Form');
      const body = encodeURIComponent(`Name: ${payload.name || ''}
Email: ${payload.email || ''}

${payload.message || ''}`);
      window.location.href = `mailto:andreesher1@gmail.com?subject=${subject}&body=${body}`;
      if (formStatus) {
        formStatus.textContent = 'Email app opened as a fallback.';
        formStatus.style.color = '#6d7b96';
      }
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}
