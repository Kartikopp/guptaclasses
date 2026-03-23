// script.js

// Razorpay checkout integration
function initiateRazorpayCheckout(amount, coupon) {
    const options = {
        key: 'YOUR_RAZORPAY_KEY',
        amount: amount,
        currency: 'INR',
        name: 'Your Course Name',
        description: 'Description of your course',
        handler: function(response) {
            handlePaymentSuccess(response);
        },
        prefill: {
            name: '',
            email: '',
            contact: ''
        },
        notes: {
            address: 'Customer Address'
        },
        theme: {
            color: '#F37254'
        }
    };

    const razorpay = new Razorpay(options);
    razorpay.open();
}

// Dynamic course pricing with coupon
function calculatePrice(basePrice, coupon) {
    let discount = 0;
    if (coupon === 'GC10') {
        discount = basePrice * 0.10;
    }
    return basePrice - discount;
}

// Form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
        alert('Please fill all fields!');
        return false;
    }
    return true;
}

// Animated counters
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        let count = 0;
        const target = parseInt(counter.getAttribute('data-target'));
        const updateCount = () => {
            if (count < target) {
                count++;
                counter.innerText = count;
                setTimeout(updateCount, 50);
            }
        };
        updateCount();
    });
}

// Smooth scrolling
const smoothScroll = (target) => {
    const element = document.getElementById(target);
    element.scrollIntoView({ behavior: 'smooth' });
};

// Mobile navigation
function toggleMobileNav() {
    const navbar = document.getElementById('mobile-nav');
    navbar.classList.toggle('active');
}

// WhatsApp integration
function openWhatsApp() {
    const message = 'Hello! I am interested in your course.';
    const phoneNumber = '1234567890'; // Replace with your number
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// Phone call CTA
function makePhoneCall() {
    const phoneNumber = '1234567890'; // Replace with your number
    window.location.href = `tel:${phoneNumber}`;
}

// Post-payment success handler
function handlePaymentSuccess(response) {
    // Handle the successful payment here
document.getElementById('payment-status').innerText = 'Payment Successful!';
}

// Example usage of functions
// Assuming the base price is 1000
const basePrice = 1000;
const coupon = 'GC10';
const finalPrice = calculatePrice(basePrice, coupon);
console.log('Final Price:', finalPrice); 

// To initiate payment
// if (validateForm()) {
//     initiateRazorpayCheckout(finalPrice, coupon);
// }