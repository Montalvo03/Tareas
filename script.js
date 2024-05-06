// Home page script
const addToCartButtons = document.querySelectorAll('.home-product-info button');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Add to cart logic here
    });
});

// Contact form script
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validate form fields here

    // Send form data to server here
});

// PayPal payment script
function payWithPayPal() {
    // PayPal payment logic here
}
