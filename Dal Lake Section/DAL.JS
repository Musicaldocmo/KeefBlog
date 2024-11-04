// JavaScript to handle scroll-based animations
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
});
// Select the button and additional content
const discoverMoreBtn = document.querySelector('.discover-more');
const additionalContent = document.querySelector('.additional-content');

// Add event listener to the button
discoverMoreBtn.addEventListener('click', () => {
    // Toggle 'active' class on the additional content
    additionalContent.classList.toggle('active');

    // Scroll smoothly to the additional content if it gets revealed
    if (additionalContent.classList.contains('active')) {
        additionalContent.scrollIntoView({ behavior: 'smooth' });
    }
});
// JavaScript for Carousel Functionality
function moveCarousel(carouselId, direction) {
    const container = document.getElementById(carouselId).querySelector('.image-carousel');
    const images = container.querySelectorAll('img');
    const focusedImageIndex = Array.from(images).findIndex(img => img.classList.contains('focused'));

    let newIndex = focusedImageIndex + direction;
    
    // Circular carousel
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    // Set all images to default state
    images.forEach(img => img.classList.remove('focused'));

    // Focus on the new image
    images[newIndex].classList.add('focused');

    // Center the focused image
    const offset = -(newIndex * (images[0].clientWidth + 16)) + (container.clientWidth / 2 - images[0].clientWidth / 2);
    container.style.transform = `translateX(${offset}px)`;
}

// Swipe functionality for touchscreens
function handleSwipe(carouselId) {
    const container = document.getElementById(carouselId).querySelector('.image-carousel');
    let startX, currentX;

    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    container.addEventListener('touchmove', (e) => {
        currentX = e.touches[0].clientX;
    });

    container.addEventListener('touchend', () => {
        const deltaX = currentX - startX;
        if (deltaX > 50) {
            // Swipe right
            moveCarousel(carouselId, -1);
        } else if (deltaX < -50) {
            // Swipe left
            moveCarousel(carouselId, 1);
        }
    });
}

// Auto-slide functionality
function autoSlide(carouselId) {
    setInterval(() => {
        moveCarousel(carouselId, 1);
    }, 18000); // Auto-slide every 18 seconds
}

// Initialize swipe and auto-slide for all carousels
document.addEventListener('DOMContentLoaded', () => {
    const carousels = ['shalimar-carousel', 'nishat-carousel', 'tulip-carousel', 'pari-carousel', 'chashme-carousel'];
    carousels.forEach(carouselId => {
        handleSwipe(carouselId);
        autoSlide(carouselId);
    });
});
// Back to Top Button Functionality
const backToTopButton = document.getElementById("backToTop");

// Show or hide the button based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block"; // Show the button
    } else {
        backToTopButton.style.display = "none"; // Hide the button
    }
};

// Scroll to the top smoothly when the button is clicked
backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling effect
    });
});

