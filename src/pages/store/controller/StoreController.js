import { dataBase } from "../model/db_product.js";
import { RenderProducts } from "../view/RenderProducts.js";

class StoreController {
  constructor(className, addCartBtn, buyNowBtn) {
      this.categoryInputElements;
      this.categoryItemsElement;
      this.buttonFilterElement;
      this.maxPriceFilterElement;
      this.selectAllCategoryElement;
      this.filterListElement;
      this.filterPriceElement;
      this.openFilterMenu;
      this.categoryItems = [];
      this.productsNewArray = { products: [] };
      this.maxPriceFilter;
      this.stateMenuOpen = false;
  
      this.wordSearch = localStorage.getItem('category');
      this.className = "main__products";
      this.addCartBtn = "add carrinho";
      this.buyNowBtn = "comprar agora";
      this.renderProducts;
  

  };

  initController(){
    this.categoryInputElements = document.querySelectorAll('.js-category__input')
    this.categoryItemsElement = document.querySelectorAll('.category__items')
    this.buttonFilterElement = document.querySelector('.price__btn-filter');
    this.maxPriceFilterElement = document.querySelector('.price__output');
    this.selectAllCategoryElement = document.querySelector('input[data-check="all-category"]');
    this.filterListElement = document.querySelector('.filter__list');
    this.filterPriceElement = document.querySelector('.filter__price');
    this.openFilterMenu = document.querySelector('.filter__title');
    this.renderProducts = new RenderProducts(dataBase, this.className, this.addCartBtn, this.buyNowBtn);
    this.initEventListener(this.categoryInputElements);
  }

  deleteProducts() {
    this.renderProducts.deleteProducts();
  }
  renderProductsInit() {
    this.deleteProducts();
    this.renderProducts.dataBase = this.productsNewArray;
    this.renderProducts.renderProducts();
  }
  removeAccents(text) {
    // Remove os acentos das strings
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  };
  filterProducts(btnSearch = false) {
    this.productsNewArray.products = [];
    if (btnSearch) {
      dataBase.products.forEach(element => {
        for (let index = 0; index < this.categoryItems.length; index++) {
          const regexString = this.categoryItems[index] + '.+';
  
          if (new RegExp(regexString, 'i').test(element.category) && Number(element.price) <= this.maxPriceFilter) {
            this.productsNewArray.products.push(element);
          };
        };
      });
  
      this.renderProductsInit();      
    } else {
      this.wordSearch = this.removeAccents(localStorage.getItem('category'));
      dataBase.products.forEach(element => {
        const regexString = this.wordSearch + '\.*';
        if (new RegExp(regexString, 'i').test(this.removeAccents(element.title))) {
          this.productsNewArray.products.push(element);
        };
      });
  
      this.renderProductsInit();  
    }
  };
  initEventListener(categoryInputElements) {

    this.buttonFilterElement.addEventListener('click', (e) => {
      this.categoryItems = [];
      this.categoryItemsElement.forEach(element => {
        if (element.previousElementSibling.firstElementChild.checked) {
          this.categoryItems.push(element.dataset.items.replaceAll('-', ' '));
        };
      });

      this.maxPriceFilter = Number(this.maxPriceFilterElement.value.replace('R$', '').trim());
      this.filterProducts(true);
    });

    this.selectAllCategoryElement.addEventListener('change', function () {
      if (this.checked) {
        categoryInputElements.forEach(element => {
          element.checked = true
        })
      } else {
        categoryInputElements.forEach(element => {
          element.checked = false
        })
      }

    });
    this.openFilterMenu.addEventListener('click', () => {
      if (window.innerWidth <= 580) {
      this.filterListElement.classList.toggle('hidden');
      this.filterPriceElement.classList.toggle('hidden');
      this.stateMenuOpen = !this.stateMenuOpen;
      }
    })

    document.addEventListener('DOMContentLoaded', () => {
      if (window.innerWidth <= 580) {
        this.filterListElement.classList.add('hidden');
        this.filterPriceElement.classList.add('hidden');
      } else {
        this.filterListElement.classList.remove('hidden');
        this.filterPriceElement.classList.remove('hidden');
      }
      if (this.wordSearch) {
        this.filterProducts();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 580) {
        this.filterListElement.classList.remove('hidden');
        this.filterPriceElement.classList.remove('hidden');
      } else if(window.innerWidth <= 580 && !this.stateMenuOpen) {
        this.filterListElement.classList.add('hidden');
        this.filterPriceElement.classList.add('hidden');
      }
    })
  };

};

const storeController = new StoreController('main__products', 'add carrinho', 'comprar agora');
export { storeController };
