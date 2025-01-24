// Responsive Navigation Menu
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
    bar.style.display = 'none';
    close.style.display = 'block';
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
    close.style.display = 'none';
    bar.style.display = 'block';
  });
}

// Dynamic Product Navigation
const products = document.querySelectorAll('.pro');
products.forEach((product) => {
  product.addEventListener('click', () => {
    const productId = product.getAttribute('data-id'); // Ensure products have data-id
    window.location.href = `sproduct.html?id=${productId}`;
  });
});

// Cart Functionality
const cartItems = document.querySelectorAll('tbody tr');
cartItems.forEach((item) => {
  item.querySelector('.fa-times-circle').addEventListener('click', () => {
    item.remove();
    updateCartTotal();
  });

  item.querySelector('input[type="number"]').addEventListener('change', (event) => {
    const quantity = parseInt(event.target.value);
    const price = parseFloat(item.querySelector('td:nth-child(4)').innerText.replace('$', ''));
    item.querySelector('td:nth-child(6)').innerText = `$${(quantity * price).toFixed(2)}`;
    updateCartTotal();
  });
});

function updateCartTotal() {
  let total = 0;
  const updatedItems = document.querySelectorAll('tbody tr');
  updatedItems.forEach((item) => {
    const subtotal = parseFloat(item.querySelector('td:nth-child(6)').innerText.replace('$', ''));
    total += subtotal;
  });
  document.querySelector('#subtotal td:nth-child(2)').innerText = `$${total.toFixed(2)}`;
}

// Form Validation
const emailInput = document.querySelector('input[type="text"][placeholder="Your email address"]');
const submitButton = document.querySelector('button.normal');

if (submitButton) {
  submitButton.addEventListener('click', (event) => {
    if (!validateEmail(emailInput.value)) {
      alert('Please enter a valid email address.');
      event.preventDefault();
    }
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}