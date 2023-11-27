"use strict"

export function startCarousel() {

    const carouselWrapper = document.querySelector('.section04');
    const listCarousel = document.querySelector('.section04__content');
    let productContent = document.querySelectorAll('.section04__product-content');
    const productList = document.querySelectorAll('.section04__product-list');

    const state = {
        starting_point: 0,
        current_point: 0,
        movement_point: 0,
        salved_position: 0,
        current_slide_index: 0,
        widthWindow: 0
    }

    function translateX(position, salve = true) {
        listCarousel.style.transform = `translateX(${position}px)`;

        if (salve) {
            state.salved_position = position;
        }
    }

    function calcWidthViewPort() {

        let position = productList[0].offsetLeft;
        state.salved_position = -position;
        translateX(-position);
    }


    function setVisibleSlide(position) {
        if (position > 0 || -(position) >= (productList[0].offsetWidth) * (productList.length - 3)) {
            position = state.salved_position;
        }
    

        listCarousel.style.transition = `transform 0.35s`;
        translateX(position);
    }

    function nextSlide(index) {

        setVisibleSlide(-((productList[1].offsetWidth * index) - (state.salved_position)));
    }

    function previouSlide(index) {

        setVisibleSlide((productList[1].offsetWidth * index) + (state.salved_position));
    }

    function removeEvents(event) {
        const slide_item = event.currentTarget;
        slide_item.removeEventListener("mousemove", mouseMove);
        slide_item.removeEventListener("mousemove", touchMove);

        productContent.forEach(element => {
            element.removeEventListener("mousemove", mouseMove);
            element.removeEventListener("touchmove", touchMove);
        });
    }

    function mouseMove(event) {
        state.movement_point = event.clientX - state.starting_point;
        state.position = state.movement_point + state.current_point;
        listCarousel.style.transition = `none`;
        translateX(state.position, false);
    }

    function mouseDown(event, index) {

        const slide_item = event.currentTarget;
        state.starting_point = event.clientX;
        state.current_point = state.salved_position;
        state.current_slide_index = index;


        slide_item.addEventListener("mousemove", mouseMove);
        slide_item.addEventListener("touchmove", touchMove);
    }

    function mouseUp(event) {

        removeEvents(event);
        let mvp = -(state.movement_point); // mvp = moviment point positive
        let mvn = state.movement_point; // mvp = moviment point negative
        let width = productList[0].offsetWidth; // product item width

        if (mvp <= width && mvn < -40) {
            nextSlide(1)

        } else if (mvp <= (width * 2) && mvn < -40) {
            nextSlide(2)

        } else if (mvp <= (width * 3) && mvn < -40) {
            nextSlide(3)

        } else if (mvn <= width && mvn > 40) {
            previouSlide(1)

        } else if (mvn <= (width * 2) && mvn > 40) {
            previouSlide(2)

        } else if (mvn <= (width * 3) && mvn > 40) {
            previouSlide(3)
            
        } else {

            setVisibleSlide(state.salved_position);

        }
    }

    function touchStart(event, index) {
        event.clientX = event.touches[0].clientX;
        mouseDown(event, index);
    }

    function touchMove(event) {
        event.clientX = event.touches[0].clientX;
        mouseMove(event);
    }

    function touchEnd(event) {
        mouseUp(event);
    }

    function setListeners(params) {
        listCarousel.addEventListener("dragstart", e => e.preventDefault());

        productContent.forEach((slide_item, index) => {

            slide_item.addEventListener("dragstart", e => e.preventDefault());
            slide_item.addEventListener("mousedown", event => mouseDown(event, index));
            slide_item.addEventListener("mouseup", event => mouseUp(event));

            slide_item.addEventListener("touchstart", event => touchStart(event, index));
            slide_item.addEventListener("touchend", event => touchEnd(event));

        });

        window.addEventListener('resize', calcWidthViewPort);
        translateX(-(productList[1].offsetWidth * 0));


    }
    setListeners();

    /*------- Efects Hover -------*/
    let img = document.querySelectorAll('.section04__product-img');
    let imageWrapper = document.querySelectorAll('.section04__wrapper-image');



    function setListenersAnimate() {
        imageWrapper.forEach((element, index) => {
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
    }

    function callListenersAnimate() {
        setListenersAnimate();
    };
    callListenersAnimate();


}