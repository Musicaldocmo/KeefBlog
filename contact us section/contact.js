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
// // Initialize EmailJS simple alert one 
// (function() {
//     emailjs.init("xrYW25asYiwhAx8jd"); // Replace with your EmailJS user ID or Public Key
// })();

// // Add event listener to the form
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Send the email
//     emailjs.sendForm('service_Contact','template_wr6t6sp', this)
//         .then(function() {
//             alert('Message sent successfully!'); // Success message
//             document.getElementById('contact-form').reset(); // Reset form after submission
//         }, function(error) {
//             alert('Failed to send message. Please try again later.'); // Error message
//             console.error('EmailJS Error:', error); // Log the error for debugging
//         });
// });
 // Initialize EmailJS the page one loading spinner
(function() {
    emailjs.init("xrYW25asYiwhAx8jd"); // Replace with your EmailJS user ID or Public Key
})();

// Add event listener to the form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display the loading message and spinner
    displayMessage("Sending message...", true);

    // Send the email
    emailjs.sendForm('service_Contact', 'template_wr6t6sp', this)
        .then(function() {
            displayMessage("Message sent successfully!", false); // Success message
            document.getElementById('contact-form').reset(); // Reset form after submission
        }, function(error) {
            displayMessage("Failed to send message. Please try again later.", false); // Error message
            console.error('EmailJS Error:', error); // Log the error for debugging
        });
});

// Function to display the message on the page with a spinner
function displayMessage(message, isLoading) {
    // Create a message container or select an existing one
    let messageContainer = document.getElementById('message-container');
    if (!messageContainer) {
        messageContainer = document.createElement('div');
        messageContainer.id = 'message-container';
        messageContainer.style.position = "relative";
        messageContainer.style.marginTop = "1rem";
        document.getElementById('contact-form').appendChild(messageContainer);
    }
    messageContainer.innerHTML = isLoading 
        ? `<span>${message}</span><div class="loading-spinner"></div>`
        : `<span>${message}</span>`;

    // Redirect back to form after 3 seconds if message is not loading
    if (!isLoading) {
        setTimeout(() => {
            messageContainer.innerHTML = ''; // Clear message
        }, 7000);
    }
}
// Smooth scroll for internal anchor links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});