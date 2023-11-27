document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  
  // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend ou fazer outras operações com eles
  console.log('Nome: ' + name);
  console.log('E-mail: ' + email);
  console.log('Mensagem: ' + message);
});