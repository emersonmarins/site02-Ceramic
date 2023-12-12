import { renderCart } from "../view/RenderCart.js";
class CartController {
  /**
   * 1 - Pegar informações do banco de dados
   * 2 - Renderizar página dos produtos do carrinho
   * 3 - Calcular preço total e renderizar
   * 4 - Adicionar eventos:
   *      1 - Buttons de quantidade de produtos
   *      2 - buttons de trash
   *      3 - imput de cupon de desconto
   *      4 - button de calcular frete e input do endereço
   *      5 - button escolher mais produtos
   *      6 - finalizar pedido
   */
  constructor(className){
    this._dataBaseLS;
    this.dataBaseLS = true;
  };
  get dataBaseLS(){
    return this._dataBaseLS;
  };
  set dataBaseLS(setDataBaseLS){
    setDataBaseLS && ( this._dataBaseLS = JSON.parse(localStorage.getItem('user')) );
  };
  renderCart(className){
    renderCart.dataBaseLS = this._dataBaseLS;
    renderCart.initRender(className);
    this.updateEventListeners();
  };
  changeTotalPrice(options){

  };
  updateEventListeners() {
    
    const btnPlus = document.querySelectorAll(".js-cart__product__quantity__plus");
    const btnMinus = document.querySelectorAll(".js-cart__product__quantity__minus");
    const trash = document.querySelectorAll('.js-total-price-product__del');

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
        element.addEventListener('click', e => this.deleteProduct(element))
        
      });//OK
  };
  addDiscountCoupon(){

  };
  addProductUnit(element){
    renderCart.addProductUnit(element);
  };
  removeProductUnit(element){
    
    let result = renderCart.removeProductUnit(element);
    result && this.updateEventListeners();
  };
  deleteProduct(element){
    renderCart.deleteProduct(element);
  };
  calculateDeliveryPrice(){

  };
};
const cartController = new CartController();
export { cartController };