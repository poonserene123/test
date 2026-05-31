document.addEventListener('DOMContentLoaded', () => {

  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Contact form handler
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.btn');
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#22c55e';
      form.reset();
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
      }, 3000);
    });
  }

});
