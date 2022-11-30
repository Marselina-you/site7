import Swiper from 'swiper';
const portSlider = document.querySelector('.portfolio-section__items');

//import 'swiper/css';

const portfolioSlider = new Swiper(portSlider, {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  //loop: true,
  on: {
    init: function() {
      console.log('swiper initialized');

      const activeSlide = portSlider.querySelector('.swiper-slide-active');


      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActiveSlide.classList.add('slider-visible');
      console.log(nextActiveSlide);
      console.log(nextNextActiveSlide);
    },
  },


  // Navigation arrows
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  },

  // And if we need scrollbar

});



document.querySelector('.portfolio-section__prev').addEventListener('click', () => {
const activeSlide = portSlider.querySelector('.swiper-slide-next');

    document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
      el.classList.remove('slider-visible');
    });

    if (activeSlide.previousElementSibling) {
      const nextActiveSlide = activeSlide.previousElementSibling;
      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      activeSlide.nextElementSibling.classList.add('slider-visible');
    }


  });
  document.querySelector('.portfolio-section__next').addEventListener('click', () => {
    //const activeSlide = portSlider.querySelector('.swiper-slide-next');
    const activeSlide = portSlider.querySelector('.swiper-slide-active');
    const nextActiveSlide = activeSlide.nextElementSibling;
        const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

        document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
          el.classList.remove('slider-visible');
        })
        activeSlide.classList.add('slider-visible');
        nextActiveSlide.classList.add('slider-visible');
        nextNextActiveSlide.classList.add('slider-visible');


    });

