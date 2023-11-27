class RefundPolicy {
  constructor() {
    this.title = "Políticas de reembolso"
    this.text = `Nossa política de trocas dos produtos visa nossa loja.

    Todos nossos produtos possuem garantia para proporcionar ao cliente total segurança em relação aos produtos adquiridos emitidos contra defeitos de fabricação.
    
    Também realizamos trocas de produtos que vieram diferente daquele encomendado pelo cliente.
    
    Caso você receba um produto nosso com algum defeito de fabricação ou diferente do que você encomendou siga os seguintes passos para realizar a troca:
    
    Informe nossa equipe sobre o problema através de nosso e-mail, enviando fotos claras do produto com defeito ou do produto errado que você recebeu, no prazo de 3 dias após o recebimento.
    Atenção, não realizaremos trocas ou ressarcimentos após este prazo.
    
    Sua reclamação será analisada em no máximo 2 dias úteis e, constatado o problema, entraremos em contato via email e você poderá escolher uma das seguintes alternativas:
    Receber o reembolso do valor pago.
    
    Receber um novo produto igual o encomendado.
    
    Receber um produto de valor semelhante.
    
    Receber um cupom com o valor do produto para utilizar em compras futuras.
    
    Não realizamos trocas de produtos de tamanho inadequado para o cliente: Disponibilizamos as medidas em centímetros de nossos produtos para não haver erro na escolha do tamanho.
    
    Segundo o Código de Defesa do Consumidor - Artigo 18, não existe a obrigação legal do lojista de realizar trocas por motivos de arrependimento do consumidor quanto à cor, tamanho, modelo, ou qualquer outra hipótese. O direito assegurado ao cliente pelo código de defesa do consumidor é o de realizar trocas apenas em caso de produtos com defeito.
    
    `
  };

  get textTitle(){
    return this.title;
  };
  set textTitle(value){
    this.title = value;
  };
  get textRefundPolicy(){
    return this.textRefundPolicy;
  };
  set textRefundPolicy(value){
    this.text = value;
  };
};

export { RefundPolicy }