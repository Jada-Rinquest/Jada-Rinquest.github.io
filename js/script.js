// script.js – simple interactivity for Jada's portfolio

(function() {
  console.log('Jada Rinquest portfolio ready.');

  // Optional: add a subtle animation or interactive behavior
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // if the click is not on a link, do nothing special
      // but we could add a tiny feedback
      if (!e.target.closest('a')) {
        // just a playful console message
        console.log('Project card clicked:', this.querySelector('a')?.textContent?.trim() || '');
      }
    });
  });

  // You can add more behaviors later (e.g., dark mode toggle, etc.)
})();
