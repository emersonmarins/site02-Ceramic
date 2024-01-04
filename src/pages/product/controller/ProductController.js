import { dataBase } from "../model/db.js";
import { bemBuilder } from "../view/BemBuilder.js";
import { setPath } from '../../../components/shoppingCart/view/RenderCartProducts.js';
setPath.path = 'product';
import { cartController } from '../../../components/shoppingCart/controller/CartController.js';


class ProductController {
  constructor() {
    this._dataBase = dataBase;
    this.currentProduct;
    this.productLocalStorage;
    this._productId;
    this.repeatedId = false;
    this.buttonsArray;
    this.handleAddToCart = this.addToCart.bind(this);
    this.handleControlQuantityItems = this.controlQuantityItems.bind(this);

  };
  get productId() {
    return this._productId;
  };
  set productId(id) {
    this._productId = id;
  };
  get dataBase() {
    return this._dataBase;
  };
  set dataBase(db) {
    this._dataBase = db;
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
  addToCart() {
    this.addProductToCart();
  };
  controlQuantityItems(){
    this.buttonsArray = [
      document.querySelector('.product-info__quantity-decrease'),
      document.querySelector('.product-info__quantity-increase'),
      document.querySelector('.product-main__quantity-input'),
    ];

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
  initEventListenner() {

    // ADD TO CART
    document.querySelector('.product-info__button--addCart').addEventListener('click', this.handleAddToCart);
    
    // CONTROL QUANTITY ITEMS
    this.handleControlQuantityItems();

  };
  renderProduct(className, currentProduct) {
    const productMainContent = bemBuilder.build(currentProduct);
    document.querySelector(`${className}`).appendChild(productMainContent);
    document.querySelector('.mainContent').classList.add('hidden');
    this.initEventListenner();
  };
  filterProduct() {
    for (let index = 0; index < this.dataBase.products.length; index++) {
      let element = this.dataBase.products[index];
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