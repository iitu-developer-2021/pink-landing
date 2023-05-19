// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
// eslint-disable-next-line import/no-unresolved

// import '../../scss/base/swiper.scss';

// init Swiper:
const swiper = new Swiper('.review__slider', {
    // Вказуємо склас потрібного слайдера
    // Підключаємо модулі слайдера
    // для конкретного випадку
    modules: [Navigation, Pagination],
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 30,
    watchOverflow: false,
    pagination: {
        el: '.review__pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.review__button-next',
        prevEl: '.review__button-prev'
    }
});

const breakpoint = window.matchMedia('(min-width: 660px)');

let tariffSwiper;

const breakpointChecker = function () {
    if (breakpoint.matches) {
        if (tariffSwiper) tariffSwiper.destroy(true, true);
    } else {
        enableSwiper();
    }
};

const enableSwiper = function () {
    tariffSwiper = new Swiper('.tariff__slider', {
        modules: [Pagination],
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        watchOverflow: false,
        initialSlide: 1,
        pagination: {
            el: '.tariff__pagination',
            clickable: true
        }
    });
};

breakpoint.addListener(breakpointChecker);

breakpointChecker();
