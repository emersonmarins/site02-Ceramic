import { createCart, reloadCart } from "./cartCreate.js";


function creatCartLoad() { createCart() }
creatCartLoad();

let btnCartOpen = document.querySelector('.header__cart');
let cartContainer = document.querySelector('.cart');

btnCartOpen.addEventListener('click', () => {
    let cartProduts = document.querySelectorAll('.cart__product');
    let cartPurchase = document.querySelector('.cart__purchase');

    if (cartPurchase == null) {
        reloadCart();
        cartContainer.classList.toggle('hidde');
    } else {

        reloadCart('remove');
        cartContainer.classList.toggle('hidde');
    }
});

