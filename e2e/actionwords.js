exports.Actionwords = {
  euEstouNaPaginaDeLogin: function () {
    browser.get('https://nit.kaptest.com/');
    expect(browser.getCurrentUrl()).toMatch("https://nit.kaptest.com/");
  },
  euClicoEmSignIn: function () {
    element(by.id('faculty-signin')).click;
  },
  oSistemaFazLogin: function () {

  },
  euDigitoOEmailP1: function (p1) {
    element(by.id('username')).sendKeys(p1);
    expect(element(by.id('username')).getAttribute('value')).toEqual(p1);
  },
  euDigitoASenhaP1: function (p1) {
    element(by.id('password')).sendKeys(p1);
    expect(element(by.id('password')).getAttribute('value')).toEqual(p1);
  },
  euEstouNaPaginaEsqueciASenha: function () {
    browser.get('https://nit.kaptest.com/forgot-password');
    expect(browser.getCurrentUrl()).toMatch("https://nit.kaptest.com/forgot-password");
  },
  euInsiroOEmailP1: function (p1) {
   element(by.id('forgotPassword')).sendKeys(p1);
   expect(element(by.id('forgotPassword')).getAttribute('value')).toEqual(p1);
  },
  euClicoNoBotaoSendInstructions: function () {
    element(by.id('btnSend')).click;
  },
  oSistemaMeEnviaUmaNovaSenhaAtravesDoEmailCadastrado: function () {

  }
};