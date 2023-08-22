// refereh page to go top script
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }



// ScrollReveal({
//     reset: true,
//     distance: '60px',
//     duration: 2000,
//     delay: 400
// });
ScrollReveal().reveal('.logo', { delay: 200, origin: 'bottom' });
// ScrollReveal().reveal('.nav-list', { delay: 200, origin: 'intervel', distance: '0px' });
ScrollReveal().reveal('.btn-icon', { delay: 300, origin: 'left' });

ScrollReveal().reveal('.heading4, .heading-h1, .para', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.button-hero', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.circle-bg-img', { delay: 1000, origin: 'bottom' });

ScrollReveal().reveal('.top-left', { delay: 200, origin: 'intervel', distance: '2px' });
ScrollReveal().reveal('.top-right', { delay: 200, origin: 'intervel', distance: '2px' });
ScrollReveal().reveal('.bottom-left', { delay: 200, origin: 'intervel', distance: '2px' });
ScrollReveal().reveal('.bottom-right', { delay: 200, origin: 'intervel', distance: '2px' });


ScrollReveal().reveal('.skillone', { delay: 200 ,origin:'bottom'});
ScrollReveal().reveal('.skilltwo', { delay: 200 ,origin:'bottom', distance: '1px'});
ScrollReveal().reveal('.skillcontainertwo', { delay: 200 ,origin:'bottom'});

ScrollReveal().reveal('.pro1-left', { delay: 200 ,origin:'bottom'});
ScrollReveal().reveal('.pro2-left', { delay: 200 ,origin:'bottom'});

// ScrollReveal().reveal('.circle-img1', { delay: 500, origin: 'right' });


// ScrollReveal().reveal('.circle-img2 img', { delay: 200, origin: 'left' });

// ScrollReveal().reveal('.fill-circle1', { delay: 200, origin: 'rights' });
// ScrollReveal().reveal('.fill-circle', { delay: 200, origin: 'left' });

// ScrollReveal().reveal('.ceo-section', { delay: 200, origin:'bottom'});

// ScrollReveal().reveal('.let-work-container', { delay: 200, origin:'center',distance: '0.2px'});









document.addEventListener("DOMContentLoaded", function () {
    const rightHero = document.querySelector(".right-hero");
    rightHero.classList.add("loaded");
});



const mob_nav = document.querySelector(".menu-btns");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};
mob_nav.addEventListener("click", () => toggleNavbar());





$(document).ready(function () {
    $('.reset-rotation').waypoint(function () {
        $(this.element).css('transform', 'rotate(0deg)');
        this.destroy();
    }, {
        offset: '50%'
    });
});



//Counter 
$(document).ready(function () {
    const counters = $(".counter");
    const sectionOffset = $(".counter-section").offset().top - $(window).height() + 100;

    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= sectionOffset) {
            startCounting();
        }
    });

    function startCounting() {
        counters.each(function () {
            const counter = $(this);
            const targetValue = parseInt(counter.text());

            counter.text("0");
            animateCounter(counter, targetValue);
        });

        $(window).off("scroll", startCounting);
    }

    function animateCounter(counter, targetValue) {
        let currentValue = 0;
        const interval = setInterval(function () {
            currentValue++;
            counter.text(currentValue);

            if (currentValue >= targetValue) {
                clearInterval(interval);
            }
        }, 30); // Change the interval speed
    }
});


// Silder 

const slides = document.querySelectorAll('.slide');
const circles = document.querySelectorAll('.circle');
let currentSlideIndex = 0;

function showSlide(index) {
    slides.forEach((slide, idx) => {
        if (idx === index) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });
}

function updateCircles(index) {
    circles.forEach((circle, idx) => {
        if (idx === index) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
}

function goToSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
    updateCircles(currentSlideIndex);
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
    updateCircles(currentSlideIndex);
}


showSlide(currentSlideIndex);
updateCircles(currentSlideIndex);

setInterval(nextSlide, 6000);


// JavaScript code to toggle the active class and prevent scrolling
const menuBtns = document.querySelector('.menu-btns');
const navbar = document.querySelector('.navbar');

menuBtns.addEventListener('click', () => {
    navbar.classList.toggle('active');
    document.body.classList.toggle('menu-active');

});
// JavaScript code to close the menu and restore scrolling
// navbar.classList.remove('active');
// document.body.classList.remove('menu-active');

