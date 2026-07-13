let currentslide = 0;


const slidertrack = document.querySelector(".slider-track");


const slides = document.querySelectorAll(".slider");


function showSlide() {
    slidertrack.style.transform =
        `translateX(-${ currentslide * 100}%)`;
};


function nextSlide() {
    if (currentslide < slides.length - 1) {
        currentslide++;
    };
    showSlide();
};


function prevSlide() {
    if (currentslide > 0) {
        currentslide--;
    }
    showSlide()
};


function goToSlide(index) {
    currentslide = index;
    showSlide();
};

showSlide