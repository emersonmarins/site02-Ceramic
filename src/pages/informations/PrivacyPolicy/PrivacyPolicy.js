class PrivacyPolicy {
  constructor() {
    this.title = "Políticas de privacidade"
    this.text = "Nossa Loja respeita a sua privacidade porque garante o sigilo total das informações que você nos fornece. Apenas dados como email e nome são armazenados em nosso banco de dados com o intuito de melhorar nosso relacionamento através de e-mail, mala-direta, entre outras formas de interação. Assim, podemos sempre lhe oferecer os melhores produtos e serviços. O número do seu cartão de crédito é usado somente pelo Mercado Pago e apenas no processamento de compra, não sendo, de nenhuma forma, guardado nos arquivos depois da operação. O seu endereço de e-mail será utilizado unicamente para contato sobre seus pedidos ou divulgação de promoções e lançamentos do nosso site, podendo ser cancelado por você a qualquer momento. Em caso de dúvidas ou sugestões em relação à nossa política de privacidade, por favor, entre em contato. Nossa Loja garante a segurança de sua compra e respeita a sua privacidade."
  };

  get textTitle(){
    return this.title;
  };
  set textTitle(value){
    this.title = value;
  };
  get textPrivacyPolicy(){
    return this.text;
  };
  set textPrivacyPolicy(value){
    this.text = value;
  };
}

export { PrivacyPolicy }