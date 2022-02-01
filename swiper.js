var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  loop: true,
  breakpoints: {

    320: {
      slidesPerView: 1,
    },

    780: {
      slidesPerView: 1,
    },

    900: {
      slidesPerView: 3,
    },



  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

var swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  allowTouchMove: false,
  loop: true,
});
