import { renderCartProducts} from "../views/RenderCartProducts.js";
import { DataBaseProductsLocalStorage } from "../Model/DataBaseProductsLocalStorage.js";


class CartController {
  constructor() {
    this.containerCart;
    this.buttonAdd;
    this.buttonDel;
    this.buttonClose;
    this.cart;
    this.buttonCartOpen;
    this.cartContainer;
    this.cartPurchase;
    
    this.renderCartProducts = renderCartProducts;
    this.dataBaseProductsLocalStorage = new DataBaseProductsLocalStorage();
    this.dataBaseLS;
    this.creatCart();
    this.updateElements();
    this.initEventListeners();
  };
  get dataBaseLocalStorage(){
    // this.dataBaseLocalStorage.dataBase = true
    return  this.dataBaseLS = JSON.parse(localStorage.getItem('user'));
  };
  set dataBaseLocalStorage(dataBase){
    this.dataBaseLS = JSON.parse(localStorage.getItem('user'));

  };
  creatCart() {
    this.dataBaseLS = this.dataBaseProductsLocalStorage.dataBase;
    this.renderCartProducts.renderCartContainer(this.dataBaseLS === null ? false : this.dataBaseLS);
    this.dataBaseLS && this.addProduct(true);
    
  };
  updateElements(){
    this.buttonClose = document.querySelector('.bi.bi-x-circle-fill.close-menu-cart');
    this.cart = document.querySelector('.cart');
    this.buttonCartOpen = document.querySelector('.header__cart');
    this.cartContainer = document.querySelector('.cart');
    this.cartPurchase = document.querySelector('.cart__purchase');

  };
  initEventListeners() {
    this.buttonClose.addEventListener('click', () => { 
      setTimeout(() => {this.cart.classList.toggle('hidden');}, 800);
      this.cart.classList.add('hiddenComponents')
      this.cartContainer.classList.remove('showComponents');

    });
    /**
     * 1 - Add evento de click ao buttonCartOpen
     * 2 - Selecionar todas os produtos no carrinho de compras (cartProducts)
     * 3 - Selecionar todas o carrinho de compras (cartPurchase)
     * 4 - Verificar se o carrinho está vazio, caso não esteja renderizar todos os produtos
     *     salvos no localStorage e mostrar o carrinho de compras retirando a classe hidde.
     * 5 - Caso não tenha nada no carrinho chamar a função reloadCart com o parâmetro 'remove',
     *     e mostrar o carrinho de compras retirando a classe hidde.
     * 
     */
    this.buttonCartOpen.addEventListener('click', () => {
    this.updateElements();
      
      if (this.cartPurchase === null) {
        this.renderCartProducts.reloadCart(null, this.dataBaseProductsLocalStorage.dataBase); // Verifica o que é necessário!!!
        this.updateEventListeners();
        this.cartContainer.classList.toggle('hidden');
        this.cartContainer.classList.add('showComponents');
        this.cart.classList.remove('hiddenComponents')
      } else {
  
        this.renderCartProducts.reloadCart('remove',this.dataBaseProductsLocalStorage.dataBase);
        this.updateEventListeners();
        this.cartContainer.classList.toggle('hidden');
        this.cartContainer.classList.add('showComponents');
        this.cart.classList.remove('hiddenComponents')
      }
  });
  };
  updateEventListeners() {
    
    const btnPlus = document.querySelectorAll(".cart__product__plus");
    const btnMinus = document.querySelectorAll(".cart__product__minus");
    const trash = document.querySelectorAll('.bi-trash-fill');

    /**
     * Lógica para add mais uma unidade de um item no carrinho, retirar ou deletar o item.
     */
    btnPlus.forEach((element) => {
        element.addEventListener('click', el => this.addProductUnit(element));    
    });//OK

    btnMinus.forEach((element) => {
        element.addEventListener('click', el => this.removeProductUnit(element));      
    });//OK

    trash.forEach((element) => { 
        element.addEventListener('click', e => {
          this.deleteProduct(element)
          this.updateEventListeners();
        });
        
      });//OK
  };
  updatePriceField() {

  };
  addProduct(dataLocalStorage) {
    if (dataLocalStorage) {
      this.dataBaseLS.forEach((element) => {
        this.renderCartProducts.renderProducts(element.id, element.price, element.url, element.stock, element.title,this.dataBaseLS);
      });
      this.renderCartProducts.renderCartFooter();
    }

  };
  addProductUnit(element){
    this.renderCartProducts.addProductUnit(element);
  }; // OK
  removeProductUnit(element){
    this.renderCartProducts.removeProductUnit(element);
  };
  deleteProduct(element) {
    this.renderCartProducts.deleteProduct(element);
  };
};

export { CartController };