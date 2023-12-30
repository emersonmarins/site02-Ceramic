import { dataBaseCarousel } from '../Model/db.js';
import { MoveCarousel } from "../Model/MoveCarousel.js";
import { Animations } from "../Model/Animations.js";
import { RenderCarousel } from "../Views/RenderCarousel.js";
import { CarouselFunctions } from "../Model/CarouselFunctions.js";
import { effects } from "../Views/effects.js";

/**
 *                           +----------------+
 *                           |  Documentação  |
 *                           +----------------+
 * 
 *  1 - Receber no parametro do constructor a className que será para selecionar 
 *      o parentELement que cobrirá todo o carrosel.
 *  2 - Atribuir o banco de dados ao atributo this.dataBase
 *  3 - Criar 5 atributos que serão :
 *       
 *      3.1 - this.containerWrapperList:
 *            => Conterá o elementNode que conterá todos os blocos de produtos do carousel.
 * 
 *      3.2 - this.renderCarouselObject:
 *            => Conterá a instancia da class que renderiza o carousel.
 * 
 *      3.3 - this.moveCarouselObject:
 *            => Conterá a instancia da class que move o carousel.
 * 
 *      3.4 - this.animationsObject:
 *            => Conterá a instancia da class que faz animações no carousel.
 * 
 *      3.5 - this._carouselFunctions:
 *            => Conterá a instancia da class que dá funcionalidades ao carousel.
 * 
 *  4 - Iniciar o Carousel no constructor que irá criar as instancias das classes para 
 *      cada um dos 4 atributos na seguinte ordem:
 * 
 *         1 - this.renderCarouselObject
 *         2 - this.moveCarouselObject
 *         3 - this.animationsObject
 *         4 - this._carouselFunctions
 *  
 *  
 * 
 */

class CarouselController {

  constructor(className) {
    this.className = className
    this.dataBase = dataBaseCarousel;
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
