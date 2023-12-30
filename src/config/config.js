class Store {
  constructor() {
    this._current_path = './';
    this._alternative_path = './';
    this._footer_path = './src';

  }
  get CURRENT_PATH() {
    return this._current_path;
  }
  set CURRENT_PATH(path) {
    if (path === 'home') {
      this._current_path = './';
    } else {
      this._current_path = '../../../';
    }
  }
  get ALTERNATIVE_PATH() {
    return this._alternative_path;
  }
  set ALTERNATIVE_PATH(path) {
    this._alternative_path = path;
  }
  get FOOTER_PATH() {
    return this._footer_path;
  }
  set FOOTER_PATH(path) {
    this._footer_path = path;
  }
};
const store = new Store();
export { store };

