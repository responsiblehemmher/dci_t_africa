// Mobile acive
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// Active Navtab
function setActive(element) {
    var navlinks = document.querySelectorAll('.navbar__links');
    navlinks.forEach(function(navlink) {
      navlink.classList.remove('active');
    });
    element.classList.add('active');
  }


  // Services Function In Courses Section
  const services = document.querySelectorAll('.service');
  let currentIndex = 0;

  function rotateText() {
    services.forEach((service, index) => {
      service.style.display = index === currentIndex ? 'block' : 'none';
    });
    currentIndex = (currentIndex + 1) % services.length;
  }

  setInterval(rotateText, 3000);

  // Testimonial Function In Courses Section
  document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelector('.testimonials');
    const testimonialItems = document.querySelectorAll('.testimonial');

    let index = 0;
    setInterval(() => {
      index = (index + 1) % testimonialItems.length;
      testimonials.style.transform = `translateX(-${index * 100}%)`;
    }, 2000); 
  });

  