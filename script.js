
// isotope

$('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: {
        columnWidth: 100
    }
});

// swiper slider

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: false,
    breakpoints: {
        540: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1324: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1924: {
            slidesPerView: 5,
            spaceBetween: 80,
          },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
  });
