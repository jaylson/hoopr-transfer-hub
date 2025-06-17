
// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
        });
    }

    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    }

    // Testimonials slider
    const slider = document.getElementById('testimonials-slider');
    const dots = document.querySelectorAll('#testimonials-dots button');
    let currentSlide = 0;

    if (slider && dots.length > 0) {
        // Initialize first dot as active
        dots[0].classList.add('bg-blue-500');
        dots[0].classList.remove('bg-gray-700');

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                slider.style.transform = `translateX(-${currentSlide * 100}%)`;
                
                // Update dots
                dots.forEach(d => {
                    d.classList.remove('bg-blue-500');
                    d.classList.add('bg-gray-700');
                });
                dot.classList.add('bg-blue-500');
                dot.classList.remove('bg-gray-700');
            });
        });

        // Auto-slide every 5 seconds
        setInterval(() => {
            currentSlide = (currentSlide + 1) % dots.length;
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            dots.forEach(d => {
                d.classList.remove('bg-blue-500');
                d.classList.add('bg-gray-700');
            });
            dots[currentSlide].classList.add('bg-blue-500');
            dots[currentSlide].classList.remove('bg-gray-700');
        }, 5000);
    }

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
