document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  // Formularz kontaktowy
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formularz został przesłany poprawnie!');
    form.reset();
  });

  // Scroll-to-top button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '&uarr;';
  scrollToTopBtn.id = 'scrollToTopBtn';
  scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    font-size: 18px;
    padding: 10px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `;
  document.body.appendChild(scrollToTopBtn);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});
