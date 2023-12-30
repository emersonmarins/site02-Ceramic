class MoveCarousel {
  constructor(containerWrapper) {
    this.carouselWrapper = document.querySelector('.container-carousel');
    this.listCarousel = containerWrapper;
    this.productContent = document.querySelectorAll('.container-carousel__product-content');
    this.productList = document.querySelectorAll('.container-carousel__product-list');
    this.setWidth();
    this.widthItemCarousel;
    this.starting_point = 0;
    this.current_point = 0;
    this.movement_point = 0;
    this.salved_position = 0;
    this.current_slide_index = 0;
    this.widthWindow = 0;
    // Events
    
    this.handleMouseMove = this.mouseMove.bind(this);
    this.handleTouchMove = this.touchMove.bind(this);
    this.listCarousel.addEventListener('mousedown', this.mouseDown.bind(this));
    this.listCarousel.addEventListener('mouseup', this.mouseUp.bind(this));
    this.initEventListeners();

  };

  setWidth(){
    this.widthItemCarousel = this.carouselWrapper.clientWidth;
    document.documentElement.style.setProperty('--section-container-width', `${this.widthItemCarousel}px`);
    document.documentElement.style.setProperty('--width-2-items', `${Math.ceil(this.widthItemCarousel / 2)}px`);
    document.documentElement.style.setProperty('--width-3-items', `${Math.ceil(this.widthItemCarousel / 3)}px`);
    document.documentElement.style.setProperty('--width-4-items', `${Math.ceil(this.widthItemCarousel / 4)}px`);

  }
  translateX(position, salve = true) {
    this.listCarousel.style.transform = `translateX(${position}px)`;
    
    if (salve) {
      this.salved_position = position;
    }
  } // ok

  calcWidthViewPort() {
    this.translateX(0);
  }

  setVisibleSlide(position) {
    this.widthWindow = document.documentElement.clientWidth;
    
    if (position > 0) {
      position = 0
    }
    if (this.widthWindow <= 500) {
      if (position < -(this.productList.length - 1) * this.carouselWrapper.clientWidth) {
        position = -(this.productList.length - 1) * this.carouselWrapper.clientWidth
      }
    } else if (this.widthWindow <= 700) {
      if (position < -(this.productList.length - 2) * (this.carouselWrapper.clientWidth / 2)) {
        position = -(this.productList.length - 2) * (this.carouselWrapper.clientWidth / 2)
      }
    } else if (this.widthWindow <= 900) {
      if (position < -(this.productList.length - 3) * (this.carouselWrapper.clientWidth / 3)) {
        position = -(this.productList.length - 3) * (this.carouselWrapper.clientWidth / 3)
      }
    } else {
      if (position < -(this.productList.length - 4) * (this.carouselWrapper.clientWidth / 4)) {
        position = -(this.productList.length - 4) * (this.carouselWrapper.clientWidth / 4)

      }
    }

    this.listCarousel.style.transition = `transform 0.35s`;
    this.translateX(position);

  } // ok

  nextSlide(index) {

    this.setVisibleSlide(-((this.productList[1].offsetWidth * index) - (this.salved_position)));
  } // ok

  previouSlide(index) {

    this.setVisibleSlide((this.productList[1].offsetWidth * index) + (this.salved_position));
  } // ok

  mouseMove(event) {
    this.movement_point = event.clientX - this.starting_point;
    this.position = this.movement_point + this.current_point;
    this.translateX(this.position, false);
  } // ok

  mouseDown(event) {

    this.listCarousel.style.transition = `none`;
    this.current_point = this.salved_position;
    this.starting_point = event.clientX;


    this.listCarousel.addEventListener("mousemove", this.handleMouseMove);
    this.listCarousel.addEventListener("touchmove", this.handleTouchMove);
  } // ok

  mouseUp(event) {

    this.listCarousel.removeEventListener("mousemove", this.handleMouseMove);
    this.listCarousel.removeEventListener("touchmove", this.handleTouchMove);

    let mvp = -(this.movement_point); // mvp = moviment point positive
    let mvn = this.movement_point; // mvp = moviment point negative
    let width = this.productList[0].offsetWidth; // product item width

    if (mvp > 100 && mvn < -40) {
      this.nextSlide(1)
    } else if (mvp <= (width * 2) && mvn < -40) {
      this.nextSlide(2)

    } else if (mvp <= (width * 3) && mvn < -40) {
      this.nextSlide(3)

    } else if (mvn <= width && mvn > 40) {
      this.previouSlide(1)

    } else if (mvn <= (width * 2) && mvn > 40) {
      this.previouSlide(2)

    } else if (mvn <= (width * 3) && mvn > 40) {
      this.previouSlide(3)

    } else {
      this.setVisibleSlide(this.salved_position);

    }
    this.movement_point = 0;
  }// ok

  touchStart(event) {
    event.clientX = event.touches[0].clientX;
    this.mouseDown(event);
  } // ok

  touchMove(event) {
    event.clientX = event.touches[0].clientX;
    this.mouseMove(event);
  } // ok

  touchEnd(event) {
    this.mouseUp(event);
  } // ok

  initEventListeners() {
    /**
     * 1 - Previnir o evendo de Dragstart
     * 2 - Atribuir eventos de mousedown, mouseup, touchstart e touchend,
     *     para todos os elementos do carousel.
     * 3 - add o evendo de Resize, para adequar a largura dos elementos de acordo com a modificação
     *     da largura da tela.
     * 4 - chamar o this.translateX para posicionar o primeiro produto no canto esquerdo do carousel.
     * 5 - 
     * 
     */
    // this.listCarousel.addEventListener("dragstart", e => e.preventDefault());

    this.productContent.forEach((slide_item, index) => {

      slide_item.addEventListener("dragstart", e => e.preventDefault());
      slide_item.addEventListener("mousedown", e => { this.current_slide_index = index; });

      slide_item.addEventListener("touchstart", event => this.touchStart(event));
      slide_item.addEventListener("touchend", event => this.touchEnd(event));

    });

    window.addEventListener('resize', e => {
      this.setWidth();
      this.calcWidthViewPort();
    });
    this.translateX(-(this.productList[1].offsetWidth * 0));


  } // ok

};

export { MoveCarousel };