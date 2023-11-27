import { dataBase } from "../../pages/store/model/db_product.js";

class ProductSearch {
  constructor(database) {
    this.database = database;
    this.seachContainer = document.querySelector(".search-container");
    this.fieldSuggest = document.querySelector(".textareaSearch");
    this.buttonSearchShow = document.querySelector(".search-icon > .bi.bi-search");
    this.buttonSearch = document.querySelector(".search-container > .bi.bi-search");
    this.inputSearch = document.querySelector(".search-container > .search-input");
    this.stateMenu = true;
    this.newDataBase;
    this.suggestionsElementsList;
    this.initEventListeners();
  };
  initEventListeners() {
    /**
     * 1 - Add o evento de click no icon de search
     * 2 - Chamar o método this.updateElements() para atualizar a propriedade this.suggestionsElementsList.
     * 3 - Add condicional para quando o menu for abrir inserir uma animação de abertura e verificar se o campo
     *     de suggestions está vazio para inserir a class hidden e caso tenha sugestões remover a class hidden
     * 4 - Alterar o estado do atributo this.stateMenu com um valor Boolean para saber se está fechado ou aberto.
     */
    this.buttonSearchShow.addEventListener('click', () => {
  
      
      this.updateElements();

      if (!this.stateMenu) { // Close Field Search
        this.fieldSuggest.classList.add('hidden');
        this.seachContainer.removeAttribute('style');
        
      } else if (this.stateMenu) { // Open Field Search
        this.seachContainer.style.cssText = `animation: showSearchInput 1s ease-in-out both;`
        this.suggestionsElementsList !== undefined && this.suggestionsElementsList.length > 0 && this.fieldSuggest.classList.remove('hidden');
      }
      this.stateMenu = !this.stateMenu;

    });

    /**
     * 1 - Add o evento de keyup no campo de busca
     * 2 - Atribuir o valor do campo ao atributo this.textSearch
    */
    this.inputSearch.addEventListener('keyup', () => {
      this.textSearch = this.inputSearch.value;
      this.suggestProduct();
    });
    /**
     * 1 - Add um evento de click ao this.buttonSearch
     * 2 - Implementar a lógica para chamar a classe construtora da página de produto
     *     construindo a página com base no array de produto que a pessoa está buscando
     */
    this.buttonSearch.addEventListener('click', () => this.suggestProduct());
  };
  removeAccents(text) {
    // Remove os acentos das strings
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  };
  updateElements() {
    // Atualiza a lista de sugestões
    this.suggestionsElementsList = document.querySelectorAll(`.textareaSearch a`);
  };
  deleteSuggestions() {
    // Deleta a lista de sugestões
    this.updateElements();
    this.suggestionsElementsList.length > 0 && this.suggestionsElementsList.forEach(element => element.remove());
  };
  suggestProduct() {
    /** 
     * 1 - verificar se a string não esta vazia caso esteja chama a função deleteSuggestions para deletar o campo de sugestões caso haja
     * 2 - verificar se a palavra no input tem no banco de dados da loja
     * 3 - criar um novo array com as palavras que correspondem a busca
     * 4 - verificar se o novo array está vazio 
     * 5 - Se o novo array estiver vazio deletar os elementos filhos no campo de suggestions caso haja tais elementos
     * 6 - Verificar se o novo array tem mais de 7 indices caso seja menor, atribuir o valor do comprimento do array na variável contadora.
     * 7 - Deletar os elementos Suggestions antes de criar um novo campo de susgestões
    */
    if (!/^\s*$/.test(this.textSearch)) {
      let regExp = new RegExp(`\^${this.textSearch}`, 'i');
      this.newDataBase = dataBase.products.filter(product => regExp.test(this.removeAccents(product.title)));

      if (this.newDataBase.length > 0) {

        let maxLength = this.newDataBase.length < 7 ? this.newDataBase.length : 7;
        this.deleteSuggestions();
        this.fieldSuggest.classList.remove('hidden');
        for (let index = 0; index < maxLength; index++) {
          let link = document.createElement('a');
          link.href = "#";
          regExp = new RegExp(`${this.removeAccents(this.textSearch)}.*`, 'i');
          link.innerText = regExp.exec(this.removeAccents(this.newDataBase[index].title));
          this.fieldSuggest.appendChild(link);
        };

      } else {
        this.fieldSuggest.classList.add('hidden');
        this.deleteSuggestions();
      }
    } else {
      this.fieldSuggest.classList.add('hidden');
      this.deleteSuggestions();
    }
  };
  searchProduct(query) {
    // Implementar lógica para buscar produtos no banco de dados
    // utilizando o parâmetro query
  };
};
new ProductSearch();



