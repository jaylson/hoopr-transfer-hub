
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    
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
    
    // Testimonials Slider
    const testimonialsSlider = document.getElementById('testimonials-slider');
    const testimonialsDots = document.querySelectorAll('#testimonials-dots button');
    let currentSlide = 0;
    
    if (testimonialsSlider && testimonialsDots.length > 0) {
        // Auto-play testimonials
        setInterval(function() {
            currentSlide = (currentSlide + 1) % testimonialsDots.length;
            updateTestimonialSlider();
        }, 5000);
        
        // Dot navigation
        testimonialsDots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                currentSlide = index;
                updateTestimonialSlider();
            });
        });
        
        function updateTestimonialSlider() {
            const translateX = -currentSlide * 100;
            testimonialsSlider.style.transform = `translateX(${translateX}%)`;
            
            // Update dots
            testimonialsDots.forEach(function(dot, index) {
                if (index === currentSlide) {
                    dot.classList.remove('bg-gray-700');
                    dot.classList.add('bg-gradient-hoopr');
                } else {
                    dot.classList.add('bg-gray-700');
                    dot.classList.remove('bg-gradient-hoopr');
                }
            });
        }
        
        // Initialize first slide
        updateTestimonialSlider();
    }
    
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
