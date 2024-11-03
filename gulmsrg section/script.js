// Select the "Contact" paragraph and the dropdown menu
const contactBtn = document.getElementById('contact-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle dropdown menu visibility on click of the "Contact" <p>
contactBtn.addEventListener('click', () => {
  // Toggle the dropdown visibility between block and none
  if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
});
// Select the "Enquire Now" button
const enquireBtn = document.getElementById('enquire-btn');

// Select the modal elements for desktop
const modal = document.getElementById('desktop-modal');
const closeModal = document.querySelector('.close');

// Function to check if the user is on a mobile device
function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

// Add event listener to the "Enquire Now" button
enquireBtn.addEventListener('click', () => {
  if (isMobileDevice()) {
    // If on mobile, open the phone's calling pad
    window.location.href = 'tel:+919541268040'; // Replace with your phone number
  } else {
    // If on desktop, show the contact modal
    modal.style.display = 'block';
  }
});

// Close modal when clicking the "x" button
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal if user clicks outside the modal content
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
// JavaScript to enable 'Send E-Mail' functionality
document.getElementById("e-mail-link").addEventListener("click", function(event) {
  event.preventDefault();  // Prevents default link behavior
  var email = "info.keeftravels@gmail.com";
  var subject = "Inquiry about your services";
  var body = "Hello, I would like to know more about the services you offer.";

  // Create a Gmail compose URL
  var gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the Gmail compose window
  window.open(gmailLink, '_blank');
});

