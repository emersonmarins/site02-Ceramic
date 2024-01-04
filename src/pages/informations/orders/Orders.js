class Orders {
  constructor() {
    this.title = "Acompanhe seu pedido"
    this.text = "Ou acesse o site do: Correios ( www.rastreamento.correios.com.br/app/index.php ) ou Ebanx ( www.track.ebanx.com/pt ) É comum que os produtos fiquem algum tempo parados quando chegam no Brasil, geralmente ficam em Curitiba ou no Rio de Janeiro onde estão as agências e centro de distribuição. Isso ocorre por causa da lentidão da Receita Federal em nacionalizar todos os pacotes que entram no nosso país."
  };

  get textTitle(){
    return this.title;
  };
  set textTitle(value){
    this.title = value;
  };
  get textOrders(){
    return this.textOrders;
  };
  set textOrders(value){
    this.text = value;
  };
};

export { Orders }