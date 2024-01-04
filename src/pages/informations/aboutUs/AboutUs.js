class AboutUs {
  constructor() {
    this.title = "quem somos"
    this.text = "A nossa empresa nasceu com uma proposta diferenciada de oferecer ao público produtos que são tendências mundiais. Atualmente atendemos a todo o Brasil, com os melhores produtos e preço justo. Trabalhamos com a empresa de recebimento do Mercado pago, para oferecer aos nossos clientes mais segurança no momento da compra. Temos uma variedade de produtos de qualidade, com um preço acessível com entrega garantida em todo território nacional. A nossa loja é totalmente online, possibilitando sua compra no conforto da sua casa ou de onde você estiver. Em caso de dúvidas, entre em contato conosco por meio do nosso formulário de atendimento ou pelo e-mail."
  };

  get texTitle(){
    return this.title;
  };
  set texTitle(value){
    this.title = value;
  };
  get textAboutUs(){
    return this.text;
  };
  set textAboutUs(value){
    this.text = value;
  };
};

export { AboutUs }