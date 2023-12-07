// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth' // Changed 'smoaoth' to 'smooth'
        });
      }
    });
});

// Image slider for property carousel
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll('.property-card');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Form validation
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = this.querySelector('input[name="name"]').value;
  const email = this.querySelector('input[name="email"]').value;
  const message = this.querySelector('textarea[name="message"]').value;

  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  // Additional validation logic or form submission can be added here
});
