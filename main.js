import 'swiper/css/bundle';
import './assets/scss/all.scss';

//import * as bootstrap from 'bootstrap'
import { Collapse } from 'bootstrap';
import Swiper from 'swiper/bundle';


document.addEventListener('click', function(e) {
  const target = e.target;
  if (target.matches('a[href="#"]') || target.parentElement.matches('a[href="#"]')) {
    e.preventDefault();
  }
});

document.addEventListener('submit', function(e) {
  console.log(e.target);
  e.preventDefault();
});

const recommandationSwiper = new Swiper('.recommandation', {
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  spaceBetween: 24,
  grid: {
    rows: 4,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
      //mousewheel: true,
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 1,
      },
      //mousewheel: true,
    }
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  mousewheel: true,
});

new Swiper('.carousel .swiper', {
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    768: {
      autoplay: {
        enabled: false
      }
    }
  },
  navigation: {
    nextEl: '.carousel .swiper-button-next',
    prevEl: '.carousel .swiper-button-prev',
  }
});
