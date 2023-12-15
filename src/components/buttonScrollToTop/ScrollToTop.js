class ScrollToTop {
  constructor(pageType) {
    this._pageType;
    this.pageType = pageType;
    this.initButton(pageType);
  };
  set pageType(pageType){
    if (pageType === 'generic') {
      this._pageType = '../../../components/';
    } else if (pageType === 'main') {
      this._pageType = './src/components/';
    } else if(typeof(pageType) === 'string'){
      this._pageType = 'Error reading page type!. Insert generic or main';
    } else if(typeof(pageType) === 'undefined'){
      this._pageType = 'Error no property inserted when instantiating the class!. Insert generic or main';
    } else if(pageType === null || typeof(pageType) === 'number'){
      this._pageType = 'Invalid property type error!. Enter a string called generic or main';
    }
  }
  get pageType(){
    return this._pageType;
  }
  initButton(pageType){
    if (pageType === 'generic' || pageType === 'main') {
      this.createButton();
      this.addLink();
      this.addEventListener();
    } else {
      console.log(`%c${this._pageType}`,"color:#d00;");
      return
    }
  }
  createButton() {
    this.divWrapper = document.createElement('div');
    this.divWrapper.classList.add('btn__scroll-to-top', 'js-btn__scroll-to-top');
    this.divWrapper.innerHTML = `<button id="scrollToTopButton" class="scroll-button" aria-label="Scroll to Top">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2L20 10H14V18H10V10H4L12 2Z"/></svg></button>
    `;
    document.body.appendChild(this.divWrapper);

  };
  addLink() {
    this.linkStyleCss = document.createElement('link');
    this.linkStyleCss.rel = 'stylesheet';
    this.linkStyleCss.href = `${this._pageType}buttonScrollToTop/index.css`;
    document.head.appendChild(this.linkStyleCss);
  };
  scrollToTop() {
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
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
  addEventListener() {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) {
        document.getElementById('scrollToTopButton').classList.add('show');
      } else {
        document.getElementById('scrollToTopButton').classList.remove('show');
      }
    });

    document.getElementById('scrollToTopButton').addEventListener('click', e => this.scrollToTop());

  };
};

export { ScrollToTop };