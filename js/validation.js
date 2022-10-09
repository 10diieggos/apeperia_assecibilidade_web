let messageOnInvalid = [
  'Ops! Faltou preencher seu nome completo.',
  'Ops! Faltou um email válido.',
  'Ops! Falta um telefone válido.',
  'Ops! Falta seu cep.',
  'Ops! Sua mensagem está em branco.'
];
// 0:input#nomeContato.validarEsteCampo
// 1:input#emailContato.validarEsteCampo
// 2:input#cepContato.validarEsteCampo
// :textarea#mensagemContato.validarEsteCampo
let camposParaValidar = document.querySelectorAll('.secaoContato-form :required')
camposParaValidar.forEach(function (campo, indice) {
  campo.oninvalid = () => {
    campo.setCustomValidity('');
    if (!campo.validity.valid) {
      campo.setCustomValidity(messageOnInvalid[indice]);
      campo.parentNode.classList.add('contatoCampo--erro');
      campo.classList.add('.contatoCampo--validouErro');
    }
  }
});
