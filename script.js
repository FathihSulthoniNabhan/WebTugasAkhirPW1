// Smooth scroll for links
document.querySelectorAll('a.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
