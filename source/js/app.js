import * as functions from './modules/functions.js';
import './modules/swiper.js';
import './modules/map.js';

functions.isWebp();

const menuToggler = document.querySelector('[data-menu-toggler]');

function handleMenuToggleClick() {
    const navigationClass = menuToggler.dataset.menuToggler;
    const navigationBlock = document.querySelector(navigationClass);
    if (navigationBlock.classList.contains('header__nav--active')) {
        navigationBlock.classList.remove('header__nav--active');
        menuToggler.classList.remove('header__toggle--active');
    } else {
        navigationBlock.classList.add('header__nav--active');
        menuToggler.classList.add('header__toggle--active');
    }
}

menuToggler.addEventListener('click', handleMenuToggleClick);

const header = document.querySelector('.header');

const checkScrollPosition = () => {
    const { pageYOffset } = window;

    if (pageYOffset > 50) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
};

document.addEventListener('scroll', checkScrollPosition);
