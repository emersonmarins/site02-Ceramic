import { renderCartProducts } from '../../ShoppingCarts/views/RenderCartProducts.js';
import { cartController } from "../../ShoppingCarts/Controller/CartController.js";
import { effects } from "../Views/effects.js";

class CarouselFunctions {
  constructor(dataBase) {
    this.dataBase = dataBase;
    this.callFunctionId = true;
    this.objectProduct = [];
    this.cart;
    this.renderCartProducts;
    this.cartController = cartController;
    this.renderCartProducts = renderCartProducts;

    this.initListener();
  };

  addProductLocalStorage(element) {
    let userid = {
      url: element.url,
      sku: element.sku,
      id: element.id,
      title: element.title,
      description: element.description,
      price: element.price,
      category: element.category,
      stock: element.stock,
      quantityItems: 1
    }
    Object.defineProperty(this.objectProduct, `${this.objectProduct.length++}`, {
      value: userid,
    })

    localStorage.setItem(`user`, JSON.stringify(this.objectProduct));
    this.objectProduct = [];
  }

  async dbGet(id) {
    /**
     * 1 - Armazenar na variável this.objectProduct um objeto que guarda os 
     *     produtos que estão no carrinho
     * 2 - Verificar se o this.objectProduct é null, caso seja atribuir um valor vazio
     * 3 - procurar o produto no banco de dados
     * 4 - chamar a função this.addProductLocalStorage(element) p/ add o produto
     *     caso seja o primeiro produto add ao carrinho
     * 5 - Caso o carrinho já tenha algum produto verificar se o produto 
     *     já tem no carrinho, caso tenha atribuir o valor de true na va
     *     riável productRepeat para true impedindo que a mesma add 2 produtos iguais
     *     OBS: Implementar uma lógica para add mais uma unidade caso o produto seja repetido.
     * 6 - Caso já tenha produto no carrinho e não seja repetido add o produto ao carrinho
     *  
     */
    this.objectProduct = await JSON.parse(localStorage.getItem("user"))
    if (this.objectProduct == null) {
      this.objectProduct = []
    }

    this.dataBase.products.forEach((element) => {
      if (element.id === id) {

        // Verifica se não tem produtos no array
        if (this.objectProduct.length == 0) {
          // ADD PRODUCT IN LOCALSTORAGE
          this.addProductLocalStorage(element)
        } else {

          // Verifica se o produto já tem no array
          let productRepeat = false;
          this.objectProduct.forEach((el) => {
            if (el.id == id) {

              productRepeat = true
            }
          })

          if (!productRepeat) {
            // ADD PRODUCT IN LOCALSTORAGE
            this.addProductLocalStorage(element)
            return
          }
        };
        return
      };
    });

  } // ok

  clearEmptyCart() {
    // como add um produto ele esconde a mensagem carrinho vazio, 
    // essa função deve ser passada para o componente ShoppingCart,
    // pois não se trata da competencia do carrosel definir isso.
    const message = document.querySelector('.cart__emptyCart');
    message.classList.add('hidden');
  } // ok
  // Verificar qual comportamento não esperado, pois apresenta um sintoma de loop
  // por ser necessário fazer um this.callFunctionId = false impedindo de entrar no
  // carrinho novamente em 0.2 milisegundos!!!
  shoppingCarts(event) {
    event.preventDefault();
    if (this.callFunctionId) {
      this.clearEmptyCart();
      const id = Number(event.target.getAttribute('id'));// Pega o ID para identificar o item
      this.dbGet(id);
      this.callFunctionId = false;
      let time = setTimeout(() => {
        this.callFunctionId = true;
        let dataBaseLS = JSON.parse(localStorage.getItem("user"));
        if (dataBaseLS.length === 0) {
          
        }
        console.log(dataBaseLS)
        this.renderCartProducts.reloadCart('remove',dataBaseLS);
        this.cartController.updateEventListeners(); 
      }, 400);
    }
  };

  initListener() {
    /**
     * 1 - Primeiro salvar os buttons de adicionar ao carrinho em uma variável 
     * 2 - fazer um for em todos os buttons e add um evento de click
     */
    this.cart = document.querySelectorAll('.bi-cart3');

    this.cart.forEach((element) => {
      element.addEventListener('click', (event) => {
        this.shoppingCarts(event);
        effects.scale1X(event);
      });
    });
  };


};
export { CarouselFunctions }