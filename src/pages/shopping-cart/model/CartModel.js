class CartModel {
  constructor(){
    this._dataBase();
    this.dataBase = true;
  };
  /**
   * @param {*} options 
   */
  set dataBase(options){
    
    this._dataBase = JSON.parse(localStorage.getItem("users"));
    
  }
  get dataBase(){
    
    this.dataBase = true;
    
    return this._dataBase;
  }
};
const cartModel = new CartModel();
export { cartModel };