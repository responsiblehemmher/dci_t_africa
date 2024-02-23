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
  