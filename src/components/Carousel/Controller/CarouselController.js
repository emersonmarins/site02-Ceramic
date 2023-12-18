import dataBase from '../../../data/products/db_product.js';
import { MoveCarousel } from "../Model/MoveCarousel.js";
import { Animations } from "../Model/Animations.js";
import { RenderCarousel } from "../Views/RenderCarousel.js";
import { CarouselFunctions } from "../Model/CarouselFunctions.js";
import { effects } from "../Views/effects.js";

/**
 *        +---------------+
 *        |  Documentação |
 *        +---------------+
 *  1 - Receber no parametro do contrutor a className que será o parentELement que
 *      cobrirá todo o carrosel.
 *  2 - Atribuir o banco de ao atributo this.dataBase
 *  3 - Iniciar o Carousel no constructor
 *  
 * 
 */

class CarouselController {

  constructor(className) {
    this.className = className
    this.dataBase = dataBase;
    this.containerWrapper = document.querySelector(`.${className}`);
    this.containerWrapperList;
    this.renderCarouselObject;
    this.moveCarouselObject;
    this.animationsObject;
    this._carouselFunctions
    this.init();
  };

  async init(){
  await this.renderCarousel();
  this.updateAttribute();
  await this.moveCarousel();
  await this.animationCarousel();
  this.carouselFunctions();
  };

  async renderCarousel() {
    this.renderCarouselObject = new RenderCarousel(this.dataBase, this.containerWrapper);
  };

  async moveCarousel() {
   this.moveCarouselObject = new MoveCarousel(this.containerWrapperList);
  };

  async animationCarousel() {
    this.animationsObject = new Animations();
  };

  carouselFunctions(){
    this._carouselFunctions = new CarouselFunctions(this.dataBase);
  };

  updateAttribute(){
    this.containerWrapperList = document.querySelector(`.container-carousel__content`);
  };

};

export { CarouselController };
