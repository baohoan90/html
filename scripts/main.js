
/**
 * @author hoan.lam
 */

let navBar = document.querySelector('nav');
let menuBtn = document.getElementById('js-menu-bars');

/**
 * Show menu bar on small device
 */
menuBtn.onclick = () => {
    navBar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

/**
 * Hide menu bar on small device when scrolling
 */
window.onscroll = () => {
    navBar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    sections.forEach(section => {
        let top = window.scrollY;
        let height = section.offsetHeight;
        let offset = section.offsetTop - 150;
        let id = section.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let navLink = document.querySelector('header .navbar a[href*=' + id + ']');
                if (navLink) {
                    navLink.classList.add('active');
                }
            });
        }
    });
}

/**
 * Close Search Box
 */
let searchForm = document.getElementById('js-search-form');
let searchCloseBtn = document.getElementById('js-search-close-btn');
searchCloseBtn.onclick = () => {
    if (searchForm) {
        searchForm.classList.remove('active');
    }
}

/**
 * Open Search Box
 */
let searchMenuBtn = document.getElementById('js-menu-search');
searchMenuBtn.onclick = () => {
    if (searchForm) {
        searchForm.classList.toggle('active');
    }
}

let searchIconBtn = document.getElementById('js-search-btn');
searchIconBtn.onclick = () => {
    let searchBoxInput = document.getElementById('js-search-box');
    alert('TODO: searching...: ' + searchBoxInput.value);
}

var swiperHomeSlider = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true
    /*,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    */
});

var swiperReviewSlider = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

function initialize() {
    setInterval(() => {
        document.querySelector('.loader-container').classList.add('fade-out');
    }, 3000);
}

window.onload = function () {
    initialize();
};
