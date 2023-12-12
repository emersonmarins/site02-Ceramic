class RenderCartProducts {
    constructor(containerCart) {
        this.body = document.querySelector(containerCart);
        this.display = 'hidde'; // Mudar para hidden
        this.message = 'SEU CARRINHO ESTÁ VAZIO :(';

        this.dataBaseLS;
        this.cartProducts;
        this.cartPurchase;
    };

    renderProducts(id, priceValue, imgUrl, quantityItems, title, dataBaseLS) {

        const cart = document.querySelector('.cart');

        // Main products 
        const divWrapper = document.createElement('div');
        const divWrapperImg = document.createElement('div');
        const divWrapperProduct = document.createElement('div');

        const productImg = document.createElement('img');

        const divWrapperProductInfo = document.createElement('div');
        const InfoTitle = document.createElement('p');


        const btnWrapper = document.createElement('div');
        const minus = document.createElement('i');
        const value = document.createElement('input');
        const plus = document.createElement('i');

        const priceWrapper = document.createElement('div');
        const icon = document.createElement('i');
        const price = document.createElement('p');

        // ADD Properties

        // Main
        divWrapper.classList.add('cart__product');
        divWrapperImg.classList.add('cart__product__img');
        divWrapperProduct.classList.add('cart__product__wrapper');

        // IMAGE
        productImg.classList.add('cart__img');
        productImg.src = imgUrl;
        productImg.setAttribute('alt', 'imagem do produto');

        divWrapperProductInfo.classList.add('cart__product__info-wrapper');
        InfoTitle.innerText = title;

        btnWrapper.classList.add('cart__product__quantity');
        minus.classList.add('cart__product__minus','fa-solid','fa-circle-minus');
        value.classList.add('cart__product__value');
        value.setAttribute('value', quantityItems);
        value.setAttribute('type', 'text');
        value.setAttribute('id', id);
        plus.classList.add('cart__product__plus','fa-solid','fa-circle-plus');


        priceWrapper.classList.add('cart__product__price');
        icon.classList.add('bi', 'bi-trash-fill');
        price.innerText = 'R$ ' + priceValue;



        // APPEND CHILD MAIN PRODUCTS
        // divCart.insertAdjacentElement("beforebegin", divWrapper);
        cart.appendChild(divWrapper);
        divWrapper.appendChild(divWrapperImg);
        divWrapper.appendChild(divWrapperProductInfo);
        divWrapperImg.appendChild(productImg);
        divWrapperProductInfo.appendChild(InfoTitle);
        divWrapperProductInfo.appendChild(btnWrapper);
        btnWrapper.appendChild(minus);
        btnWrapper.appendChild(value);
        btnWrapper.appendChild(plus);
        divWrapperProductInfo.appendChild(priceWrapper);
        priceWrapper.appendChild(icon);
        priceWrapper.appendChild(price);
    };
    renderCartContainer(dataBaseLS, divWrapper) {

        // Header cart
        const cart = document.createElement('div');
        const titleWrapper = document.createElement('div');
        const cartTitle = document.createElement('span');
        const spanIcon = document.createElement('span');
        const iconCloseMenu = document.createElement('i');
        const emptyCart = document.createElement('p');

        // ADD PROPERTIES Header
        cart.classList.add('cart', this.display);
        titleWrapper.classList.add('cart__title');
        cartTitle.innerText = 'MEU CARRINHO';
        iconCloseMenu.classList.add('bi', 'bi-x-circle-fill', 'close-menu-cart');
        emptyCart.classList.add('cart__emptyCart');
        dataBaseLS.length > 0 ? (emptyCart.classList.add('hidde')) : (emptyCart.innerText = this.message);
        emptyCart.innerText = this.message;


        // APPEND CHILD HEADER CART
        this.body.appendChild(cart)
        cart.appendChild(titleWrapper);
        titleWrapper.appendChild(cartTitle);
        titleWrapper.appendChild(spanIcon);
        spanIcon.appendChild(iconCloseMenu);
        cart.appendChild(emptyCart);
    };
    renderCartFooter() {
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
        purchaseBtnWrapper.setAttribute('href', './src/pages/shopping-cart/html/cart-page.html');
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
        // checkout();


    };
    renderSubTotal(dataBaseLS = this.dataBaseLS) {
        let subTotalValue = document.querySelector('.cart__purchase__subtotal > p')
        let total = 0;
        dataBaseLS.forEach((element) => {
            total += Number(element.price * element.quantityItems);
        });
        if (total < 0) {
            return
        } else{
            subTotalValue.innerText = 'R$ ' + total.toFixed(2);
            total = 0;
        }
    };//OK
    updateElements() {
        this.cartProducts = document.querySelectorAll('.cart__product');
        this.cartPurchase = document.querySelector('.cart__purchase');
    };
    reloadCart(options = null, dataBaseLS = this.dataBaseLS) {

        /**
         * 1 - atualizar os elementos para saber se existe produtos no carrinho
         *     e o campo do cart purchase, que só é renderizado quando o carrinho
         *     é aberto e há produto, caso esvazie o carrinho o mesmo sera deletado
         * 2 - atribuir o valor passado por argumento do banco de dados 
         *     temporario salvo no Local Storage
         * 3 - selecionar o cartEmpty que guarda a mensagem "SEU CARRINHO ESTÁ VAZIO"
         * 4 - verificar se o options é uma string 'remove', caso seja remover o carrinho 
         *     e os produtos, isso é necessário pois nessa lógica presumi-se que os produtos que
         *     estão no localStorage pode não ser o mesmos que foram criados no carrinho, ou até mesmo
         *     não ter nenhum produto, assim se garente a atualização real do carrinho!!!
         * 5 - dentro da condicional que testa o options, verifica a existencia do this.cartPurchase
         *     logica explicada no passo 1
         * 
         */
        this.updateElements();
        this.dataBaseLS = dataBaseLS;
        let cartEmpty = document.querySelector('.cart__emptyCart');
        if (options === 'remove') {
            this.cartPurchase && this.cartPurchase.remove()
            this.cartProducts.forEach(cart => {
                cart.remove();
            })
        }

        if (this.dataBaseLS === null) {
            return
        } else {

            this.dataBaseLS.forEach((element) => {
                this.renderProducts(element.id, element.price, element.url, element.quantityItems, element.title)

            });
            this.renderCartFooter();
            this.renderSubTotal(this.dataBaseLS);

        };

    };
    deleteProduct(element){
        let value =  parseInt(element.parentNode.parentNode.children[1].children[1].getAttribute('id'));
        
        this.dataBaseLS.forEach((el, index) => {
            if (el.id === value) {

                this.dataBaseLS.splice(index, 1);
                localStorage.setItem('user', JSON.stringify(this.dataBaseLS));
                this.reloadCart('remove');
                // this.renderCartProducts.reloadCart('remove', this.dataBaseProductsLocalStorage.dataBase); // Verifica o que é necessário!!!
                
                // Delete subtotal and price if the empty cart
                if (this.dataBaseLS.length === 0) {
                    this.cartPurchase = document.querySelector('.cart__purchase');
                    let cartEmpty = document.querySelector('.cart__emptyCart');
                    
                    this.cartPurchase.remove();
                    cartEmpty.classList.toggle('hidde');
                    localStorage.removeItem('user');
                }
                return


            }
        });
        return
    };
    addProductUnit(el){
        let num = el.previousSibling.getAttribute("value");
        let idNum = el.previousSibling.getAttribute("id");
        el.previousSibling.setAttribute("value", ++num);
        this.dataBaseLS.forEach((element) => {
            if (element.id == idNum) {
                element.quantityItems++;
                localStorage.setItem('user', JSON.stringify(this.dataBaseLS));
                this.renderSubTotal();
                    
            };
        });
    };
    removeProductUnit(el){
        let num = el.nextSibling.getAttribute("value");
        let idNum = el.nextSibling.getAttribute("id");
        el.nextSibling.setAttribute("value", --num);
        this.dataBaseLS.forEach((element) => {
            if (element.id == idNum) {
                element.quantityItems--;
                localStorage.setItem('user', JSON.stringify(this.dataBaseLS));
                this.renderSubTotal();
                    
            }
        })
    };

};
export { RenderCartProducts };