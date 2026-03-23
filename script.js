// Complete Razorpay Payment Integration
function initializePayment() {
    var options = {
        "key": "YOUR_RAZORPAY_KEY",
        // Order ID generated from the backend
        "order_id": "YOUR_ORDER_ID",
        "handler": function(response) {
            alert('Payment Successful!');
        },
        "prefill": {
            "name": "Customer Name",
            "email": "customer@example.com",
            "contact": "9999999999"
        },
        // Additional options can be configured here
    };
    var rzp = new Razorpay(options);
    rzp.open();
}

// Animated Counters
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            const increment = target / 200;
            if (c < target) {
                counter.innerText = Math.ceil(c + increment);
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}

// Form Validation
function validateForm() {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        let valid = true;
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
                input.classList.add('error');
            }
        });
        if (!valid) {
            event.preventDefault();
            alert('Please fill in all required fields.');
        }
    });
}

// WhatsApp and Call CTAs
function addCTAs() {
    const whatsappCTA = document.createElement('a');
    whatsappCTA.href = 'https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER';
    whatsappCTA.innerText = 'Chat on WhatsApp';
    document.body.appendChild(whatsappCTA);

    const callCTA = document.createElement('a');
    callCTA.href = 'tel:+YOUR_PHONE_NUMBER';
    callCTA.innerText = 'Call Us';
    document.body.appendChild(callCTA);
}

// Coupon System with GC10 for 10% Discount
function applyCoupon() {
    const couponInput = document.getElementById('couponCode');
    const discount = couponInput.value === 'GC10' ? 0.10 : 0;
    if (discount > 0) {
        alert('Coupon applied! You get 10% off!');
        // Apply discount logic here
    } else {
        alert('Invalid coupon code!');
    }
}

// Smooth Scrolling
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Mobile Optimization
function optimizeForMobile() {
    if (window.innerWidth < 768) {
        // Update styles or functionality for mobile
    }
}

// Initialize functions on document load
document.addEventListener('DOMContentLoaded', () => {
    initializePayment();
    animateCounters();
    validateForm();
    addCTAs();
    smoothScroll();
    optimizeForMobile();
});