
// Services Function In Courses Section
const services = document.querySelectorAll('.service');
let currentIndex = 0;

function rotateText() {
  
  services.forEach((service, index) => {
    service.style.display = index === currentIndex ? 'block' : 'none';
  });
  currentIndex = (currentIndex + 1) % services.length;
}

setInterval(rotateText, 5000);


// Testimonial Function In Courses Section

const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(n) {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (n + testimonials.length) % testimonials.length;
  testimonials[currentTestimonial].classList.add('active');
}

function slideTestimonials() {
  showTestimonial(currentTestimonial + 1);
}

setInterval(slideTestimonials, 10000); 
