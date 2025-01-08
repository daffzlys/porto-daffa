// Theme Toggle Functionality
document.getElementById('theme-toggle').addEventListener('click', function() {
    // Toggle the dark mode class on the body
    document.body.classList.toggle('dark-mode');

    // Update button text based on the current theme
    const isDarkMode = document.body.classList.contains('dark-mode');
    this.textContent = isDarkMode ? 'L' : 'D';

    // Update video sources if necessary
    const lightVideo = document.querySelector('.logo-video.light-mode');
    const darkVideo = document.querySelector('.logo-video.dark-mode');

    if (isDarkMode) {
        lightVideo.style.display = 'none';
        darkVideo.style.display = 'block';
    } else {
        lightVideo.style.display = 'block';
        darkVideo.style.display = 'none';
    }
});

// Smooth scroll to sections
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Pilih semua elemen dengan class 'project-card'
// Pilih semua elemen dengan class 'project-card'
const projectCards = document.querySelectorAll('.project-card');

const appearOptions = {
  threshold: 0.2, // 20% visible
  rootMargin: "0px 0px -50px 0px" // Adds extra margin for triggering earlier
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('show');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

// Apply observer to each project card
projectCards.forEach(card => {
  appearOnScroll.observe(card);
});
