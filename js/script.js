// script.js – Jada Rinquest Portfolio

(function() {
    console.log('🎯 Jada Rinquest portfolio ready!');

    // Project card click feedback
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('a')) {
                const title = this.querySelector('a')?.textContent?.trim() || 'Project';
                console.log(`📁 ${title} — clicked`);
            }
        });
    });

    // Optional: smooth hover effect enhancement
    const socialLinks = document.querySelectorAll('.social-icons a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            // small extra feedback
        });
    });

    console.log('✅ Portfolio loaded successfully');
})();
