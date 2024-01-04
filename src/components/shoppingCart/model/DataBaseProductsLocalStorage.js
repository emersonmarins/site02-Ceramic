class DataBaseProductsLocalStorage {
  constructor(){
    this._dataBase = JSON.parse(localStorage.getItem('user'));
  };
  set updateLocalStorage(value){
    this._dataBase = JSON.parse(localStorage.getItem('user'));
  };
  get dataBase(){
    this.updateLocalStorage = true;
    return this._dataBase;
  }
};

export { DataBaseProductsLocalStorage }