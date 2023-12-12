class CreateFooter {
  constructor(className) {
    this._divWrapper;
    this.divWrapper = className;
  };
  set divWrapper(className) {
    className ? this._divWrapper = document.querySelector(className) : document.querySelector('body');
  }
  get divWrapper() {
    return this._divWrapper;
  }
  createFooter() {

    // const footer = document.createElement('footer');
    // footer.classList.add('footer-wrapper');
    const footerEnd = document.createElement('div');
    footerEnd.classList.add('footer__end');

    const footerEndText = document.createElement('span');
    footerEndText.classList.add('footer__copy');
    footerEndText.innerHTML = '©2023 feito por Emerson Marins &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Todos os direitos reservados';
    footerEnd.appendChild(footerEndText);

    const divFooter = document.createElement('div');
    divFooter.classList.add('footer');

    const column1 = document.createElement('div');
    column1.classList.add('footer__column');

    const logo = document.createElement('div');
    const logoImg = document.createElement('img');
    logoImg.classList.add('footer__logo');
    logoImg.src = './src/assets/logo/logo-porcelann.png';
    logoImg.style.width = '150px';
    logo.appendChild(logoImg);
    column1.appendChild(logo);

    const title1 = document.createElement('div');
    title1.innerHTML = '<span class="footer__title">atendimento</span>';
    column1.appendChild(title1);

    const ul1 = document.createElement('ul');
    ul1.classList.add('footer__list');
    ul1.innerHTML = `
        <li class="footer__text">seg-sex - 7h30 às 18h30</li>
        <li class="footer__text">sab - 7h30 às 12h30</li>
        <li class="footer__text">contato@xxxxx.com</li>
        <li class="footer__column">
          <span class="footer__text">telefone</span>
          <span class="footer__text">
            <i class="fa-brands fa-whatsapp"></i>
            (99)9999-9999
          </span>
          <span class="footer__text">
            <i class="fa-solid fa-phone"></i>
            (99)9999-9999
          </span>
        </li>
      `;
    column1.appendChild(ul1);

    const column2 = document.createElement('div');
    column2.classList.add('footer__column');

    const title2 = document.createElement('div');
    title2.innerHTML = '<span class="footer__title">institucional</span>';
    column2.appendChild(title2);

    const ul2 = document.createElement('ul');
    ul2.classList.add('footer__list');
    ul2.innerHTML = `
        <li><a class="footer__text js-footer__text" data-callclass="aboutUs" href="#">quem somos</a></li>
        <li><a class="footer__text js-footer__text" data-callclass="orders" href="#">acompanhe seu pedido</a></li>
        <li><a class="footer__text js-footer__text" href="#">trocas e devoluções</a></li>
        <li><a class="footer__text js-footer__text" data-callclass="contactUs" href="#">entrar em contato</a></li>
        <li><a class="footer__text js-footer__text" data-callclass="cookiePolicy" href="#">políticas de cookies</a></li>
        <li><a class="footer__text js-footer__text" data-callclass="shippingPolicy" href="#">políticas de frete</a></li>
        <li><a class="footer__text js-footer__text" data-callclass="privacyPolicy" href="#">políticas de privacidade</a></li>
        <li><a class="footer__text js-footer__text" data-callclass="refundPolicy" href="#">políticas de reembolso</a></li>
      `;
    column2.appendChild(ul2);

    const column3 = document.createElement('div');
    column3.classList.add('footer__column');

    const title3 = document.createElement('div');
    title3.innerHTML = '<span class="footer__title">meus pedidos</span>';
    column3.appendChild(title3);

    const ul3 = document.createElement('ul');
    ul3.classList.add('footer__list');
    ul3.innerHTML = `
        <li><a class="footer__text" href="#">acompanhe seus pedidos</a></li>
        <li><a class="footer__text" href="#">editar cadastro</a></li>
      `;
    column3.appendChild(ul3);

    const followTitle = document.createElement('div');
    followTitle.innerHTML = '<span class="footer__title">nos siga</span>';
    column3.appendChild(followTitle);

    const iconRow = document.createElement('div');
    iconRow.classList.add('footer__row');
    iconRow.innerHTML = `
        <i class="fa-brands fa-facebook footer__icon"></i>
        <i class="fa-brands fa-square-instagram footer__icon"></i>
        <i class="fa-brands fa-youtube footer__icon"></i>
      `;
    column3.appendChild(iconRow);

    divFooter.appendChild(column1);
    divFooter.appendChild(column2);
    divFooter.appendChild(column3);

    if (this._divWrapper) {
      this._divWrapper.appendChild(divFooter);
      this._divWrapper.appendChild(footerEnd)
    } else { 
      document.querySelector('body').appendChild(divFooter);
      document.querySelector('body').appendChild(footerEnd);
    };

  };
};

// const createFooter = new CreateFooter();
export { CreateFooter };