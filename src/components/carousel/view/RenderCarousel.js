class RenderCarousel {
/**
 * @param {objectbject} db
 * @param {elementNode} elementNodeWrapper
 */
  constructor(db, elementNodeWrapper, title = "Novidades Imperdíveis") {
    this.title = title;
    this._dataBase;
    this.dataBase = db; // Chama o método get
    this.containerWrapper = elementNodeWrapper;
    this.sectionContainer;
    this.initCarousel();
  };
  /**
   * @param {any} db
   */
  set dataBase(db) {
    this._dataBase = db;

  };


  renderCarouselContainer(){
    const sectionTitle = document.createElement('span');
    this.sectionContainer = document.createElement('div');
    sectionTitle.classList.add('container-carousel__title');
    this.sectionContainer.classList.add('container-carousel__content');
    sectionTitle.innerText = this.title;

    this.containerWrapper.appendChild(sectionTitle);
    this.containerWrapper.appendChild(this.sectionContainer);
  };
  renderCarousel(url, textTitle, valuePrice, sku) {
    
    const imgUrl = url;
    const productTitle = textTitle;
    const currentPrice = valuePrice;
    const skuNum = sku;
    
    // create elements

    const productList = document.createElement('div');
    const productContent = document.createElement('div');
    const imgWrapper = document.createElement('div');
    const img = document.createElement('img');
    const imgClone = document.createElement('img');
    const nav = document.createElement('div');
    const iconCart = document.createElement('a');
    const iconEye = document.createElement('a');
    const iconArrows = document.createElement('a');
    const iconHeart = document.createElement('a');
    const infoWrapper = document.createElement('div');
    const infoStars = document.createElement('div');
    const iconStar1 = document.createElement('i');
    const iconStar2 = document.createElement('i');
    const iconStar3 = document.createElement('i');
    const iconStar4 = document.createElement('i');
    const iconStar5 = document.createElement('i');
    const title = document.createElement('a');
    const price = document.createElement('span');

    // add attributes

    productList.classList.add('container-carousel__product-list');
    productContent.classList.add('container-carousel__product-content');
    imgWrapper.classList.add('container-carousel__wrapper-image');
    img.classList.add('container-carousel__product-img');
    img.setAttribute('alt', 'imagem-porcelana');
    img.setAttribute('src', imgUrl);
    imgClone.classList.add('container-carousel__product-img-clone');
    imgClone.setAttribute('alt', 'imagem-porcelana');
    imgClone.setAttribute('src', imgUrl);
    nav.classList.add('container-carousel-nav');
    iconCart.classList.add('bi', 'bi-cart3');
    iconCart.setAttribute('href', '#');
    iconCart.setAttribute('id', skuNum);
    iconEye.classList.add('bi', 'bi-eye');
    iconEye.setAttribute('href', '#');
    iconArrows.classList.add('bi', 'bi-arrows-fullscreen');
    iconArrows.setAttribute('href', '#');
    iconHeart.classList.add('bi', 'bi-suit-heart');
    iconHeart.setAttribute('href', '#');
    infoWrapper.classList.add('container-carousel__info-wrapper');
    infoStars.classList.add('container-carousel__info-stars');
    iconStar1.classList.add('bi', 'bi-star-fill');
    iconStar2.classList.add('bi', 'bi-star-fill');
    iconStar3.classList.add('bi', 'bi-star-fill');
    iconStar4.classList.add('bi', 'bi-star-fill');
    iconStar5.classList.add('bi', 'bi-star-fill');
    title.classList.add('container-carousel__product-title');
    title.innerText = productTitle;
    price.innerText = 'R$ ' + currentPrice;


    // append child

    this.sectionContainer.appendChild(productList);
    productList.appendChild(productContent);
    productContent.appendChild(imgWrapper);
    imgWrapper.appendChild(img);
    imgWrapper.appendChild(imgClone);
    productContent.appendChild(nav);
    nav.appendChild(iconCart);
    nav.appendChild(iconEye);
    nav.appendChild(iconArrows);
    nav.appendChild(iconHeart);
    productList.appendChild(infoWrapper);
    infoWrapper.appendChild(infoStars);
    infoStars.appendChild(iconStar1);
    infoStars.appendChild(iconStar2);
    infoStars.appendChild(iconStar3);
    infoStars.appendChild(iconStar4);
    infoStars.appendChild(iconStar5);
    infoWrapper.appendChild(title);
    infoWrapper.appendChild(price);
  };
  initCarousel() {
    
    this.renderCarouselContainer();
    this._dataBase.products.forEach((ele) => {
      this.renderCarousel(ele.url, ele.title, ele.price, ele.sku);
    });
  };

};
export { RenderCarousel };