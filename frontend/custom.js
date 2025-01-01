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
// ====================== SEARCH FUNTION ==================>
    // Add functionality to the search icon
document.querySelector('.fa-search').addEventListener('click', function () {
    const query = document.querySelector('.search-bar input').value.trim();
    if (query) {
        alert(`You searched for: ${query}`);
        // Optionally, redirect to a search results page
        // window.location.href = `/search?q=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a search term.');
    }
});

// Allow pressing Enter to trigger search
document.querySelector('.search-bar input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        document.querySelector('.fa-search').click();
    }
});

// ====================== SEARCH FUNTION ==================>

    
// Select elements
const signBtn = document.querySelector('.sign-btn'); // "Sign in" button
const signBox = document.querySelector('.sign-box'); // Modal box
const closeBtn = document.querySelector('.close-btn'); // Close button
const signing = document.querySelector('.signing'); // Background blur element

// Open the sign-in box
signBtn.addEventListener('click', () => {
    signBox.classList.add('visible');
    signing.classList.add('active');
});

// Close the sign-in box
closeBtn.addEventListener('click', () => {
    signBox.classList.remove('visible');
    signing.classList.remove('active');
});

// Close the box when clicking outside
signing.addEventListener('click', (event) => {
    if (!signBox.contains(event.target)) {
        signBox.classList.remove('visible');
        signing.classList.remove('active');
    }
});

// ====================== sign in ===========================

// ====================== register box ===========================
    
// // Select elements
// const registerBtn = document.querySelector('.register-btn'); // "Sign in" button
// const registerBox = document.querySelector('.register-box'); // Modal box
// const closeBtn = document.querySelector('.close-btn'); // Close button
// const signing = document.querySelector('.signing'); // Background blur element

// // Open the sign-in box
// signBtn.addEventListener('click', () => {
//     signBox.classList.add('visible');
//     signing.classList.add('active');
// });

// // Close the sign-in box
// closeBtn.addEventListener('click', () => {
//     signBox.classList.remove('visible');
//     signing.classList.remove('active');
// });

// // Close the box when clicking outside
// signing.addEventListener('click', (event) => {
//     if (!signBox.contains(event.target)) {
//         signBox.classList.remove('visible');
//         signing.classList.remove('active');
//     }
// });


// ====================== register box ===========================

// Handle form submission
// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent default form submission behavior

//     // Collect input values
//     const email = form.querySelector('input[type="email"]').value;
//     const password = form.querySelector('input[type="password"]').value;

//     // Validation (example)
//     if (!email || !password) {
//         alert('Please fill in all fields.');
//         return;
//     }

//     // Mock authentication logic
//     alert(`Sign-in successful for: ${email}`);
//     signBox.style.visibility = 'hidden'; // Hide the sign-in box after submission
// });

// ====================== sign in ===========================


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

