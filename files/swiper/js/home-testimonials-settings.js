new Swiper('.testimonials-slider', {
    slidesPerGroup: 2,
    slidesPerView: '2',
    autoHeight: true,
    watchOverflow: true,
    spaceBetween: 23,
    speed: 800,
    effect: 'slide',
    pagination: {
       el: '.testimonials__pagination',
       clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerGroup: 1,
            spaceBetween: 20,
            slidesPerView: '1',
            autoHeight: true,
        },
        768: {
            slidesPerGroup: 2,
            spaceBetween: 23,
            slidesPerView: '2',
            autoHeight: false,
        }
    }
})