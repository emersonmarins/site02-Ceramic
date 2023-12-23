class ContactForm {
  constructor(path) {
    this.formulario = document.createElement('form');
    this.formulario.id = 'contactForm';
    this.pathCall = path;
    this._path;
    this.pathCurrent = path;

    this.adicionarCampo('Nome:', 'text', 'name', true);
    this.adicionarCampo('E-mail:', 'email', 'email', true);
    this.adicionarCampo('Mensagem:', 'textarea', 'message', true);

    let submitButton = document.createElement('button');
    submitButton.textContent = 'Enviar';
    this.formulario.appendChild(submitButton);

    submitButton.addEventListener('click', this.enviarFormulario.bind(this));
  }
  set pathCurrent(pathPage) {
    if (pathPage === 'cart-page') {
      this._path = '../../../../';

    } else if (pathPage === 'home') {
      this._path = './';

    }
  }
  adicionarCampo(labelText, inputType, inputName, required) {
    let div = document.createElement('div');
    div.classList.add('form-group');

    let label = document.createElement('label');
    label.textContent = labelText;

    let input = document.createElement(inputType === 'textarea' ? 'textarea' : 'input');
    inputType !== 'textarea' && (input.type = inputType);
    input.name = inputName;
    if (required) {
      input.required = true;
    };

    div.appendChild(label);
    div.appendChild(input);

    this.formulario.appendChild(div);
  }

  enviarFormulario(event) {
    event.preventDefault();
    let formData = new FormData(this.formulario);
    for (let [key, value] of formData.entries()) {

    }
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend ou fazer outras operações com eles
  }

  renderizarFormulario(className) {
    let divWrapper = document.querySelector(`.${className}`);
    divWrapper.appendChild(this.formulario);
    this.addCss();
  }

  addCss() {
    let head = document.head;
    let linkCss = document.createElement('link');
    linkCss.setAttribute("rel", "stylesheet");
    linkCss.setAttribute("href", `${this._path}src/components/ContactForm/style.css`);
    head.appendChild(linkCss);
  }
}
export { ContactForm }