import { CreateFooter } from "../views/CreateFooter.js";
import { FooterModel } from "../model/FooterModel.js";

class FooterController {
  constructor(className, path){
    this._className = className;
    this.createFooter = new CreateFooter(className,path);
    this.startCreateFooter();
    this.initEventListeners();
    this.footerModel = new FooterModel(className);
  };
  set className(className){
    this._className = className;
  };
  get className(){
    return this._className;
  };
  startCreateFooter(){
    this.createFooter.createFooter();
  };
  initEventListeners(){  
    
  };
};
// const footerController = new FooterController();
export {FooterController}
