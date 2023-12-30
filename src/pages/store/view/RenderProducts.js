class RenderProducts {
  constructor(dataBase, className, textCartBtn, textBuyNowBtn) {

    this.main__products = document.querySelector(`.${className}`);
    this.products__item;
    this.item__imgContainer;
    this.item__img;
    this.item__info;
    this.item__title;
    this.item__description;
    this.item__price;
    this.item__priceCurrent;
    this.item__addCartBtn;
    this.item__buyNowBtn;

    this.textCartBtn = textCartBtn;
    this.textBuyNowBtn = textBuyNowBtn;
    this._dataBase = dataBase;
    this.newTitle;
    this.productsItemsAll;
    // this.renderProducts();

  }
  set dataBase(dataBase){
    this._dataBase = dataBase
  }
  get dataBase(){
    return this._dataBase;
  }
  deleteProducts(){
    this.productsItemsAll = document.querySelectorAll('.products__item');
    this.productsItemsAll.forEach(element => {
      element.remove();
    });
  }
  reduceNumberCharacters(element){
      
      if (element.title.length > 14) {
        this.regExp = new RegExp('.{14}', 'ig');
        this.newTitle = this.regExp.exec(element.title)[0];
        this.newTitle = this.newTitle.replace(this.newTitle, this.newTitle.trim() + '...');
      } else {
        this.newTitle = element.title
      }
    return this.newTitle;
  }

  createElements(){
    this.products__item = document.createElement('div');
    this.item__imgContainer = document.createElement('div');
    this.item__img = document.createElement('img');
    this.item__info = document.createElement('div');
    this.item__title = document.createElement('h3');
    this.item__description = document.createElement('p');
    this.item__price = document.createElement('span');
    this.item__priceCurrent = document.createElement('span');
    this.item__addCartBtn = document.createElement('button');
    this.item__buyNowBtn = document.createElement('button');
  }
  
  addAttributes(element) {
    // ADD CLASS NAME
    this.products__item.classList.add('products__item');
    this.item__imgContainer.classList.add('item__img-container');
    this.item__img.classList.add('item__img');
    this.item__info.classList.add('item__info');
    this.item__title.classList.add('item__title');
    this.item__description.classList.add('item__description');
    this.item__price.classList.add('item__price');
    this.item__priceCurrent.classList.add('item__price-current');
    this.item__addCartBtn.classList.add('item__add-cart-btn', 'btn');
    this.item__buyNowBtn.classList.add('item__buy-now-btn', 'btn');

    // ADD ATTRIBUTES

    this.products__item.setAttribute('data-id', `${element.id}`);
    this.item__img.setAttribute('src', `${element.url}`);
    this.item__img.setAttribute('alt', `${element.title}`);


  }

  addText(element) {
    this.item__title.innerText = `${this.reduceNumberCharacters(element)}`;
    this.item__description.innerText = `${element.description ? element.description : ''}`;
    this.item__price.innerText = `R$ ${element.price}`;
    // this.item__priceCurrent.innerText = `R$ ${element.currentPrice}`;
    this.item__addCartBtn.innerText = `${this.textCartBtn}`;
    this.item__buyNowBtn.innerText = `${this.textBuyNowBtn}`;
  }

  appendChildren() {

    this.main__products.appendChild(this.products__item);

    this.products__item.appendChild(this.item__imgContainer);
    this.item__imgContainer.appendChild(this.item__img);

    this.products__item.appendChild(this.item__info);
    this.item__info.appendChild(this.item__title);
    this.item__info.appendChild(this.item__description);
    this.item__info.appendChild(this.item__price);
    this.item__info.appendChild(this.item__priceCurrent);
    this.item__info.appendChild(this.item__addCartBtn);
    this.item__info.appendChild(this.item__buyNowBtn);

  }

  renderProducts() {

    this._dataBase.products.forEach(element => {
      this.createElements();
      this.addAttributes(element);
      this.addText(element);
      this.appendChildren();
    });
  }

};

export {RenderProducts};