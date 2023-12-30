import { dataBase } from "../model/db.js";
import { bemBuilder } from "../view/BemBuilder.js";
import { setPath } from '../../../components/ShoppingCarts/views/RenderCartProducts.js';
setPath.path = 'product';
import { cartController } from '../../../components/ShoppingCarts/Controller/CartController.js';


class ProductController {
  constructor() {
    this.dataBase = dataBase;
    this.currentProduct;
    this.productLocalStorage;
    this._productId;
    this.repeatedId = false;
    this.buttonsArray;

  };
  get productId() {
    return this.productId;
  };
  set productId(id) {
    this._productId = id;
  };
  addProductToCart(quantity = false){
    if (JSON.parse(localStorage.getItem('user')) === null) {
      this.productLocalStorage = [];
    } else {
      this.productLocalStorage = JSON.parse(localStorage.getItem('user'));
    };
    // confere se algum item repete
    if (this.productLocalStorage) {
      for (let index = 0; index < this.productLocalStorage.length; index++) {
        const element = this.productLocalStorage[index];
        if (this.currentProduct.id === element.id) {
          this.repeatedId = true;
          return
        };
      };
    };
    if (!this.repeatedId) {
      this.currentProduct.quantityItems = quantity ? quantity : Number(this.buttonsArray[2].value);
      this.productLocalStorage.push(this.currentProduct);
      localStorage.setItem('user', JSON.stringify(this.productLocalStorage));
      this.repeatedId = false;
    };
  };
  initEventListenner() {

    this.buttonsArray = [
      document.querySelector('.product-info__quantity-decrease'),
      document.querySelector('.product-info__quantity-increase'),
      document.querySelector('.product-main__quantity-input'),
    ];
    // ADD TO CART
    document.querySelector('.product-info__button--addCart').addEventListener('click', () => {
      this.addProductToCart();
    });

    for (let index = 0; index < (this.buttonsArray.length - 1); index++) {
      const element = this.buttonsArray[index];
      element.addEventListener('click', (e) => {
        if (/.+(dash)|(decrease)/i.test(e.target.className)) {
          if (Number(this.buttonsArray[2].value) === 0) {
            return
          } else {
            this.buttonsArray[2].value--
          }
        } else {
          this.buttonsArray[2].value++
        }
        this.currentProduct.quantityItems = Number(this.buttonsArray[2].value);
      })
    };
  };
  renderProduct(className, currentProduct) {
    const productMainContent = bemBuilder.build(currentProduct);
    document.querySelector(`${className}`).appendChild(productMainContent);
    document.querySelector('.mainContent').classList.add('hidden');
    this.initEventListenner();
  };
  filterProduct() {
    for (let index = 0; index < dataBase.products.length; index++) {
      let element = dataBase.products[index];
      if (Number(element.id) === Number(this._productId)) {
        this.currentProduct = element;
        break
      };
    };
    return this.currentProduct;
  };

};

const productController = new ProductController();
export { productController };