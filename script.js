// Sample product data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image: "https://via.placeholder.com/300",
        description: "High-quality wireless headphones with noise cancellation."
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        image: "https://via.placeholder.com/300",
        description: "Track your fitness and stay connected."
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 59.99,
        image: "https://via.placeholder.com/300",
        description: "Portable speaker with great sound quality."
    },
    {
        id: 4,
        name: "Laptop Backpack",
        price: 49.99,
        image: "https://via.placeholder.com/300",
        description: "Durable backpack with USB charging port."
    }
];

let cart = [];

// Display products
function displayProducts() {
    const productsSection = document.querySelector('.products');
    productsSection.innerHTML = '';
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productElement);
    });
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

// Update cart count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Initialize the page
displayProducts();