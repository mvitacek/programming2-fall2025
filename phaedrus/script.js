let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

// Function to show a specific slide
function showSlides(n) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Handle wrapping logic for index
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    // Display the current slide
    slides[slideIndex].classList.add('active');
}

// Function to move to the next or previous slide via buttons
function plusSlides(n) {
    showSlides(slideIndex + n);
}


// Automatic rotation (optional)
setInterval(() => {
    showSlides(slideIndex + 1);
}, 15000); // Change image every 15 seconds

// Initialize the gallery on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});
