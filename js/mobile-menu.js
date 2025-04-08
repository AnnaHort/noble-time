const burgerButton = document.querySelector('.burger');
const mobileMenu = document.querySelector('.overlay');
const closeButton = document.querySelector('.mobile-menu__close');

function toggleMenu() {
    mobileMenu.classList.toggle('overlay--active');
    }

function closeEscape(event) {
    if (event.key === 'Escape') {
        mobileMenu.classList.remove('overlay--active');
    }
}

function closeClick() {
    mobileMenu.classList.remove('overlay--active');
}

document.addEventListener('click', (event) => {
    if (event.target === mobileMenu) {
        closeClick();
    }
});
document.addEventListener('keydown', closeEscape);
burgerButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);