let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const thumbnails = document.querySelectorAll(".thumbnail");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        thumbnails[i].classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
            thumbnails[i].classList.add("active");
        }
    });
}

function changeSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
}

function selectSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Keyboard Navigation
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        changeSlide(-1);
    } else if (event.key === "ArrowRight") {
        changeSlide(1);
    }
});

// Auto-slide functionality
setInterval(() => changeSlide(1), 4000);
