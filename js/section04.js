const listCarousel = document.querySelector('.section04__content');
const productContent = document.querySelectorAll('.section04__product-content');
const productList = document.querySelectorAll('.section04__product-list')


let widthWindow = window.innerWidth;
widthWindow = (((widthWindow / 6) * 5) / 3);
console.log(widthWindow);


window.addEventListener('resize', () => {

    widthWindow = window.innerWidth
    widthWindow = (((widthWindow / 6) * 5) / 3);
    console.log(widthWindow);


    if (window.innerWidth < 900) {
        let width = window.innerWidth;


        // console.log('opa chogou em: ' + width);

        // listCarousel.forEach(element => {

        //     element.style.cssText = `

        //         display: flex; 
        //         flex-direction: row;
        //         overflow: auto;

        //     `;
        // })
    }
})

const state = {
    starting_point: 0,
    current_point: 0,
    movement_point: 0,
    salved_position: 0,
    current_slide_index: 0
}

function mouseDown(event, index) {
    state.starting_point = event.clientX;
    const slide_item = event.currentTarget;
    slide_item.addEventListener("mousemove", mouseMove);

}

function mouseMove(event) {
    state.current_point = event.clientX - state.starting_point;
    state.movement_point = state.current_point - state.salved_position;
    const slide_item = event.currentTarget;
    console.log(state.current_point);

    productList.forEach(element => {
        element.style.transform = `translateX(${state.movement_point}px)`;
    })
}

function mouseUp(event, index) {
    state.salved_position += widthWindow;
    const slide_item = event.currentTarget;
    slide_item.removeEventListener("mousemove", mouseMove);


    if (state.current_point < 35) {
        console.log('ok entrei')
        let interator = 5;
        
        function animaTransition() {
            
            productList.forEach(item => {
                item.style.transform = `translateX(-${interator}px)`;
            });
     
            if (widthWindow > interator) {
                interator += 5;
                requestAnimationFrame(animaTransition);
            }
        }
        
        animaTransition();

 
    }








        // function incrementWidthContent() {
        //     if (state.salved_position > i) {
        //         setInterval(incrementWidth(), 1000);

        //         function incrementWidth() {

        //             productList.forEach(element => {
        //                 element.style.transform = `translateX(-${i}px)`;
        //                 element.style.transition = "0.5s both ease-in-out";
        //             })
        //             i++
        //             incrementWidthContent()
        //         }
        //     }
        // }
        // incrementWidthContent()

    
}

productContent.forEach((slide_item, index) => {

    slide_item.addEventListener("dragstart", e => e.preventDefault());
    slide_item.addEventListener("mousedown", event => mouseDown(event, index));
    slide_item.addEventListener("mouseup", mouseUp);

});