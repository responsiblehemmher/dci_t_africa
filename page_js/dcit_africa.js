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


// Function to animate Main Container each line 
const animateLines = () => {
  const lines = document.querySelectorAll('.main__container .animate-line');
  lines.forEach((line, items) => {
      setTimeout(() => {
          line.style.opacity = 1;
      }, items * 4000); 
  });
}

// Call the function when the page is loaded
window.addEventListener('load', animateLines);



  
  


  

  