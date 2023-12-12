class RenderSearch {
  constructor(){
    this.suggestionsElementsList;
  };
  closeSearchField(fieldSuggest,seachContainer){
    fieldSuggest.classList.add('hidden');
    seachContainer.removeAttribute('style');
  }; // ok
  openSearchField(seachContainer,suggestionsElementsList,fieldSuggest){
    seachContainer.style.cssText = `animation: showSearchInput 1s ease-in-out both;`
    suggestionsElementsList !== undefined && suggestionsElementsList.length > 0 && fieldSuggest.classList.remove('hidden');
  }; // ok
  removeAccents(text) {
    // Remove os acentos das strings
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  };
  deleteSuggestions(suggestionsElementsList) {
    // Deleta a lista de sugestões
    suggestionsElementsList.forEach(element => element.remove());
  }; // ok
};

export { RenderSearch };