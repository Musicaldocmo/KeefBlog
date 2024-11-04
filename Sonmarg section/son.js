window.addEventListener('scroll', function(){
    const revealElements = document.querySelectorAll('.reveal-text');
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100){
            element.classList.add('show');
        }
    });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const activityCards = document.querySelectorAll('.activity-card');
    
        activityCards.forEach(card => {
            const cardContent = card.querySelector('.card-content');
    
            // Add mouse enter and leave events
            card.addEventListener('mouseenter', () => {
                cardContent.style.transform = 'rotateY(180deg)';
            });
    
            card.addEventListener('mouseleave', () => {
                cardContent.style.transform = 'rotateY(0deg)';
            });
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
function displayAttractions() {
    const attractionsSection = document.getElementById('attractions');
    const attractionsList = document.getElementById('attractions-list');

    // Define attractions data
    const attractions = [
        "1. Thajiwas Glacier: A must-visit for its stunning ice formations and adventure activities.",
        "2. Sindh River: Ideal for fishing and river rafting with breathtaking views.",
        "3. Krishansar Lake: A picturesque lake perfect for trekking and nature photography.",
        "4. Baltal Valley: A beautiful valley offering panoramic views and a serene environment.",
        "5. Pony Rides: Experience the lush meadows and valleys through scenic pony rides."
    ];

    // Clear previous content
    attractionsList.innerHTML = '';

    // Add attractions to the list
    attractions.forEach(attraction => {
        const li = document.createElement('li');
        li.textContent = attraction;
        attractionsList.appendChild(li);
    });

    // Show the attractions section
    attractionsSection.style.display = "block";

    // Smoothly scroll to the attractions section
    attractionsSection.scrollIntoView({ behavior: "smooth" });
}

