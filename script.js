let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(product + ' has been added to your cart!');
}

function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert('Your cart contains: ' + cart.join(', '));
    }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});