"use strict"
const listCarousel06 = document.querySelector('.section06__content');
let productContent06 = document.querySelectorAll('.section06__product-content');
const productList06 = document.querySelectorAll('.section06__product-list');

const state06 = {
    starting_point06: 0,
    current_point06: 0,
    movement_point06: 0,
    salved_position06: 0,
    current_slide_index06: 0,
    widthWindow06: 0
}

function calcWidthViewPort06() {
    
    let position = productList06[state06.current_slide_index06].offsetLeft;
    state06.salved_position06 = -position;
    translateX06(-position); 
}

function setVisibleSlide06({event}) {
    
    listCarousel06.style.transition = `transform 0.35s`;
    let position = productList06[state06.current_slide_index06].offsetLeft;; 

    translateX06(-position); 
    state06.salved_position06 = -position;    
}


function translateX06(position) {
    listCarousel06.style.transform = `translateX(${position}px)`;
}

function nextSlide06({event}) {

    setVisibleSlide06({event: event})
}

function previouSlide06({event}) {
    
        setVisibleSlide06({event: event});
}

function removeEvents06(event) {
    const slide_item = event.currentTarget;
    slide_item.removeEventListener("mousemove", mouseMove06);
    productContent06.forEach(element => {
        element.removeEventListener("mousemove", mouseMove06);
    });
}

function mouseDown06(event, index) {

    state06.starting_point06 = event.clientX;
    const slide_item = event.target.parentNode.parentNode;

    slide_item.addEventListener("mousemove", mouseMove06);
    slide_item.addEventListener("touchmove", touchMove06);  
}

function mouseMove06(event) {
    state06.current_point06 = event.clientX - state06.starting_point06;  
    state06.movement_point06 = state06.current_point06 + state06.salved_position06;
    listCarousel06.style.transition = `none`;
    listCarousel06.style.transform = `translateX(${state06.movement_point06}px)`;  
}

function mouseUp06(event, index) {
    removeEvents06(event);

    state06.widthWindow06 = window.innerWidth;
    state06.current_slide_index06 = index;
    let position = productList06[index].offsetLeft;; 
    if (index == 0) {
        previouSlide06({evente: event})
    }
    
    if (state06.current_point06 > 30 && !index == 0) {

        if (state06.widthWindow06 > 900) {

            if (index == 0 || index == 1 || index == 2) {
                state06.current_slide_index06 = 0;
            } else {
                state06.current_slide_index06 = index - 3; 
            }

        } else if (state06.widthWindow06 > 700) {

            if (index == 0 || index == 1) {
                state06.current_slide_index06 = 0;
            } else {
                state06.current_slide_index06 = index - 2; 
            }

        } else if (state06.widthWindow06 > 300) {
            state06.current_slide_index06--
        }
        previouSlide06({event: event});
    } 
    
    if (state06.current_point06 < -50) {
        
        position = productList06[index].offsetLeft;
        
        if (position >= productList06[productList06.length -3].offsetLeft && state06.widthWindow06 > 900) {
           state06.current_slide_index06 = (productList06.length - 4)
            
        } else if (position >= productList06[productList06.length -2].offsetLeft && state06.widthWindow06 > 700) {
            state06.current_slide_index06 = (productList06.length - 3)
  
        } else if (position >= productList06[productList06.length -1].offsetLeft && state06.widthWindow06 > 300) {
            state06.current_slide_index06 = (productList06.length - 2)

        }
        nextSlide06({event: event});
    }
}

function touchStart06(event, index) {
    event = event.targetTouches[0];
    mouseDown06(event, index);
}

function touchMove06(event) {
    event = event.targetTouches[0];
    mouseMove06(event);
}

function touchEnd06(event, index) {
    event = event;
    mouseUp06(event, index);
}

function setListeners06(params) {
    listCarousel06.addEventListener("dragstart", e => 
    {
        e.preventDefault();
        
    });
    productContent06.forEach((slide_item, index) => {
    
        slide_item.addEventListener("dragstart", e => e.preventDefault());
        slide_item.addEventListener("mousedown", event => mouseDown06(event, index));
        slide_item.addEventListener("mouseup", event => mouseUp06(event, index));

        slide_item.addEventListener("touchstart", event => touchStart06(event, index));
        slide_item.addEventListener("touchend", event => touchEnd06(event, index));
    
    });

    window.addEventListener('resize', calcWidthViewPort06);
    
}
setListeners06();

/*------- Efects Hover -------*/
let img06 = document.querySelectorAll('.section06__product-img06');
let imageWrapper06 = document.querySelectorAll('.section06__wrapper-image');



function setListeners06Animate06() {
    imageWrapper06.forEach((element, index) => {
    element.addEventListener('mouseover', (divImage) => {
            element.children[1].style.cssText = ` 
                transition: 1s;
                animation: animate 0.5s ease-in-out both;
                filter: brightness(1.1) opacity(1);
                cursor: point;
                `;       
        });
        element.addEventListener('mouseleave', (divImage) => {
            divImage.target.style.transition = `transform 2s`;
            divImage.target.children[1].style.cssText = `
                animation: animate-out 0.5s ease-in-out both;
                filter: brightness(1.1) opacity(1);
            `;

        });
    }); 
}

function callListenersAnimate06() {
    setListeners06Animate06();
};
callListenersAnimate06();