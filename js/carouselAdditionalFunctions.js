import dataBase from '../db_product.js';
// Select elements

let callFunctionId = true;
let objectProduct = []

// Set product information in localStorage
async function dbGet(id) {
    let objectProduct = await JSON.parse(localStorage.getItem("user"))
    if (objectProduct == null) {
        objectProduct = []
    }

    dataBase.products.forEach((element) => {
        if (element.id === id) {



            // ADD PRODUCT IN LOCALSTORAGE
            function add() {
                let userid = {
                    url: element.url,
                    sku: element.sku,
                    id: element.id,
                    title: element.title,
                    description: element.description,
                    price: element.price,
                    category: element.category,
                    stock: element.stock,
                    quantityItems: 1
                }
                Object.defineProperty(objectProduct, `${objectProduct.length++}`, {
                    value: userid,
                })

                localStorage.setItem(`user`, JSON.stringify(objectProduct));
                objectProduct = [];
            }

            // Verifica se não tem produtos no array
            if (objectProduct.length == 0) {
                add()
            } else {

                // Verifica se o produto já tem no array
                let productRepeat = false;
                objectProduct.forEach((el) => {
                    if (el.id == id) {

                        productRepeat = true
                    }
                })

                if (!productRepeat) {
                    add()
                    return
                }

            }
            return

        }
    });

}

// Clear Empty Cart Message
function clearEmptyCart() {
    const message = document.querySelector('.cart__emptyCart');
    message.classList.add('hidde');
}

// Get the product ID
function shoppingCarts(event) {
    event.preventDefault();
    if (callFunctionId) {
        clearEmptyCart()
        const id = Number(event.target.getAttribute('id'));
        dbGet(id);
        callFunctionId = false;
        let time = setTimeout(() => { callFunctionId = true }, 200);

    }
};

// Events Listenners
export function setListeners() {
    const cart = document.querySelectorAll('.bi-cart3');

    cart.forEach((element) => {
        element.addEventListener('click', (event) => shoppingCarts(event))

    });
};

setListeners();