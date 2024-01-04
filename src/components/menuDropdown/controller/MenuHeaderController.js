import { RenderHeaderMenu } from "../view/RenderHeaderMenu.js";
import { storeController } from "../../../pages/store/controller/StoreController.js";


class MenuHeaderController {
  constructor(className, hideCartModal) {
    this.renderHeaderMenu = new RenderHeaderMenu(className);
    this.menuToggle = document.querySelector('.menu-toggle');
    this.menu = document.querySelector('.menu');
    this.dropdown = document.querySelector('.dropdown');
    this.iconDropdown = document.querySelector('.fa-solid.fa-chevron-right');
    this.navLinksElements = document.querySelectorAll('.js-nav__link');

    this.eventLeave = false;
    this.menuOpenHeight = 0;
    this._path = window.Store.ALTERNATIVE_PATH;
    this.initEventListeners();
    this.hideCartModal(hideCartModal);

  };
  hideCartModal(hideCartModal) {

    if (hideCartModal) {
      this.iconHide = document.querySelector('.cart-icon.header__cart');
      this.iconHide.remove();
    }
  }
  initEventListeners() {
    this.menuToggle.addEventListener('click', () => {
      this.toggleMenu();

    });

    window.addEventListener('resize', () => {
      this.changeVisibility();
    });

    window.addEventListener('DOMContentLoaded', () => {
      this.changeVisibility();
    });
    this.dropdown.addEventListener('click', (e) => {
      if (window.innerWidth <= 800) {
        this.dropdown.dataset.statemenu === "close" ? this.openDropdown() : this.closeDropdown();
      }
    });
    this.navLinksElements.forEach((element) => {
      element.addEventListener('click', (navLink) => {
        localStorage.setItem('category', navLink.target.dataset.category)
        if (this._path === './') {
          window.location.href = './src/pages/store/html/index.html';
        } else if(this._path === '../../../../') {
          window.location.href = this._path+'src/pages/store/html/index.html';
        } 
        else {
            storeController.filterProducts();
        }
      });
    });


  };
  toggleMenu() {
    this.renderHeaderMenu.toggleMenu(this.dropdown, this.iconDropdown, this.menu);
  };
  changeVisibility() {
    this.renderHeaderMenu.changeVisibility(this.dropdown, this.menu, this.menuToggle);
  };
  closeDropdown() {
    this.renderHeaderMenu.closeDropdown(this.dropdown, this.iconDropdown);
  };
  openDropdown() {
    this.renderHeaderMenu.openDropdown(this.dropdown, this.iconDropdown);
  };
};
export { MenuHeaderController };