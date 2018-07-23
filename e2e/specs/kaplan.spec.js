describe('Kaptest', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../actionwords.js').Actionwords);
  });

  describe('Fazer Login', function () {
    function fazerLogin (email, senha) {
      // Given Eu estou na página de login
      this.actionwords.euEstouNaPaginaDeLogin();
      // When Eu clico em Sign In
      this.actionwords.euClicoEmSignIn();
      // Then O Sistema faz login
      this.actionwords.oSistemaFazLogin();
      // And Eu digito o email "<Email>"
      this.actionwords.euDigitoOEmailP1(email);
      // And Eu digito a senha "<Senha>"
      this.actionwords.euDigitoASenhaP1(senha);
    }

    it('José', function () {
      fazerLogin.apply(this, ['jose@gmail.com', 'Jose1234']);
    });

    it('Maria', function () {
      fazerLogin.apply(this, ['maria@uol.com.br', 'MarIa568.']);
    });

    it('Paulo', function () {
      fazerLogin.apply(this, ['PP@hotmail.com', 'PP.34@o']);
    });
  });


  describe('Esqueceu a senha', function () {
    function esqueceuASenha (email) {
      // Quando esqueço a senha de acesso
      // Given Eu estou na página esqueci a senha
      this.actionwords.euEstouNaPaginaEsqueciASenha();
      // And Eu insiro o email "<Email>"
      this.actionwords.euInsiroOEmailP1(email);
      // And Eu clico no botão Send Instructions
      this.actionwords.euClicoNoBotaoSendInstructions();
      // Then O Sistema me envia uma nova senha através do email cadastrado
      this.actionwords.oSistemaMeEnviaUmaNovaSenhaAtravesDoEmailCadastrado();
    }

    it('José', function () {
      esqueceuASenha.apply(this, ['jose@gmail.com']);
    });

    it('Maria', function () {
      esqueceuASenha.apply(this, ['maria@uol.com.br']);
    });

    it('Paulo', function () {
      esqueceuASenha.apply(this, ['PP@hotmail.com']);
    });
  });
});
