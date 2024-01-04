class ShippingPolicy {
  constructor() {
    this.title = "Políticas de Frete"
    this.text = `O prazo de entrega para qualquer lugar do Brasil varia de 20 a 90 dias após a conﬁrmação de pagamento.

    Lembrando que informamos o código de rastreamento de todos os produtos. Para o rastreamento utilize o link abaixo:
    
    RASTREAMENTO
    Os códigos de rastreios levam de 5 a 10 dias úteis para serem repassados para você, cliente.
    
    Realizaremos o reembolso do valor relativo às compras efetuadas que forem extraviadas ou que passarem do prazo de 90 dias após a conﬁrmação do pagamento para serem entregues.
    
    O prazo varia de acordo com a agilidade dos Correios e da alfândega, mas costuma levar entre 25 a 45 dias em média. Sendo o prazo ﬁnal para entrega de até 90 dias úteis.
    
    Passado o prazo estipulado, recomendamos que você entre em contato com os Correios para esclarecer o motivo da demora.
    
    Caso os correios não estejam de posse de seu pedido entre em contato imediatamente conosco para veriﬁcarmos junto a nossos fornecedores.
    
    Conﬁrmando que existe um problema na logística de seu pedido, efetuaremos o estorno TOTAL de sua compra imediatamente após estas etapas de veriﬁcação.
    
    É importante que você possibilite os meios para a efetivação da entrega no endereço cadastrado no seu pedido. Após 3 (três) tentativas comprovadas de entrega, você terá que buscar o pedido em uma agência dos Correios próxima ao seu endereço. Taxas de armazenagem são cobradas se não forem retiradas em até 7 dias corridos. O valor da taxa depende do peso/volume do produto.
  `
  };

  get textTitle(){
    return this.title;
  };
  set textTitle(value){
    this.title = value;
  };
  get textShippingPolicy(){
    return this.text;
  };
  set textShippingPolicy(value){
    this.textShippingPolicy = value;
  };
};

export { ShippingPolicy }