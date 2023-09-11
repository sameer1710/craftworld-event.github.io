
var swiper = new Swiper(".card-slider", {
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },

})


var swiper = new Swiper(".cardslider", {
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
        reverseDirection: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },

})
