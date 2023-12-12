class RenderHeaderMenu {
  constructor(className = 'body',path) {
    this.containerWrapper = document.querySelector(`${className}`);
    this._path;
    this.pathCurrent = path;
    this.initMenu();
  };
  set pathCurrent(pathPage){
    if (pathPage === 'cart-page') {
      console.log('entrou cart-page')
      this._path = '../../../../';
      
    } else if (pathPage === 'home') {
      console.log('entrou home')

      this._path = './';

    }
  }
  initMenu() {
    this.renderMenu();
  };
  renderMenu() {
    this.header = this.containerWrapper;
    this.menuToggle = document.createElement('a');
    this.menuToggle.setAttribute('href', '#');
    this.menuToggle.setAttribute('class', 'menu-toggle state-menu-toggle');
    this.menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    this.header.appendChild(this.menuToggle);

    this.logo = document.createElement('div');
    this.logo.setAttribute('class', 'logo');
    this.logo.innerHTML = '<h1>PORCELANN</h1>';
    this.header.appendChild(this.logo);

    this.nav = document.createElement('nav');
    this.menu = document.createElement('ul');
    this.menu.setAttribute('class', 'menu state-menu');
    this.menu.innerHTML = `
      <li><a href="${this._path}index.html">HOME</a></li>
      <li class="dropdown">
        <a href="../../../pages/store/html/index.html">PRODUTOS <i class="fa-solid fa-chevron-right"></i></a>
        <ul class="dropdown-menu">
          <li><a href="#">PRATOS</a></li>
          <li><a href="#">XÍCARAS</a></li>
          <li><a href="#">DECORAÇÃO</a></li>
          <li><a href="#">TIGELAS</a></li>
        </ul>
      </li>
      <li><a href="#">QUEM SOMOS</a></li>
      <li><a href="#">CONTATO</a></li>
    `;
    this.nav.appendChild(this.menu);
    this.header.appendChild(this.nav);

    this.icons = document.createElement('div');
    this.icons.setAttribute('class', 'icons');
    this.icons.innerHTML = `
      <a href="#" class="search-icon">
        <div class="search-container">
          <i class="bi bi-search"></i>
          <input class="search-input" type="text" placeholder="Search...">
          <div class="textareaSearch hidden"></div>
        </div>
        <i class="bi bi-search"></i>
      </a>
      <a href="#" class="login-icon"><i class="bi bi-people"></i></a>
      <a href="#" class="cart-icon header__cart"><i class="bi bi-basket"></i></a>
    `;
    this.header.appendChild(this.icons);
  };
  toggleMenu(dropdown, iconDropdown, menu) {
    dropdown.removeAttribute('style');
    iconDropdown.removeAttribute('style');
    if (menu.className === "menu state-menu") {
      menu.classList.remove('state-menu');
    } else if (this.menu.className === "menu state-menu hidden") {
      menu.classList.remove('state-menu');
      menu.classList.remove('hidden');
    } else {
      menu.classList.toggle('hidden');
    }
    dropdown.dataset.statemenu = "close";
  };
  changeVisibility(dropdown, menu, menuToggle) {
    if (window.innerWidth < 800) {
      document.documentElement.style.setProperty('--field-search-width', `300px`);
      dropdown.dataset.statemenu = "close";
      menu.classList.add('hidden');
      menuToggle.classList.remove('hidden');
    } else if (window.innerWidth > 800) {
      document.documentElement.style.setProperty('--field-search-width', `600px`);
      menu.classList.remove('hidden');
      menuToggle.classList.add('hidden');
    };
  };
  closeDropdown(dropdown, iconDropdown) {

    dropdown.dataset.statemenu = "close";
    document.documentElement.style.setProperty('--end-width', `${dropdown.clientHeight}px`);
    dropdown.style.cssText = `animation: showDropdown2 1s ease-in-out both, boxShadowHidden 1s ease-in-out both;`;
    dropdown.firstChild.nextSibling.removeAttribute('style');
    iconDropdown.style.cssText = `animation: rotateOrigin 1s ease-in-out both;`;
  };
  openDropdown(dropdown, iconDropdown) {
    document.documentElement.removeAttribute('style');
    dropdown.dataset.statemenu = "open";
    dropdown.style.cssText = `animation: showDropdown 1s ease-in-out both, boxShadowShow 1s ease-in-out both;`;
    dropdown.firstChild.nextSibling.style.cssText = `font-weight: bold;`;
    iconDropdown.style.cssText = `animation: rotate90Deg 1s ease-in-out both;`;
  };
};

export { RenderHeaderMenu };