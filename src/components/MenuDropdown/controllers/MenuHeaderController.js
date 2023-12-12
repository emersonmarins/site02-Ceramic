import { RenderHeaderMenu } from "../views/RenderHeaderMenu.js";
class MenuHeaderController {
  constructor(className, hideCartModal) {
    this.renderHeaderMenu = new RenderHeaderMenu(className);
    this.menuToggle = document.querySelector('.menu-toggle');
    this.menu = document.querySelector('.menu');
    this.dropdown = document.querySelector('.dropdown');
    this.iconDropdown = document.querySelector('.fa-solid.fa-chevron-right');
    this.eventLeave = false;
    this.menuOpenHeight = 0;
    this.initEventListeners();
    this.hideCartModal(hideCartModal);
      
  };
  hideCartModal(hideCartModal){
    
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
    this.dropdown.addEventListener('click', () => {
      this.dropdown.dataset.statemenu === "close" ? this.openDropdown() : this.closeDropdown();
    });
  };
  toggleMenu() {
    this.renderHeaderMenu.toggleMenu(this.dropdown,this.iconDropdown,this.menu);
  };
  changeVisibility() {
    this.renderHeaderMenu.changeVisibility(this.dropdown,this.menu,this.menuToggle);
  };
  closeDropdown() {
    this.renderHeaderMenu.closeDropdown(this.dropdown,this.iconDropdown);    
  };
  openDropdown() {
     this.renderHeaderMenu.openDropdown(this.dropdown,this.iconDropdown); 
  };
};
// const menuHeaderController = new MenuHeaderController();
export { MenuHeaderController };