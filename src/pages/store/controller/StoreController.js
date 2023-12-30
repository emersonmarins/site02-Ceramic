import { dataBase } from "../model/db_product.js";
import { RenderProducts } from "../view/RenderProducts.js";
import { productController } from "../../product/controller/ProductController.js";
import { bemBuilder } from "../../product/view/BemBuilder.js";

/**
 * 1 - Instancia-se a classe porém só será iniciada ao chamar o método:
 *     => initController() <=
 * 
 * 2 - InitController:
 *     
 *     2.1 - Responsável por selecionar todos os elementos necessários e atribuí-los
 *           as propriedades.
 *     2.2 - Instanciar a classe que renderiza os produtos passando 3 argumentos:
 * 
 *           1º(argumento) - Banco de dados
 *           2º(argumento) - Texto do botão de adicionar carrinho
 *           3º(argumento) - Texto do botão comprar agora
 * 
 *     2.3 - Verificar se tem algum filtro de categoria no Local Storage atravéz do atributo this.wordSearch.
 *           Esse filtro é atribuido ao clicar em uma categoria no menu dropdown salvo temporariamente até redirecionar
 *           a página de produtos que renderizará os produtos de acordo com o filtro depois ele será eliminado para não 
 *           gerar efeitos colaterais indesejados.   
 *     2.4 - Chamar o método responsável por iniciar os eventListenners:
 * 
 *           1º(evento) - É chamado toda vez que clicar no botão Filtrar:
 *                        
 *                        LÓGICA:no Local Storage
 *                          2.4.1 - Esvaziar o array que guarda o nome das categorias que foram selecionadas 
 *                                  garantindo que sempre esteja vazio antes de atribuir os novos valores.
 *                          2.4.2 - Interar sobre todo os elementos de ""input type: check"" verificar qual que foi
 *                                  selecionado e adicionar ao array "this.categoryItems"
 *                          2.4.3 - Atribuir a variável this.maxPriceFilter o valor máximo selecionado no filtro Price.
 *                          2.4.4 - Verificar se o valor do this.maxPriceFilter continua sendo o Default e se o array 
 *                                  do atributo this.categoryItems está vazio, caso os dois filtros passem significa, que
 *                                  nada foi alterado e não a necessidade de renderizar os mesmos produtos que já estão na
 *                                  página.
 *                          2.4.5 - Chamar o método filterProducts passar um parametro com o type boolean e valor true informando
 *                                  ao filterProducts que faça o filtro de acordo com os filtros selecionados
 *                                  caso contrário ele irá filtrar pela categoria salva no localStore, que é salva quando 
 *                                  se clica em uma categoria do menu dropdown.
 *                                  Essa função não retorna o novo array de produtos, antes salva em um atributo chamado 
 *                                  this.productsNewArray e então no método this.filterProduct irá chamar o método 
 *                                  this.renderProductsInit que é responsavel por renderizar os produtos na tela 
 *                                  ver a lógica da implementação do método filterProducts no item 3,
 *                                  ver a lógica da implementação do método this.renderProductsInit no item 4.
 *                          2.4.6 - Chamar o método renderProduct que será responsável por adicionar o evento de click
 *                                  nos produtos para quando clicar redenrizar página do produto em questão, utilizando 
 *                                  a renderização dinamica como na primícia do SinglePage, 
 *                                  ver a lógica da implementação do método renderProduct no item 5.
 * 
 *           2º(evento) - É responsável pela alteração de todos os estados do bottões tipo check do filtro para true.
 *
 *                        LÓGICA:
 *                          2.4.7 - Verifica se o botão selectAllCategory está selecionado caso esteja seta os demais estados
 *                                  dos outros botões de filtro type check para true, caso não esteja para false.
 * 
 *           3º(evento) - "CHANGE" => Evento para abrir a aba de filtro, usado apenas nas resoluções abaxo ou igual a 580px.
 *           4º(evento) - "DOMContentLoaded" => Evento responsavel por esconder a coluna do filtro em resoluções abaixo ou 
 *                                              igual á 580px e verificar se existe um filtro de categoria salvo no atributo
 *                                              this.wordSearch caso tenha chama o filter que renderizará os produtos de acordo
 *                                              como filtro.
 *           5º(evento) - "RESIZE" => Responsável por esconder e mostrar a coluna de filtro de acordo com a resolução ao fazer o 
 *                                    o redimencionamento da tela.
 * 
 *     2.5 - Chamar o método renderProduct que será responsável por adicionar o evento de click nos produtos para quando clicar 
 *           redenrizar página do produto em questão, utilizando a renderização dinamica como na primícia do SinglePage, 
 *           ver a lógica da implementação do método renderProduct no item 5.
 * 
 *  3 - filterProducts:
 * 
 *  4 - renderProductsInit:
 * 
 *  5 - renderProduct:
 * 
 * 
 */ 

class StoreController {
  constructor(className, addCartBtn, buyNowBtn) {
    this.categoryInputElements;
    this.categoryItemsElement;
    this.buttonFilterElement;
    this.maxPriceFilterElement;
    this.selectAllCategoryElement;
    this.filterListElement;
    this.filterPriceElement;
    this.openFilterMenu;
    this.categoryItems = [];
    this.productsNewArray = { products: [] };
    this.maxPriceFilter;
    this.stateMenuOpen = false;
    this.dataBase = dataBase;

    this.wordSearch = localStorage.getItem('category');
    this.className = className;
    this.addCartBtn = addCartBtn;
    this.buyNowBtn = buyNowBtn;
    this.renderProducts;


  };
  filterProducts(btnSearch = false) {

    this.productsNewArray.products = [];
    
    if (btnSearch) {
      if (this.categoryItems[0] === 'all category' || this.categoryItems.length === 0 ) {
        this.productsNewArray.products = this.dataBase.products.filter(element => { return element.price <= this.maxPriceFilter });

      } else {
        dataBase.products.forEach(element => {
            for (let index = 0; index < this.categoryItems.length; index++) {
              const regexString = this.categoryItems[index] + '.*';
              if (new RegExp(regexString, 'i').test(element.category) && Number(element.price) <= this.maxPriceFilter) {
                this.productsNewArray.products.push(element);
              };
            };
        });
      };

      this.renderProductsInit();
    } else {
      this.wordSearch = this.removeAccents(localStorage.getItem('category'));
      dataBase.products.forEach(element => {
        const regexString = this.wordSearch + '\.*';
        if (new RegExp(regexString, 'i').test(this.removeAccents(element.title))) {
          this.productsNewArray.products.push(element);
        };
      });
      localStorage.removeItem('category');
      this.renderProductsInit();

    }
  };
  initEventListener(categoryInputElements) {

    this.buttonFilterElement.addEventListener('click', (e) => {
      this.categoryItems = [];
      this.categoryItemsElement.forEach(element => {
        if (element.previousElementSibling.firstElementChild.checked) {
          this.categoryItems.push(element.dataset.items.replaceAll('-', ' '));
        };
      });

      this.maxPriceFilter = Number(this.maxPriceFilterElement.value.replace('R$', '').trim());

      if (this.maxPriceFilter === 525 && this.categoryItems.length === 0) {
        return
      } else {
        this.filterProducts(true);
      }

    });

    this.selectAllCategoryElement.addEventListener('change', function () {
      if (this.checked) {
        categoryInputElements.forEach(element => {
          element.checked = true
        })
      } else {
        categoryInputElements.forEach(element => {
          element.checked = false
        })
      }

    });

    this.openFilterMenu.addEventListener('click', () => {
      if (window.innerWidth <= 580) {
        this.filterListElement.classList.toggle('hidden');
        this.filterPriceElement.classList.toggle('hidden');
        this.stateMenuOpen = !this.stateMenuOpen;
      }
    })

    document.addEventListener('DOMContentLoaded', () => {
      if (window.innerWidth <= 580) {
        this.filterListElement.classList.add('hidden');
        this.filterPriceElement.classList.add('hidden');
      } else {
        this.filterListElement.classList.remove('hidden');
        this.filterPriceElement.classList.remove('hidden');
      }
      if (this.wordSearch) {
        this.filterProducts();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 580) {
        this.filterListElement.classList.remove('hidden');
        this.filterPriceElement.classList.remove('hidden');
      } else if (window.innerWidth <= 580 && !this.stateMenuOpen) {
        this.filterListElement.classList.add('hidden');
        this.filterPriceElement.classList.add('hidden');
      }
    });

  };
  initController() {
    this.categoryInputElements = document.querySelectorAll('.js-category__input');
    this.categoryItemsElement = document.querySelectorAll('.category__items');
    this.buttonFilterElement = document.querySelector('.price__btn-filter');
    this.maxPriceFilterElement = document.querySelector('.price__output');
    this.selectAllCategoryElement = document.querySelector('input[data-check="all-category"]');
    this.filterListElement = document.querySelector('.filter__list');
    this.filterPriceElement = document.querySelector('.filter__price');
    this.openFilterMenu = document.querySelector('.filter__title');
    this.renderProducts = new RenderProducts(dataBase, this.className, this.addCartBtn, this.buyNowBtn);
    !this.wordSearch && ( this.renderProducts.renderProducts(), this.renderProduct());
    this.initEventListener(this.categoryInputElements);
    // document.addEventListener('DOMContentLoaded', () => {
    //     this.renderProduct();
    // });

  };
  renderProduct() {
    
    let elementsItems = document.querySelectorAll('.main__products > .products__item');
    elementsItems.forEach(element => {
      element.addEventListener('click', (e) => {
        e.stopPropagation();

        if (/item__add-cart-btn.*/.test(e.target.className)) {
          productController._productId =  element.dataset.id;
          productController.filterProduct();
          productController.addProductToCart(1);
          return
        } else {
          productController.productId = element.dataset.id;
          const currentProduct = productController.filterProduct();
          productController.renderProduct('.main',currentProduct);
        };

      });
    });

  };
  deleteProducts() {
    this.renderProducts.deleteProducts();
  };
  renderProductsInit() {
    this.deleteProducts();
    this.renderProducts.dataBase = this.productsNewArray;
    this.renderProducts.renderProducts();
    this.renderProduct();
    document.addEventListener('DOMContentLoaded', () => {
  });
  };
  removeAccents(text) {
    // Remove os acentos das strings
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  };

};


const storeController = new StoreController('main__products', 'add carrinho', 'comprar agora');
export { storeController };

