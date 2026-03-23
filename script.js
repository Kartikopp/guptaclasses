// script.js

// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Smooth Scrolling
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
};

// Animated Counters
const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Form Validation
const validateForm = (form) => {
    form.addEventListener('submit', (e) => {
        const inputs = form.querySelectorAll('input');
        let valid = true;
        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        if (!valid) e.preventDefault();
    });
};

// WhatsApp Integration
const sendWhatsAppMessage = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`);
};

// Lead Capture Popup
const leadCapturePopup = () => {
    const popup = document.getElementById('lead-popup');
    popup.style.display = 'block';
};

// Sticky Buttons
const stickyButtons = () => {
    const button = document.getElementById('sticky-button');
    window.onscroll = () => {
        if (window.scrollY > 100) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    };
};

// Scroll Animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    elements.forEach(element => {
        observer.observe(element);
    });
};

// Testimonial Carousel
const testimonialCarousel = () => {
    const testimonials = document.querySelectorAll('.testimonial');
    let index = 0;
    setInterval(() => {
        testimonials[index].classList.remove('active');
        index = (index + 1) % testimonials.length;
        testimonials[index].classList.add('active');
    }, 5000);
};

// Conversion Tracking
const trackConversion = (id) => {
    // Tracking code logic here
    console.log(`Tracking conversion for: ${id}`);
};

// Initialize Features
document.addEventListener('DOMContentLoaded', () => {
    animateCounters();
    stickyButtons();
    testimonialCarousel();
    animateOnScroll();
});