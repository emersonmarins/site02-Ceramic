import { CreateFooter } from "../views/CreateFooter.js";
import { FooterModel } from "../model/FooterModel.js";

class FooterController {
  constructor(className, path, classNameContainer) {
    this._className = className;
    this.createFooter = new CreateFooter(className, path);
    this.startCreateFooter();
    this.footerModel = new FooterModel(className, classNameContainer, path);
    this.navLinksElementAboutUs = document.querySelector('.js-nav__link-about-us');
    this.navLinksElementContact = document.querySelector('.js-nav__link-contact');
    this.initEventListeners();
   };
  set className(className) {
    this._className = className;
  };
  get className() {
    return this._className;
  };
  startCreateFooter() {
    this.createFooter.createFooter();
  };
  initEventListeners() {
    this.navLinksElementAboutUs.addEventListener('click', (e) => {
      this.footerModel.showAboutUs(true);
    });
    this.navLinksElementContact.addEventListener('click', (e) => {
      this.footerModel.contactUs(true);
    });
  };
};
export { FooterController }
