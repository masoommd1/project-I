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

//  ================================================== add to whislist
// Create an array to store the wishlist items
let wishlist = [];

// Function to toggle the heart icon and add/remove items from wishlist
function toggleWishlist(event) {
    const heartIcon = event.target;
    const productId = heartIcon.getAttribute('data-product-id');
    
    // Check if the product is already in the wishlist
    if (wishlist.includes(productId)) {
        // If it is, remove it from the wishlist
        wishlist = wishlist.filter(id => id !== productId);
        heartIcon.classList.remove('fa-solid'); // Change the heart icon to regular
        heartIcon.classList.add('fa-regular');
    } else {
        // Otherwise, add it to the wishlist
        wishlist.push(productId);
        heartIcon.classList.remove('fa-regular'); // Change the heart icon to solid
        heartIcon.classList.add('fa-solid');
    }
    
    // Optionally, log the current wishlist to the console for debugging
    console.log(wishlist);
}

// Add event listeners to all heart icons
document.querySelectorAll('.card i').forEach(icon => {
    icon.addEventListener('click', toggleWishlist);
});
