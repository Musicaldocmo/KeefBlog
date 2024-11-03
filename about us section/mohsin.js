
// Back to Top Button Functionality
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
// Smooth Scroll for Navigation Links (if you have a navbar)
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});


// Optional: Animate sections on scroll (using IntersectionObserver)
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Optional: Stop observing once animated
      }
    });
  },
  {
    threshold: 0.4, // Trigger animation when 40% of section is visible
  }
);

sections.forEach(section => {
  observer.observe(section);
});
// Hover effect to change the background color on hover of why choose us section
document.querySelectorAll('.reason').forEach(item => {
  item.addEventListener('mouseover', function() {
      this.style.backgroundColor = '#ffe5e5'; // Light red background
  });
  item.addEventListener('mouseout', function() {
      this.style.backgroundColor = '#fff'; // Reset to white background
  });
});


