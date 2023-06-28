// start: AOS
AOS.init({
    duration: 750,
    once: true,
    offset: 24
})
// end: AOS



// start: Navbar
var navbarToggle = document.querySelector('.navbar-toggle')
var navbarMenu = document.querySelector('.navbar-menu')
navbarToggle.addEventListener('click', function() {
    navbarMenu.classList.toggle('active')
    navbarToggle.classList.add('rotate')
    if(navbarMenu.classList.contains('active')) {
        setTimeout(function() {
            setTimeout(function() {
                navbarToggle.classList.remove('rotate')
            }, 250)
            navbarToggle.innerHTML = '<i class="ri-close-line"></i>'
        }, 250)
    } else {
        setTimeout(function() {
            setTimeout(function() {
                navbarToggle.classList.remove('rotate')
            }, 250)
            navbarToggle.innerHTML = '<i class="ri-menu-line"></i>'
        }, 250)
    }
})

document.querySelectorAll('.navbar-menu-item').forEach(function(item) {
    item.addEventListener('click', function(e) {
        var submenu = item.querySelector('.navbar-submenu')
        if(window.innerWidth <= 991 && submenu) {
            e.preventDefault()
            item.classList.toggle('active')
        }
    })
})

window.addEventListener('scroll', function() {
    document.querySelector('nav').classList.toggle('scrolled', this.scrollY > 24)
})
// end: Navbar



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