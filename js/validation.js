let messageOnInvalid = [
  'Ops! Faltou preencher seu nome completo.',
  'Ops! Faltou um email válido.',
  'Ops! Falta um telefone válido.',
  'Ops! Falta seu cep.',
  'Ops! Sua mensagem está em branco.'
];
// 0:input#nomeContato.validarEsteCampo
// 1:input#emailContato.validarEsteCampo
// 2:input#telefoneContato.validarEsteCampo
// 3:input#cepContato.validarEsteCampo
// 4:textarea#mensagemContato.validarEsteCampo
let camposParaValidar = document.querySelectorAll('.validarEsteCampo')

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
