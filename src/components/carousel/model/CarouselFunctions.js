import { renderCartProducts } from '../../shoppingCart/view/RenderCartProducts.js';
import { cartController } from "../../shoppingCart/controller/CartController.js";
import { bemBuilder } from "../../../pages/product/view/BemBuilder.js";
import { productController } from "../../../pages/product/controller/ProductController.js";
import { effects } from "../view/Effects.js";

class CarouselFunctions {
  constructor(dataBase) {
    this.dataBase = dataBase;
    this.callFunctionId = true;
    this.objectProduct = [];
    this.cart;
    this.renderCartProducts;
    this.cartController = cartController;
    this.renderCartProducts = renderCartProducts;
    this.handleShowProduct = this.showProduct.bind(this);
    this.handleHideProduct = this.hideProduct.bind(this);
    this.stateClickWapper = false;
    this.divProduct;
    this.mainWrapper = document.querySelector('.wrapper');
    this.initListener();
  };
  addProductLocalStorage(element) {
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
    Object.defineProperty(this.objectProduct, `${this.objectProduct.length++}`, {
      value: userid,
    })

    localStorage.setItem(`user`, JSON.stringify(this.objectProduct));
    this.objectProduct = [];
  };
  async dbGet(id) {
    /**
     * 1 - Armazenar na variável this.objectProduct um objeto que guarda os 
     *     produtos que estão no carrinho
     * 2 - Verificar se o this.objectProduct é null, caso seja atribuir um valor vazio
     * 3 - procurar o produto no banco de dados
     * 4 - chamar a função this.addProductLocalStorage(element) p/ add o produto
     *     caso seja o primeiro produto add ao carrinho
     * 5 - Caso o carrinho já tenha algum produto verificar se o produto 
     *     já tem no carrinho, caso tenha atribuir o valor de true na va
     *     riável productRepeat para true impedindo que a mesma add 2 produtos iguais
     *     OBS: Implementar uma lógica para add mais uma unidade caso o produto seja repetido.
     * 6 - Caso já tenha produto no carrinho e não seja repetido add o produto ao carrinho
     *  
     */
    this.objectProduct = await JSON.parse(localStorage.getItem("user"))
    if (this.objectProduct == null) {
      this.objectProduct = []
    }

    this.dataBase.products.forEach((element) => {
      if (element.id === id) {

        // Verifica se não tem produtos no array
        if (this.objectProduct.length == 0) {
          // ADD PRODUCT IN LOCALSTORAGE
          this.addProductLocalStorage(element)
        } else {

          // Verifica se o produto já tem no array
          let productRepeat = false;
          this.objectProduct.forEach((el) => {
            if (el.id == id) {

              productRepeat = true
            }
          })

          if (!productRepeat) {
            // ADD PRODUCT IN LOCALSTORAGE
            this.addProductLocalStorage(element)
            return
          }
        };
        return
      };
    });

  };
  clearEmptyCart() {
    // como add um produto ele esconde a mensagem carrinho vazio, 
    // essa função deve ser passada para o componente ShoppingCart,
    // pois não se trata da competencia do carrosel definir isso.
    const message = document.querySelector('.cart__emptyCart');
    message.classList.add('hidden');
  };
  shoppingCarts(event) {
    event.preventDefault();
    if (this.callFunctionId) {
      this.clearEmptyCart();
      const id = Number(event.target.getAttribute('id'));// Pega o ID para identificar o item
      this.dbGet(id);
      this.callFunctionId = false;
      let time = setTimeout(() => {
        this.callFunctionId = true;
        let dataBaseLS = JSON.parse(localStorage.getItem("user"));
        if (dataBaseLS.length === 0) {

        }
        console.log(dataBaseLS)
        this.renderCartProducts.reloadCart('remove', dataBaseLS);
        this.cartController.updateEventListeners();
      }, 400);
    }
  };
  showProduct(event) {
    event.preventDefault();
    const element = event.target;
    console.log(event.target);
    this.dataBase.products.forEach((e) => {
      if (Number(e.id) === Number(element.parentElement.firstChild.id)) {
        const url = {
          img01: e.id,
          img02: "10102",
          img03: "10103",
          img04: "10104"
        }
        bemBuilder.setConstructor(url);
        this.divProduct = bemBuilder.build(e);
        const divWrapper = document.querySelector('.model-product');
        const wrapper = document.querySelector('.wrapper');
        const body = document.querySelector('body');
        divWrapper.classList.toggle('hidde');
        body.classList.add('overflow-none');
        wrapper.classList.add('blur');
        divWrapper.appendChild(this.divProduct);

        console.log('entrou')
        productController.productId = e.id;
        productController.dataBase = this.dataBase;
        
        console.log(productController.filterProduct())
        productController.initEventListenner();
        // productController.handleControlQuantityItems();
        // productController.handleAddToCart();
      }
    });
    this.mainWrapper.addEventListener('click', this.handleHideProduct);
  };
  hideProduct() {
    if (this.stateClickWapper) {
      console.log('remover product')
      const divWrapper = document.querySelector('.model-product');
      const wrapper = document.querySelector('.wrapper');
      const body = document.querySelector('body');
      divWrapper.classList.toggle('hidde');
      body.classList.remove('overflow-none');
      wrapper.classList.remove('blur');
      this.divProduct.remove();
      this.mainWrapper.removeEventListener('click', this.handleHideProduct);
      this.stateClickWapper = !this.stateClickWapper;
    } else {
      this.stateClickWapper = !this.stateClickWapper;
    }
  };
  initListener() {
    /**
     * 1 - Primeiro salvar os buttons de adicionar ao carrinho em uma variável 
     * 2 - fazer um for em todos os buttons e add um evento de click
     */
    this.cart = document.querySelectorAll('.container-carousel-nav > .bi-cart3');

    this.cart.forEach((element) => {
      element.addEventListener('click', (event) => {
        this.shoppingCarts(event);
        effects.scale1X(event);
      });
    });

    this.showProductCarousel = document.querySelectorAll('.container-carousel-nav > .bi-eye');

    this.showProductCarousel.forEach((element) => {
      element.addEventListener('click', this.handleShowProduct);
    });

  };
};
export { CarouselFunctions }