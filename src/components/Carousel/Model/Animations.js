class Animations {
  constructor() {
    this.img = document.querySelectorAll('.section04__product-img');
    this.imageWrapper = document.querySelectorAll('.section04__wrapper-image');
    this.setListenersAnimate();
  };

  setListenersAnimate() {
    this.imageWrapper.forEach((element, index) => {
      element.addEventListener('mouseover', (divImage) => {
        element.children[1].style.cssText = ` 
                      transition: 1s;
                      animation: animate 1s ease-in-out both;
                      filter: brightness(1.1) opacity(1);
                      cursor: point;
                      `;
      });
      element.addEventListener('mouseleave', (divImage) => {
        divImage.target.style.transition = `transform 2s`;
        divImage.target.children[1].style.cssText = `
                      animation: animate-out 1s ease-in-out both;
                      filter: brightness(1.1) opacity(1);
                  `;

      });
    });
  };
};
export { Animations };