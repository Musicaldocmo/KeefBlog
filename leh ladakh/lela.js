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
document.addEventListener("DOMContentLoaded", () => {
    // Options for the IntersectionObserver
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.3 // Trigger when 20% of the section is visible
    };
  
    // Callback for IntersectionObserver
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'animate' class based on data attributes for direction
          const direction = entry.target.getAttribute("data-animate-direction");
          entry.target.classList.add(`animate-${direction}`);
          
          // Stop observing the element after animation is applied
          observer.unobserve(entry.target);
        }
      });
    };
  
    // Create the observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // Select all sections with 'section' class and apply observer
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  // Function to add the 'visible' class on scroll
function handleScroll() {
  const fadeInElements = document.querySelectorAll('.fade-in');
  fadeInElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 50;
    if (isVisible) {
      element.classList.add('visible');
    }
  });
}

// Listen to scroll events
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // Trigger on load too, in case elements are initially in view
document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.querySelector('.leh-palace p');
  const text = paragraph.textContent; // Store the paragraph text
  paragraph.textContent = ''; // Clear the paragraph text initially
  let index = 0;

  // Function to create the typewriter effect
  function typeWriter() {
      if (index < text.length) {
          paragraph.textContent += text.charAt(index); // Add one character at a time
          index++;
          setTimeout(typeWriter, 50); // Adjust typing speed (50 ms between characters)
      }
  }

  // Intersection Observer to trigger the typewriter effect when section is visible
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              typeWriter(); // Start typing effect when section comes into view
              observer.unobserve(entry.target); // Stop observing once typed
          }
      });
  });

  observer.observe(document.querySelector('.leh-palace')); // Observe the leh-palace section
});
