import { MenuToggle } from "./index.js";
class CreateHeader {
  constructor() {
    this.header = document.createElement('header');
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
      <li><a href="#">HOME</a></li>
      <li class="dropdown">
        <a href="#">PRODUTOS <i class="fa-solid fa-chevron-right"></i></a>
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
      <a href="#" class="cart-icon"><i class="bi bi-basket"></i></a>
    `;
    this.header.appendChild(this.icons);
  }

  getHeader() {
    return this.header;
  }
}

const createHeader = new CreateHeader();
document.body.appendChild(createHeader.getHeader());
const menuToggle = new MenuToggle();

export { CreateHeader, MenuToggle }