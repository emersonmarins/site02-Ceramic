" use strict "
import dataBase from '../db_product.js';

const divCart = document.querySelector('.cart__purchase');
const body = document.querySelector('body');

let dataBaseLS = JSON.parse(localStorage.getItem('user'));

// console.log(dataBaseLS);

function cartContainer(message = null, display = null) {
    // Header cart
    const cart = document.createElement('div');
    const titleWrapper = document.createElement('div');
    const cartTitle = document.createElement('span');
    const spanIcon = document.createElement('span');
    const iconCloseMenu = document.createElement('i');
    const emptyCart = document.createElement('p');

    // ADD PROPERTIES Header
    cart.classList.add('cart',display);
    titleWrapper.classList.add('cart__title');
    cartTitle.innerText = 'MEU CARRINHO';
    iconCloseMenu.classList.add('bi', 'bi-x-circle-fill', 'close-menu-cart');
    emptyCart.classList.add('cart__emptyCart');
    emptyCart.innerText = message;


    // APPEND CHILD HEADER CART
    body.appendChild(cart)
    cart.appendChild(titleWrapper);
    titleWrapper.appendChild(cartTitle);
    titleWrapper.appendChild(spanIcon);
    spanIcon.appendChild(iconCloseMenu);
    cart.appendChild(emptyCart);

}

function AddProductCart(id, priceValue, imgUrl, quantityItems, title) {
    const cart = document.querySelector('.cart');


    // Main products 
    const divWrapper = document.createElement('div');
    const productImg = document.createElement('img');

    const info = document.createElement('div');
    const InfoTitle = document.createElement('p');


    const btnWrapper = document.createElement('div');
    const minus = document.createElement('span');
    const value = document.createElement('input');
    const plus = document.createElement('span');

    const priceWrapper = document.createElement('div');
    const icon = document.createElement('i');
    const price = document.createElement('p');

    // ADD Properties

    // Main
    divWrapper.classList.add('cart__product');

    // IMAGE
    productImg.classList.add('cart__img');
    productImg.setAttribute('src', imgUrl);
    productImg.setAttribute('alt', 'imagem do produto');

    info.classList.add('cart__product__info-wrapper');
    InfoTitle.innerText = title;

    btnWrapper.classList.add('cart__product__quantity');
    minus.classList.add('cart__product__minus');
    minus.innerText = '-';
    value.classList.add('cart__product__value');
    value.setAttribute('value', quantityItems);
    value.setAttribute('type', 'text');
    value.setAttribute('id', id);
    plus.classList.add('cart__product__plus');
    plus.innerText = '+';


    priceWrapper.classList.add('cart__product__price');
    icon.classList.add('bi', 'bi-trash-fill');
    price.innerText ='R$ '+ priceValue;



    // APPEND CHILD MAIN PRODUCTS
    // divCart.insertAdjacentElement("beforebegin", divWrapper);
    cart.appendChild(divWrapper);
    divWrapper.appendChild(productImg);
    divWrapper.appendChild(info);
    info.appendChild(InfoTitle);
    info.appendChild(btnWrapper);
    btnWrapper.appendChild(minus);
    btnWrapper.appendChild(value);
    btnWrapper.appendChild(plus);
    divWrapper.appendChild(priceWrapper);
    priceWrapper.appendChild(icon);
    priceWrapper.appendChild(price);


}

function cartFooter() {
    const cart = document.querySelector('.cart');

    // Footer cart
    const purchase = document.createElement('div');
    const subtotalDiv = document.createElement('div');
    const subtotalTitle = document.createElement('span');
    const subtotalPrice = document.createElement('p');
    const purchaseBtnWrapper = document.createElement('a');
    const purchaseIcon = document.createElement('i');
    const purchaseBtn = document.createElement('span');

    // Footer

    purchase.classList.add('cart__purchase');
    subtotalDiv.classList.add('cart__purchase__subtotal');
    subtotalTitle.innerText = 'SUBTOTAL';
    // subtotalPrice.innerText = priceValue;
    purchaseBtnWrapper.classList.add('cart__purchase__btn-wrapper');
    purchaseBtnWrapper.setAttribute('href', 'http://127.0.0.1:5501/site02-Ceramic/cart-page.html');
    purchaseIcon.classList.add('bi', 'bi-cart3', 'cart__purchase__btn');
    purchaseBtn.classList.add('cart__purchase__text');
    purchaseBtn.innerText = 'FINALIZAR COMPRA';

    // APPEND CHILD FOOTER CART
    cart.appendChild(purchase);
    purchase.appendChild(subtotalDiv);
    subtotalDiv.appendChild(subtotalTitle);
    subtotalDiv.appendChild(subtotalPrice);
    purchase.appendChild(purchaseBtnWrapper);
    purchaseBtnWrapper.appendChild(purchaseIcon);
    purchaseBtnWrapper.appendChild(purchaseBtn);
    

    // Call ADD eventListenner
    checkout();


}

function subTotal() {
    let subTotalValue = document.querySelector('.cart__purchase__subtotal > p')
    let total = 0;
    // console.log(subTotalValue);
    dataBaseLS.forEach((element) => {
        total += (element.price * element.quantityItems);
    });
    subTotalValue.innerText = 'R$ '+total.toFixed(2);
    total = 0;
}

export function createCart() {
    const message = 'SEU CARRINHO ESTÁ VAZIO :(';
    const display = 'hidde';
    
    if (dataBaseLS == null) {
    
        cartContainer(message,display);

    } else {
    
        cartContainer(message,display);
        dataBaseLS.forEach((element) => {
            AddProductCart(element.id, element.price, element.url, element.stock, element.title)
    
        });
        cartFooter();
    }
    
    // FUNCTIONS
    
    const btnClose = document.querySelector('.close-menu-cart');
    const cart = document.querySelector('.cart');
    
    btnClose.addEventListener('click', () => { cart.classList.toggle('hidde');})
}

export function reloadCart(options = null) {
    let cartProduts = document.querySelectorAll('.cart__product');
    let cartPurchase = document.querySelector('.cart__purchase');
    let cartEmpty = document.querySelector('.cart__emptyCart');
    if (options == 'remove') {
        cartPurchase.remove()
        cartProduts.forEach(cart => {
            cart.remove();
        })
    }


    dataBaseLS = JSON.parse(localStorage.getItem('user'));

    if (dataBaseLS == null) {
        return
    } else {
        
        dataBaseLS.forEach((element) => {
            AddProductCart(element.id, element.price, element.url, element.quantityItems, element.title)
    
        });
        cartFooter();
        subTotal();

        // Functions 
        const btnPlus = document.querySelectorAll(".cart__product__plus");
        const btnMinus = document.querySelectorAll(".cart__product__minus");
        const trash = document.querySelectorAll('.bi-trash-fill')


        // console.log(trash)
        btnPlus.forEach((element) => {
            element.addEventListener('click', (el) => {
                let num = element.previousSibling.getAttribute("value");
                let idNum = element.previousSibling.getAttribute("id");
                element.previousSibling.setAttribute("value", ++num);
                dataBaseLS.forEach((element) => {
                    if (element.id == idNum) {
                        element.quantityItems++;
                        localStorage.setItem('user', JSON.stringify(dataBaseLS));
                        subTotal();
                            // console.log(element.quantityItems)
                    }
                })
             }); 
            
        })

        btnMinus.forEach((element) => {
            element.addEventListener('click', (el) => {

                // console.log(element.nextSibling);
                let num = element.nextSibling.getAttribute("value");
                let idNum = element.nextSibling.getAttribute("id");
                element.nextSibling.setAttribute("value", --num);
                dataBaseLS.forEach((element) => {
                    if (element.id == idNum) {
                        element.quantityItems--;
                        localStorage.setItem('user', JSON.stringify(dataBaseLS));
                        subTotal();
                            // console.log(element.quantityItems)
                    }
                })
             }); 
            
        })

        trash.forEach((element) => {
            element.addEventListener('click', () => {
                let value =  element.parentNode.previousSibling.childNodes[1].childNodes[1].getAttribute('id');
                dataBaseLS.forEach((element, index) => {
                    if (element.id == value) {
                        // console.log(dataBaseLS);
                        
                        dataBaseLS.splice(index, 1);
                        localStorage.setItem('user', JSON.stringify(dataBaseLS));
                        reloadCart('remove');  
                        
                        // Delete subtotal and price if the empty cart
                        if (dataBaseLS.length === 0) {
                            cartPurchase = document.querySelector('.cart__purchase');

                            // console.log(cartPurchase);
                            cartPurchase.remove();
                            cartEmpty.classList.toggle('hidde');
                            localStorage.removeItem('user');
                        }
                        return


                    }
                });
                return
            })
        })
    }

}

function checkout() {
    const btnCheckout = document.querySelector('.cart__purchase__btn-wrapper');

    btnCheckout.addEventListener('click', () => {
        // console.log('opa entrou no checkout')
    })
}

