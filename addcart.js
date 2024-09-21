const addToCartBtn = document.querySelector('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const totalElement = document.getElementById('total');

let cartItems = [];
let total = 0;

addToCartBtn.addEventListener('click', () => {
    const product = {
        name: 'Half ruuning set',
        price: 150
    };
addToCartBtn
    cartItems.push(product);
    total += product.price;

    updateCart();
});
 
function updateCart() {
    cartItemsList.innerHTML = '';

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}