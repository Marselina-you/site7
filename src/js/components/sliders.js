import Swiper, { Thumbs } from 'swiper';
const portSlider = document.querySelector('.portfolio-projects__items');
const relatedSlider = document.querySelector('.related-projects__items')
//import 'swiper/css';
if (relatedSlider) {
  const relatedProjSlider = new Swiper(relatedSlider, {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    //loop: true,
    on: {
      init: function () {
        console.log('swiper initialized');

        const activeSlide = relatedSlider.querySelector('.swiper-slide-active');


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
      nextEl: '.related-projects__next',
      prevEl: '.related-projects__prev',
    },

    // And if we need scrollbar

  });



  document.querySelector('.related-projects__prev').addEventListener('click', () => {
    const activeSlide = relatedSlider.querySelector('.swiper-slide-next');

    document.querySelectorAll('.related-projects__items .swiper-slide').forEach(el => {
      el.classList.remove('slider-visible');
    });

    if (activeSlide.previousElementSibling) {
      const nextActiveSlide = activeSlide.previousElementSibling;
      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      activeSlide.nextElementSibling.classList.add('slider-visible');
    }


  });
  document.querySelector('.related-projects__next').addEventListener('click', () => {

    const activeSlide = relatedSlider.querySelector('.swiper-slide-active');
    const nextActiveSlide = activeSlide.nextElementSibling;
    const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

    document.querySelectorAll('.related-projects__items .swiper-slide').forEach(el => {
      el.classList.remove('slider-visible');
    })
    activeSlide.classList.add('slider-visible');
    nextActiveSlide.classList.add('slider-visible');
    nextNextActiveSlide.classList.add('slider-visible');


  });
}

if (portSlider) {
  const portfolioSlider = new Swiper(portSlider, {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    //loop: true,
    on: {
      init: function () {
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
}

const testimonialsSlider = new Swiper('.testimonials__items', {
  slidesPerView: 1,
  spaceBetween: 3,
  loop: true,
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
});

const workImages = document.querySelector('.work-images-slider');
const workImagesNav = document.querySelector('.work-images-nav');


if (workImages) {

  const workSlider = new Swiper('.work-images-nav', {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      576: {
        slidesPerView: 6
      },
      768: {
        slidesPerView: 10,
      }
    }

  });
const  workSlidesNav = new Swiper(workImages, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".work-images__next",
      prevEl: ".work-images__prev",
    },

    thumbs: {
      swiper: workSlider,
    },
  });
}
const historySlider = document.querySelector('.history-slider');

if (historySlider) {
  const workSlider = new Swiper(historySlider, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".history__next",
      prevEl: ".history__prev",
    },
  });

  workSlider.on('slideChange', function () {
    console.log(workSlider.realIndex);

    historyBtns.forEach(el => {
      el.classList.remove('history-nav__btn--active')
          });
          document.querySelector(`.history-nav__btn[data-index="${workSlider.realIndex}"]`).classList.add('history-nav__btn--active');
  });
  const historyBtns = document.querySelectorAll('.history-nav__btn');

  historyBtns.forEach((el, idx) => {

    el.setAttribute('data-index', idx)
    el.addEventListener('click', (e) => {
    const index = e.currentTarget.dataset.index;

    historyBtns.forEach(el => {
el.classList.remove('history-nav__btn--active')
    });
    e.currentTarget.classList.add('history-nav__btn--active');

    workSlider.slideTo(index);
    })
  })
}





