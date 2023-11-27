const containerWrapper = document.querySelector('.section04__content');
import dataBase from '../db_product.js';
import {startCarousel} from '../js/section04.js';
import {setListeners} from '../js/carouselAdditionalFunctions.js';



const element = JSON.stringify(dataBase)

function carouselCreate(url, textTitle, valuePrice, sku) {

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

    productList.classList.add('section04__product-list');
    productContent.classList.add('section04__product-content');
    imgWrapper.classList.add('section04__wrapper-image');
    img.classList.add('section04__product-img');
    img.setAttribute('alt', 'imagem-porcelana');
    img.setAttribute('src', imgUrl);
    imgClone.classList.add('section04__product-img-clone');
    imgClone.setAttribute('alt', 'imagem-porcelana');
    imgClone.setAttribute('src', imgUrl);
    nav.classList.add('section04-nav');
    iconCart.classList.add('bi', 'bi-cart3');
    iconCart.setAttribute('href', '#');
    iconCart.setAttribute('id', skuNum);
    iconEye.classList.add('bi', 'bi-eye');
    iconEye.setAttribute('href', '#');
    iconArrows.classList.add('bi', 'bi-arrows-fullscreen');
    iconArrows.setAttribute('href', '#');
    iconHeart.classList.add('bi', 'bi-suit-heart');
    iconHeart.setAttribute('href', '#');
    infoWrapper.classList.add('section04__info-wrapper');
    infoStars.classList.add('section04__info-stars');
    iconStar1.classList.add('bi', 'bi-star-fill');
    iconStar2.classList.add('bi', 'bi-star-fill');
    iconStar3.classList.add('bi', 'bi-star-fill');
    iconStar4.classList.add('bi', 'bi-star-fill');
    iconStar5.classList.add('bi', 'bi-star-fill');
    title.classList.add('section04__product-title');
    title.innerText = productTitle;
    price.innerText = 'R$ ' + currentPrice;


    // append child

    containerWrapper.appendChild(productList);
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



}

dataBase.products.map((ele) => {
    carouselCreate(ele.url, ele.title, ele.price, ele.sku);     
})
startCarousel()
setListeners()
