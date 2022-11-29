
import Swiper from 'swiper';

import 'swiper/css';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  },

  // And if we need scrollbar

});
