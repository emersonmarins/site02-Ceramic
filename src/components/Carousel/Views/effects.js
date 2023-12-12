class Effects {
  constructor(){

  };
  scale1X(element){
    element.stopPropagation();
    element.target.style.cssText = 'animation: scale1X 1.3s ease-in-out both;';
  };
};
const effects = new Effects();
export { effects };