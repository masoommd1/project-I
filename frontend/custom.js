//  ===================== categories =======================
const categories = document.querySelector(".categories-box");
const toggleButton = document.querySelector(".cat-btn");

if (categories && toggleButton) {
    toggleButton.addEventListener("click", (event) => {
        categories.classList.toggle("active");
        event.stopPropagation(); // Prevent the click from propagating to the document
    });

    document.addEventListener("click", (event) => {
        if (!categories.contains(event.target) && !toggleButton.contains(event.target)) {
            categories.classList.remove("active");
        }
    });
} else {
    console.error("One or more elements are missing in the DOM.");
}

//======================= slider ===========================

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// initializeSlider();
document.addEventListener("DOMContentLoaded",initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }

}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    });
    slides[slideIndex].classList.add("displaySlide");

}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);

}

