const cartButton = document.getElementById('cart-button');
const cartOptions = document.getElementById('cart-options');

cartButton.addEventListener('click', (e) => {
  e.stopPropagation();
  cartOptions.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!cartOptions.contains(e.target) && !cartButton.contains(e.target)) {
    cartOptions.classList.remove('show');
  }
});

document.getElementById('clear-cart').addEventListener('click', () => {
  alert('Cart cleared!');
  // Add cart-clearing logic here
});

document.getElementById('process-order').addEventListener('click', () => {
  alert('Processing order...');
  // Add order-processing logic here
});