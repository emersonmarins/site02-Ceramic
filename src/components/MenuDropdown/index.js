class MenuToggle {
  constructor() {
    
    this.menuToggle = document.querySelector('.menu-toggle');
    this.menu = document.querySelector('.menu');
    this.dropdown = document.querySelector('.dropdown');
    this.iconDropdown = document.querySelector('.fa-solid.fa-chevron-right');
    this.eventLeave = false;
    this.menuOpenHeight = 0;
    this.initEventListeners();
      
  };

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
    this.dropdown.removeAttribute('style');
    this.iconDropdown.removeAttribute('style');
    if (this.menu.className === "menu state-menu") {
      this.menu.classList.remove('state-menu');
    } else if (this.menu.className === "menu state-menu hidden") {
      this.menu.classList.remove('state-menu');
      this.menu.classList.remove('hidden');
    } else {
      this.menu.classList.toggle('hidden');
    }     
    this.dropdown.dataset.statemenu = "close";
  
  };

  changeVisibility() {
    if (window.innerWidth < 800) {
      document.documentElement.style.setProperty('--field-search-width', `300px`);
      this.dropdown.dataset.statemenu = "close";
      this.menu.classList.add('hidden');
      this.menuToggle.classList.remove('hidden');
    } else if (window.innerWidth > 800) {
      document.documentElement.style.setProperty('--field-search-width', `600px`);
      this.menu.classList.remove('hidden');
      this.menuToggle.classList.add('hidden');
    }
  };

  closeDropdown() {
    this.menuOpenHeight = this.dropdown.clientHeight;
    this.dropdown.dataset.statemenu = "close";
    document.documentElement.style.setProperty('--end-width', `${this.menuOpenHeight}px`);
    this.dropdown.style.cssText = `animation: showDropdown2 1s ease-in-out both, boxShadowHidden 1s ease-in-out both;`;
    this.dropdown.firstChild.nextSibling.removeAttribute('style');
    this.iconDropdown.style.cssText = `animation: rotateOrigin 1s ease-in-out both;`;
  };

  openDropdown() {
    document.documentElement.removeAttribute('style');
    this.dropdown.dataset.statemenu = "open";
    this.dropdown.style.cssText = `animation: showDropdown 1s ease-in-out both, boxShadowShow 1s ease-in-out both;`;
    this.dropdown.firstChild.nextSibling.style.cssText = `font-weight: bold;`;
    this.iconDropdown.style.cssText = `animation: rotate90Deg 1s ease-in-out both;`;
  };
};
export {MenuToggle}
