import { MenuFooter } from "../../pages/informations/index.js";
import { ContactForm } from "../ContactForm/ContactForm.js";

class Footer extends MenuFooter {
  constructor(className) {
    super();
    this.mainContent = document.querySelector('.mainContent');
    this.mainContainer = document.querySelector('.mainContainer');
    this.containerFooter = document.querySelector(`.${className}`);
    this.menuFooter = document.querySelectorAll('.js-footer__text')
    this.text;
    this.title;
    this.contactForm = new ContactForm();
    this.showMenuFooter()
  }

  createSection(formName = false) {
    if (document.querySelector('.infoWrapper')) {
      document.querySelector('.infoWrapper').remove();
    }

    let divWrapper = document.createElement("div");
    divWrapper.classList.add('infoWrapper');
    this.mainContainer.appendChild(divWrapper);

    if (!formName) {

      let title = document.createElement("h3");
      let text = document.createElement("p");

      title.classList.add('infoWrapper__title');
      text.classList.add('infoWrapper__text');
      title.innerHTML = this.title;
      text.innerHTML = this.text;

      divWrapper.appendChild(title);
      divWrapper.appendChild(text);

    } else {
      this.contactForm.renderizarFormulario("infoWrapper");
    };
  };

  showMenuFooter(showPage) {
    this.menuFooter.forEach((element, index) => {
      element.addEventListener('click', e => {
        e.preventDefault();
        let className = e.currentTarget.dataset["callclass"]

        if (this.mainContent.className !== "mainContent hide") {
          this.mainContent.classList.toggle("hide");
        }

        switch (className) {
          case 'aboutUs':

            this.title = this.aboutUs.title;
            this.text = this.aboutUs.text;
            this.createSection();


            break;
          case 'cookiePolicy':
            this.title = this.cookiePolicy.title;
            this.text = this.cookiePolicy.text;
            this.createSection();

            break;
          case 'orders':
            this.title = this.orders.title;
            this.text = this.orders.text;
            this.createSection();

            break;
          case 'privacyPolicy':
            this.title = this.privacyPolicy.title;
            this.text = this.privacyPolicy.text;
            this.createSection();

            break;
          case 'refundPolicy':
            this.title = this.refundPolicy.title;
            this.text = this.refundPolicy.text;
            this.createSection();

            break;
          case 'shippingPolicy':
            this.title = this.shippingPolicy.title;
            this.text = this.shippingPolicy.text;
            this.createSection();

            break;
          case 'contactUs':
            this.createSection(true);

            break;
          default:
            break;
        }

        // if (this.aboutUs.texTitle === "") {

        // }
      })

    });


  };
};
export { Footer };
/**
 * Crie para mim um menu dropdown usando HTML, CSS e Java Script com as seguintes características 
 * 1 - a esquerda em telas com largura acima de 600px fique a logo marca chamada PORCELANN
 * 2 - no meio fique a aba HOME, PRODUTOS, QUEM SOMOS, CONTATO
 * 3 - ao clicar ou colocar o mouse em cima de PRODUTOS, apareça uma aba suspensa com
 * os sequintes nomes: PRATOS, XÍCARAS, DECORAÇÃO, TIGELAS
 * 4 - a esquerda contenha os seguintes ícones, primeiro ícone seja uma lupa para procurar os produtos na loja
 * e ao clicar na lupa ela venha aparecer uma aba com o lugar para digitar o nome do produto, e seja uma busca
 * inteligente que mostre sugestões de acordo com os produtos que tem na loja, o segundo ícone seja o login, e ao clicar
 * sobre ele apareça um formúlário de login, e o último ícone seja o do carrinho de compra.
 * 5 - em telas com largura abaixo de 600px o menu seja do tipo hamburgue e fique na esquerda a logo no meio e os
 * três ícones a direita do menu.
 */
