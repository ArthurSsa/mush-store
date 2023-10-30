var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
      0: {slidesPerView: 4,},
      720: {slidesPerView: 4,},
      950: {slidesPerView: 4,},
      1100: {slidesPerView: 3,},
      1350: {slidesPerView: 4,},
    },
  });