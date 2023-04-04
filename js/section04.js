"use strict"
//-------Select Elements---------//
const listCarousel = document.querySelector('.section04__content');
let productContent = document.querySelectorAll('.section04__product-content');
const productList = document.querySelectorAll('.section04__product-list')

//-------Object initializer--------//
const state = {
    starting_point: 0,
    current_point: 0,
    movement_point: 0,
    salved_position: 0,
    current_slide_index: 0,
    interator: 0,
    current_id: 0,
    widthWindow: 0
}
/**
 * calculates the width of each image by the width of the viewport
 * 6 = fraction that will be divided by the viewport width
 * 5.6 = fraction of the width of the content
 * 1.02 = gap percentage
 * 3 = number of elements that received the available space equally
 */
function calcWidthViewPort() {

    if (window.innerWidth < 700) {
        console.log('lagura menor que 700px')
        state.widthWindow = window.innerWidth
        console.log(state.widthWindow);
        state.widthWindow = ((((state.widthWindow / 6) * 5.6) * 1.02) / 3);
        console.log(state.widthWindow);

    } else {
        
        state.widthWindow = window.innerWidth
        console.log(state.widthWindow);
        state.widthWindow = ((((state.widthWindow / 6) * 5) * 1.02) / 3);
        console.log(state.widthWindow);
    }
};
calcWidthViewPort();

//-------viewport width capture event-------//
window.addEventListener('resize', () => {

    calcWidthViewPort();
})


//-------Functions-------//
function createClone() {
    let firstProduct = productList[0].cloneNode(true);
    firstProduct.childNodes[1].children[0].setAttribute('data-id', `${productList.length +1}`);
    let secondProduct = productList[1].cloneNode(true);
    secondProduct.childNodes[1].children[0].setAttribute('data-id', `${productList.length +2}`);
    let thirdProduct = productList[2].cloneNode(true);
    thirdProduct.childNodes[1].children[0].setAttribute('data-id', `${productList.length +3}`);


    let lastProduct = productList[productList.length -1].cloneNode(true);
    lastProduct.childNodes[1].children[0].setAttribute('data-id', '0');
    let penultimateProduct = productList[productList.length -2].cloneNode(true);
    penultimateProduct.childNodes[1].children[0].setAttribute('data-id', '-1');
    let antepenultimateProduct = productList[productList.length -3].cloneNode(true);
    antepenultimateProduct.childNodes[1].children[0].setAttribute('data-id', '-2');


    listCarousel.prepend(lastProduct);
    listCarousel.prepend(penultimateProduct);
    listCarousel.prepend(antepenultimateProduct);

    listCarousel.append(firstProduct);
    listCarousel.append(secondProduct);
    listCarousel.append(thirdProduct);

    productContent = document.querySelectorAll('.section04__product-content');
}

function mouseDown(event, index) {
    state.starting_point = event.clientX;
    state.current_id = event.target.dataset.id;
    console.log(state.current_id);
    const slide_item = event.currentTarget;
    slide_item.addEventListener("mousemove", mouseMove);

}

function mouseMove(event) {

    state.current_point = event.clientX - state.starting_point;  
    state.movement_point = state.current_point + state.salved_position;
    listCarousel.style.transition = `none`;
    listCarousel.style.transform = `translateX(${state.movement_point}px)`;

}

function mouseUp(event, index) {
    // save breakpoint
    const slide_item = event.currentTarget;
    slide_item.removeEventListener("mousemove", mouseMove);
    
    if (state.current_point < 35) {

    
        listCarousel.style.transition = `transform 0.35s`;
        console.log(state.salved_position)
        state.movement_point = 0;
        state.movement_point += -state.widthWindow;
        listCarousel.style.transform = `translateX(${(-state.widthWindow + state.salved_position)}px)`;
        state.salved_position += state.movement_point;

        
      
    } else if (state.current_point > 2) {

        listCarousel.style.transition = `transform 0.35s`;
        console.log(state.salved_position)
        state.movement_point = 0;
        listCarousel.style.transform = `translateX(${(state.widthWindow + state.salved_position)}px)`;
        state.salved_position += state.widthWindow;

        
    }
}

createClone();
//-------Events-------//
productContent.forEach((slide_item, index) => {

    slide_item.addEventListener("dragstart", e => e.preventDefault());
    slide_item.addEventListener("mousedown", event => mouseDown(event, index));
    slide_item.addEventListener("mouseup", mouseUp);

});