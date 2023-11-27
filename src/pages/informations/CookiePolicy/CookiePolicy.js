class CookiePolicy {
  constructor() {
    this.title = "Políticas de Cookies"
    this.text = `Utilizamos cookies para tornar seu acesso personalizado de acordo com o seu gosto e suas escolhas e, com isso, garantir que a sua experiência em nossa loja seja a melhor possível.
    A presente Política tem como objetivo fornecer informações objetivas e claras sobre o que são cookies, qual papel desempenham e como configurá-los.   
    O que são Cookies?
    Cookies são pequenos arquivos de texto ou fragmentos de informação que são baixados em seu computador, smartphone ou qualquer outro dispositivo com acesso à internet quando você visita um site.
    Eles contêm informações sobre a sua navegação em nossa loja e retêm apenas informações relacionadas a suas preferências.    
    Assim, essa página consegue armazenar e recuperar os dados sobre os seus hábitos de navegação, de forma a melhorar a experiência de uso, por exemplo.
    É importante frisar que eles não contêm informações pessoais específicas, como dados sensíveis ou bancários. 
    O seu navegador armazena os cookies no disco rígido, mas ocupam um espaço de memória mínimo, que não afetam o desempenho do seu computador. A maioria das informações são apagadas logo ao encerrar a sessão, como você verá no próximo tópico.
    Tipos de Cookies
    Os cookies, quanto a seus proprietários, podem ser:  
    Cookies proprietários: são cookies definidos por nós ou por terceiros em nosso nome 
    Cookies de terceiros: são cookies definidos por terceiros confiáveis em nossa aplicação 
    Os cookies, quanto ao seu tempo de vida, podem ser: 
    Cookies de sessão ou temporários: são cookies que expiram assim que você fecha o seu navegador, encerrando a sessão.
    Cookies persistentes ou permanentes: são cookies que permanecem no seu dispositivo durante um período determinado ou até que você os exclua.
    Os cookies, quanto a sua finalidade, podem ser:  
    Cookies necessárias: são cookies essenciais que possibilitam a navegação em nossas aplicações e o acesso a todos os recursos; se estes, nossos serviços podem apresentar mau desempenho ou não funcionar.  
    Cookies de desempenho: são cookies que otimizam a forma que nossas aplicações funcionam, coletando informações anônimas sobre as páginas acessadas.   
    Cookies de funcionalidade: são cookies que memorizam suas preferências e escolhas (como seu nome de usuário)
    Cookies de publicidade: são cookies que direcionam anúncios em função dos seus interesses e limitam a quantidade de vezes que o anúncio aparece.
    2 .Por que usamos Cookies? 
    Através dos cookies, buscamos otimizar sua navegação em nossa página a partir de suas preferências e, com essas informações, ajustar o conteúdo para torná-lo mais relevante para você.
    Os cookies participam deste processo porquanto armazenam, leem e executam os dados necessários para cumprir com o nosso objetivo. 
    Gerenciamento dos Cookies
    A instalação dos cookies está sujeita ao seu consentimento. Apesar da maioria dos navegadores está inicialmente configurada para aceitar cookies de forma automática, você pode rever suas permissões a qualquer tempo, de forma a bloqueá-los, aceitá-los ou ativar notificações para quando alguns cookies forem enviados ao seu dispositivo.  
    Atualmente, na primeira vez que você acessar nosso site, será solicitada a sua concordância com a instalação destes. Apenas após a sua aceitação eles serão ativados. 
    Para tanto, utilizamos um sistema de (banner de informações ou outro mecanismo que alerta e solicita o consentimento) em nossa página inicial. Dessa maneira, não apenas solicitamos sua concordância, mas também informamos que a navegação continuada em nosso site será entendida como consentimento.   
    Como já dito, você pode, a qualquer tempo e sem nenhum custo, alterar as permissões, bloquear ou recusar os cookies. Você também pode configurá-los caso a caso. Todavia, a revogação do consentimento de determinados cookies pode inviabilizar o funcionamento correto de alguns recursos da plataforma. 
    Para gerenciar os cookies do seu navegador, basta fazê-lo diretamente nas configurações do navegador, na área de gestão de Cookies. 
    Você pode acessar tutoriais sobre o tema diretamente nos links abaixo: 
    Se você usa o Internet Explorer.
    Se você usa o Firefox. 
    Se você usa o Safari. 
    Se você usa o Google Chrome. 
    Se você usa o Microsoft Edge.  
    Se você usa o Opera. 
    4 . Disposições finais  
    Para nós, a privacidade e confiança são fundamentais para a nossa relação com você. Estamos sempre nos atualizando para manter os mais altos padrões de segurança 
    Assim, reservamo-nos o direito de alterar esta Política de Cookies a qualquer tempo.
    `
  };

  get textTitle() {
    return this.title;
  };
  set textTitle(value) {
    this.title = value;
  };
  get textCookiePolicy() {
    return this.CookiePolicy;
  };
  set textCookiePolicy(value) {
    this.text = value;
  };
};

export { CookiePolicy }