var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });