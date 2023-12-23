import { MenuFooter } from "../../../pages/informations/index.js";
import { ContactForm } from "../../../components/ContactForm/ContactForm.js";

class FooterModel extends MenuFooter {
  constructor(className, classNameContainer, path) {
    super();
    this.mainContent = document.querySelector('.mainContent');
    this.mainContainer = document.querySelector(classNameContainer);
    this.containerFooter = document.querySelector(className);
    this.menuFooter = document.querySelectorAll('.js-footer__text')
    this.text;
    this.title;
    this.contactForm = new ContactForm(path);
    this._path;
    this.pathCurrent = path;
    this.showMenuFooter()

  }
  get pathCurrent(){
    return this._path;
  }
  set pathCurrent(pathPage) {
    if (pathPage === 'cart-page') {
      this._path = '../../../../';

    } else if (pathPage === 'home') {
      this._path = './';
    }
  }
  createSection(formName = false) {
    if (document.querySelector('.infoWrapper')) {
      document.querySelector('.infoWrapper').remove();
    }

    let divWrapper = document.createElement("div");
    divWrapper.classList.add('infoWrapper');
    this.mainContainer.appendChild(divWrapper);

    if (!formName) {
      this.divWrapperImg = document.createElement('div');
      this.img = document.createElement('img');
      let title = document.createElement("h3");
      let text = document.createElement("p");

      this.divWrapperImg.classList.add('infoWrapper__wrapper-img', 'js-infoWrapper__wrapper-img');
      this.img.classList.add('infoWrapper__img', 'js-infoWrapper__img');
      this.img.src = `${this.pathCurrent}src/assets/banners/banner01.png`;
      title.classList.add('infoWrapper__title');
      text.classList.add('infoWrapper__text');
      title.innerHTML = this.title;
      text.innerHTML = this.text;

      divWrapper.appendChild(this.divWrapperImg);
      this.divWrapperImg.appendChild(this.img);
      divWrapper.appendChild(title);
      divWrapper.appendChild(text);

    } else {
      this.contactForm.renderizarFormulario("infoWrapper",);
    };
  };
  scrollToTop() {
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rola suavemente se a propriedade scrollBehavior for suportada
      });
    } else {
      // Fallback para uma animação de rolagem personalizada
      const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, c - c / 8);
        }
      };
      scrollToTop();
    }
  }
  showAboutUs(headerClick = false) {
    if (headerClick) {
      if (this.mainContent.className !== "mainContent hiddenPageMain") {
        this.mainContent.classList.toggle("hiddenPageMain");
      }
    }
    this.title = this.aboutUs.title;
    this.text = this.aboutUs.text;
    this.scrollToTop();
    setTimeout(() => { this.createSection() }, 200);
  }
  contactUs(headerClick = false) {
    if (headerClick) {
      if (this.mainContent.className !== "mainContent hiddenPageMain") {
        this.mainContent.classList.toggle("hiddenPageMain");
      }
    }
    this.createSection(true);
    this.scrollToTop();
  }
  showMenuFooter(showPage) {
    this.menuFooter.forEach((element, index) => {
      element.addEventListener('click', e => {
        e.preventDefault();
        let className = e.currentTarget.dataset["callclass"]

        if (this.mainContent.className !== "mainContent hiddenPageMain") {
          this.mainContent.classList.toggle("hiddenPageMain");
        }

        switch (className) {
          case 'aboutUs':
            this.showAboutUs();
            break;
          case 'cookiePolicy':
            this.title = this.cookiePolicy.title;
            this.text = this.cookiePolicy.text;
            this.createSection();
            this.scrollToTop();

            break;
          case 'orders':
            this.title = this.orders.title;
            this.text = this.orders.text;
            this.createSection();
            this.scrollToTop();

            break;
          case 'privacyPolicy':
            this.title = this.privacyPolicy.title;
            this.text = this.privacyPolicy.text;
            this.createSection();
            this.scrollToTop();

            break;
          case 'refundPolicy':
            this.title = this.refundPolicy.title;
            this.text = this.refundPolicy.text;
            this.createSection();
            this.scrollToTop();

            break;
          case 'shippingPolicy':
            this.title = this.shippingPolicy.title;
            this.text = this.shippingPolicy.text;
            this.createSection();
            this.scrollToTop();

            break;
          case 'contactUs':
            this.contactUs();
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
let footer = null;
export { footer, FooterModel };