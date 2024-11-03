// Virtual Postcard Functionality
document.querySelector('.discover-btn').addEventListener('click', () => {
    document.querySelector('.postcard-creator').classList.remove('hidden');
});

// Array of Background Images
const backgrounds = ["Gurez1.jpg", "gurez.jpg", "g1.jpg"];
let currentBgIndex = 0;

// Close the Postcard Creator
function closePostcard() {
    document.querySelector('.postcard-creator').classList.add('hidden');
}

// Change Background Image
function changeBackground() {
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
    document.querySelector('.postcard-bg').src = backgrounds[currentBgIndex];
}

// Save Postcard as Image
function savePostcard() {
    html2canvas(document.querySelector('.postcard')).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpg');
        link.download = 'Gurez_Postcard.jpg';
        link.click();
    });
}
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
