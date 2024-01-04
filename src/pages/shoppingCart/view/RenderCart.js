class RenderCart {
  constructor() {
    this.tbody;
    this._dataBaseLS;
  };
  get dataBaseLS() {
    return this._dataBaseLS;
  };
  set dataBaseLS(dataBaseLS) {
    this._dataBaseLS = dataBaseLS;
  };
  initRender(className = 'body') {
    this.renderCart(className);
    this.renderCartProduct();
  }
  renderCart(className) {
    /**
     * 1 - Renderizar a página de produto - sem a adição do header e footer 
     *     e dos produtos do carrinho que se encontram no localStorage
     * 2 - Chamar o método que fará a renderização dos produtos, caso não tenha nenhum
     *     uma mensagem de carrinho vaizinho irá aparecer
     */

    const divContainer = document.querySelector(className);
    const divContainerWrapper = document.createElement('div');
    divContainerWrapper.classList.add('cart-wrapper', 'js-cart-wrapper')
    /*        
                    +-------+
                    | TITLE |    
                 ===============   
    */
    const divTitle = document.createElement('h1');
    divTitle.classList.add('cart-wrapper__title', 'js-cart-wrapper__title');
    divTitle.innerText = 'Carrinho de compras';

    /*        
                    +--------+
                    |  Cart  |    
                 ================   
    */
    /*                 thead                       */
    const tableCart = document.createElement('table');
    tableCart.classList.add('cart-wrapper__table', 'js-cart');
    const thead = document.createElement('thead');
    const tableTr = document.createElement('tr');
    const thProduct = document.createElement('th');
    thProduct.innerText = 'Produto';
    const thDelivery = document.createElement('th');
    thDelivery.innerText = 'Entrega';
    const thPrice = document.createElement('th');
    thPrice.innerText = 'Preço';
    const thQuantity = document.createElement('th');
    thQuantity.innerText = 'Quantidade';
    const thTotal = document.createElement('th');
    thTotal.innerText = 'Total';

    /*                 tbody                       */
    const tbody = document.createElement('tbody');

    /*        
                    +--------+
                    | SUMARY |    
                 ================   
    */
    const divSumary = document.createElement('div');
    divSumary.classList.add('cart-wrapper__summary', 'js-cart-wrapper__summary');
    /*                 Frete                       */
    const divWrapperFrete = document.createElement('div');
    divWrapperFrete.classList.add('cart-wrapper__frete', 'js-cart-wrapper__frete');
    const h3Frete = document.createElement('h3');
    h3Frete.classList.add('cart-wrapper__frete__title', 'js-cart-wrapper__frete__title');
    h3Frete.innerText = 'Entrega';
    const pFrete = document.createElement('p');
    pFrete.innerText = 'Veja as opções de entrega para seus itens, com todos os prazos e valores';
    pFrete.classList.add('cart-wrapper__frete__description', 'js-cart-wrapper__frete__description');
    const btnCalcFrete = document.createElement('button');
    btnCalcFrete.classList.add('btn__frete', 'js-btn__frete', 'btn');
    btnCalcFrete.setAttribute('type', 'submit');
    btnCalcFrete.innerText = 'CALCULAR';

    /*                 Total                       */
    const divWrapperTotal = document.createElement('div');
    divWrapperTotal.classList.add('cart-wrapper__total', 'js-cart-wrapper__total');
    const labelDiscount = document.createElement('label');
    labelDiscount.innerText = 'Cupom de desconto';
    labelDiscount.setAttribute('for', 'codigo');
    btnCalcFrete.setAttribute('for', 'codigo');
    const divWrapperDiscount = document.createElement('div');
    const inputDiscount = document.createElement('input');
    inputDiscount.classList.add('cart-wrapper__total__input', 'js-cart-wrapper__total__input');
    inputDiscount.type = 'text';
    inputDiscount.id = 'codigo';
    inputDiscount.name = `name_codigo`;
    inputDiscount.placeholder = 'Código';
    const buttonDiscount = document.createElement('button');
    buttonDiscount.classList.add('cart-wrapper__total__button', 'js-cart-wrapper__total__button', 'btn');
    buttonDiscount.setAttribute('type', 'submit');
    buttonDiscount.innerText = 'ADICIONAR';
    /*           TableSubtotal, e total               */
    const tableSubtotal = document.createElement('table');
    const trSubtotal = document.createElement('tr');
    const tdSubtotalTitle = document.createElement('td');
    const pSubtotalTitle = document.createElement('p');
    pSubtotalTitle.classList.add('cart-wrapper__total__sub-text', 'js-cart-wrapper__total__sub-text');
    pSubtotalTitle.innerText = 'Subtotal';
    const tdSubtotalPrice = document.createElement('td');
    const pSubtotalPrice = document.createElement('p');
    pSubtotalPrice.innerText = 'R$ 68,00'; // Implementar DB
    pSubtotalPrice.classList.add('cart-wrapper__total__sub-price', 'js-cart-wrapper__total__sub-price');

    /*              table subtotal                   */
    const trtotal = document.createElement('tr');
    const tdtotalTitle = document.createElement('td');
    const ptotalTitle = document.createElement('p');
    ptotalTitle.innerText = 'Total';
    ptotalTitle.classList.add('cart-wrapper__total__text', 'js-cart-wrapper__total__text');

    const tdtotalPrice = document.createElement('td');
    const ptotalPrice = document.createElement('p');
    ptotalPrice.innerText = 'R$ 68,00'; // Implementar DB
    ptotalPrice.classList.add('cart-wrapper__total__price', 'js-cart-wrapper__total__price');




    /*        
                    +-------+
                    | LINKS |    
                 ===============   
    */
    const divWrapperLinks = document.createElement('div');
    divWrapperLinks.classList.add('cart-wrapper__links', 'js-cart-wrapper__links');
    const aChooseProduct = document.createElement('a');
    aChooseProduct.classList.add('btn-product', 'js-btn-product', 'btn');
    aChooseProduct.innerText = 'Escolher mais produtos';
    const aFinalizeOrder = document.createElement('a');
    aFinalizeOrder.classList.add('btn-finalize-order', 'js-btn-finalize-order', 'btn');
    aFinalizeOrder.innerText = 'Finalizar Pedido';


    // APPENDCHILD
    divContainer.appendChild(divContainerWrapper);

    divContainerWrapper.appendChild(divTitle);

    divContainerWrapper.appendChild(tableCart);
    tableCart.appendChild(thead);
    thead.appendChild(tableTr);
    tableTr.appendChild(thProduct);
    tableTr.appendChild(thDelivery);
    tableTr.appendChild(thPrice);
    tableTr.appendChild(thQuantity);
    tableTr.appendChild(thTotal);

    tableCart.appendChild(tbody);

    divContainerWrapper.appendChild(divSumary);
    divSumary.appendChild(divWrapperFrete);
    divWrapperFrete.appendChild(h3Frete);
    divWrapperFrete.appendChild(pFrete);
    divWrapperFrete.appendChild(btnCalcFrete);

    divSumary.appendChild(divWrapperTotal);

    divWrapperTotal.appendChild(labelDiscount);

    divWrapperTotal.appendChild(divWrapperDiscount);
    divWrapperDiscount.appendChild(inputDiscount);
    divWrapperDiscount.appendChild(buttonDiscount);

    divWrapperTotal.appendChild(tableSubtotal);

    tableSubtotal.appendChild(trSubtotal);
    trSubtotal.appendChild(tdSubtotalTitle);
    tdSubtotalTitle.appendChild(pSubtotalTitle);
    trSubtotal.appendChild(tdSubtotalPrice);
    tdSubtotalPrice.appendChild(pSubtotalPrice);

    tableSubtotal.appendChild(trtotal);
    trtotal.appendChild(tdtotalTitle);
    tdtotalTitle.appendChild(ptotalTitle);
    trtotal.appendChild(tdtotalPrice);
    tdtotalPrice.appendChild(ptotalPrice);

    divContainerWrapper.appendChild(divWrapperLinks);
    divWrapperLinks.appendChild(aChooseProduct);
    divWrapperLinks.appendChild(aFinalizeOrder);

    this.tbody = tbody;

  };
  renderCartProduct() {
    /**
     * 1 - Renderizar os produtos que estão no carrinho.
     * 2 - Chamar a função que calcula o preço total dos produtos 
     *     e renderiza-o no elemento HTML reponsável pelo mesmo.
     */
    this.dataBaseLS && this._dataBaseLS.forEach(element => {


      /*                 product                       */
      const tr = document.createElement('tr');
      const tdInfoProduct = document.createElement('td');
      tdInfoProduct.classList.add('cart__info', 'js-cart__info');
      const img = document.createElement('img');

      
      img.setAttribute('src', element.url.replace(/.*assets/i, '../../../assets')); // Implementar DB
      const div = document.createElement('div');
      const h5 = document.createElement('h5');
      h5.innerText = element.title; // Implementar DB
      const p = document.createElement('p');
      p.innerText = element.description !== null ? /(.){0,50}/i.exec(element.description)[0]+'...' : ''; // Implementar DB
      // tag [td] => Delivery and Price
      const tdDelivery = document.createElement('td');
      const pDelivery = document.createElement('p');
      pDelivery.innerText = 'a calcular';
      const tdPrice = document.createElement('td');
      const pPrice = document.createElement('p');
      pPrice.innerHTML = `R$ ${element.price}`; // Implementar DB
      // buttons to change quantity of products
      const tdWrapper = document.createElement('td');
      const divWrapper = document.createElement('div');
      divWrapper.classList.add('cart__product__quantity', 'js-cart__product__quantity');
      const btnMinus = document.createElement('span');
      btnMinus.classList.add('fa-solid', 'fa-circle-minus', 'cart__product__quantity__minus', 'js-cart__product__quantity__minus');
      const inputQuantity = document.createElement('input');
      inputQuantity.classList.add('cart__product__quantity__value', 'js-cart__product__quantity__value');
      inputQuantity.setAttribute('type', 'text');
      inputQuantity.setAttribute('value', `${element.quantityItems}`);
      inputQuantity.id = element.id;
      inputQuantity.name = `name_value_${element.id}`;
      const btnPlus = document.createElement('span');
      btnPlus.classList.add('fa-solid', 'fa-circle-plus', 'cart__product__quantity__plus', 'js-cart__product__quantity__plus');
      // total Price
      const tdTotalPrice = document.createElement('td');
      tdTotalPrice.classList.add('total-price-product', 'js-total-price-product');
      const pTotalPrice = document.createElement('p');
      pTotalPrice.classList.add('total-price-product__p', 'js-total-price-product__p');
      pTotalPrice.innerText = `R$ ${(element.price * element.quantityItems)}`;  // Implementar DB
      const btnDel = document.createElement('i')
      btnDel.classList.add('total-price-product__del', 'js-total-price-product__del');
      btnDel.classList.add('fa-solid', 'fa-trash');


      // APPENDCHILD
      this.tbody.appendChild(tr);
      tr.appendChild(tdInfoProduct);
      tdInfoProduct.appendChild(img);
      tdInfoProduct.appendChild(div);
      div.appendChild(h5);
      div.appendChild(p);

      tr.appendChild(tdDelivery);
      tdDelivery.appendChild(pDelivery);

      tr.appendChild(tdPrice);
      tdPrice.appendChild(pPrice);

      tr.appendChild(tdWrapper);
      tdWrapper.appendChild(divWrapper);
      divWrapper.appendChild(btnMinus);
      divWrapper.appendChild(inputQuantity);
      divWrapper.appendChild(btnPlus);

      tr.appendChild(tdTotalPrice);
      tdTotalPrice.appendChild(pTotalPrice);
      tdTotalPrice.appendChild(btnDel);

    });
    this.renderSubTotal(null, null, null, true);
    return

  };
  deleteProduct(element) {
    let currentElementDelete = element.parentNode.parentNode;
    let id = Number(currentElementDelete.querySelector('.js-cart__product__quantity__value').id);
   
    this._dataBaseLS.forEach((el, index) => {
      if (el.id === id) {
        this._dataBaseLS.splice(index, 1);
        localStorage.setItem('user', JSON.stringify(this._dataBaseLS));
        return
      };
      return
    });
    currentElementDelete.remove();
    this.renderSubTotal(null, null, null, true);
    return true
  };
  renderSubTotal(currentElement, currentPrice, quantity, delProduct = false) {
    let subTotalValue = document.querySelector('.js-cart-wrapper__total__sub-price');
    let totalValue = document.querySelector('.js-cart-wrapper__total__price');
    let total = 0;

    if (delProduct) {
      this._dataBaseLS && this._dataBaseLS.forEach((element) => {
        total += Number(element.price * element.quantityItems);
      });
      if (total < 0) {
        return
      } else {
        subTotalValue.innerText = 'R$ ' + total.toFixed(2);
        totalValue.innerText = 'R$ ' + total.toFixed(2);
        total = 0;
      }
    } else {
      let quantityItemsCurrentElement = Number(quantity);
      let priceCurrentElement = Number(currentPrice);
      let totalPriceProduct = quantityItemsCurrentElement * priceCurrentElement;

      this._dataBaseLS.forEach((element) => {
        total += Number(element.price * element.quantityItems);
      });
      if (total < 0) {
        return
      } else {
        subTotalValue.innerText = 'R$ ' + total.toFixed(2);
        totalValue.innerText = 'R$ ' + total.toFixed(2);
        currentElement.innerText = 'R$ ' + totalPriceProduct.toFixed(2);
        total = 0;
      }
      
    }
  };
  addProductUnit(el) {
    /**
     * 1 - Receber por agumento o elemento foi clicado e pegar o valor do elemento
     *     sibling que mostra quantos itens foram escolhidos.
     * 2 - Pegar o ID do produto para identifica-lo quando percorrer um loop pelo object
     *     que armazena os produtos no LocalStorage.
     * 3 - Selecionar todos os elementos de textos na variável totalPriceArray para identificá-lo
     *     quando fazer o loop e atualizar o preço de acordo com a quantida escolhida pelo usuário.
     * 4 - Declarar uma variável para armazenar o preço do produto que será usado para calcular o total do preço
     *     de acordo com a quantidade de itens escolhido.
     * 5 - Declarar uma variável para armazenar as unidades do produto.
     * 6 - Setar mais uma unidade no imput quantidade.
     * 7 - Fazer um loop no array de produtos para atualizar a lista no local storage.
     */
    let num = el.previousSibling.getAttribute("value");
    let idNum = el.previousSibling.getAttribute("id");
    let totalPriceArray = document.querySelectorAll(".js-total-price-product__p");
    let currentElement;
    let currentPrice;
    let quantityItemsCurrentElement;
    el.previousSibling.setAttribute("value", ++num);

    this._dataBaseLS.forEach((element, index) => {
      if (element.id == idNum) {
        element.quantityItems++;
        quantityItemsCurrentElement = element.quantityItems;
        currentPrice = element.price;
        localStorage.setItem('user', JSON.stringify(this._dataBaseLS));
        currentElement = totalPriceArray[index];
        return
      };
      return
    });
    this.renderSubTotal(currentElement, currentPrice, quantityItemsCurrentElement);
  };
  removeProductUnit(el) {
    if (Number(el.nextSibling.value) === 1) {
      return
    } else {

      let num = el.nextSibling.getAttribute("value");
      let idNum = el.nextSibling.getAttribute("id");
      let totalPriceArray = document.querySelectorAll(".js-total-price-product__p");
      let currentElement;
      let currentPrice;
      let quantityItemsCurrentElement;
      el.nextSibling.setAttribute("value", --num);
      this._dataBaseLS.forEach((element, index) => {
        if (element.id == idNum) {
          element.quantityItems--;
          quantityItemsCurrentElement = element.quantityItems;
          currentPrice = element.price;
          localStorage.setItem('user', JSON.stringify(this._dataBaseLS));
          currentElement = totalPriceArray[index];
          return;
        }
        return;
      });
      this.renderSubTotal(currentElement, currentPrice, quantityItemsCurrentElement);
    };
  };
};
const renderCart = new RenderCart();
export { renderCart };
