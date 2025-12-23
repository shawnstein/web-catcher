document.addEventListener('DOMContentLoaded', () => {
    // Button Interaction
    const btn = document.getElementById('actionBtn');
    if (btn) {
        btn.addEventListener('click', () => {
            console.log('Action triggered');
            // Smooth scroll to text section as an example action
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    // Target all elements with .fade-in class
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});
