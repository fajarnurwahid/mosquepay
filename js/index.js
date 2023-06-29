// start: AOS
AOS.init({
    duration: 750,
    once: true,
    offset: 24
})
// end: AOS



// start: Services
new Swiper('.service-swiper', {
    spaceBetween: 24,
    slidesPerView: 4,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
})
// end: Services