const burgerButton = document.querySelector('.burger');
const mobileMenu = document.querySelector('.overlay');
const closeButton = document.querySelector('.mobile-menu__close');

function toggleMenu() {
    mobileMenu.classList.toggle('overlay--active');
    }

burgerButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);