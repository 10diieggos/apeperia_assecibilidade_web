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

// Implementação Mailcheck.js
sugestaoEmailSpan = document.querySelector('#emailContato + span')
sugestaoEmailSpan.style.display = 'none'
$('#emailContato').on('blur', function(event) {
  $(this).mailcheck({
    // domains: domains,                       // optional para acrescentar mais sugestões
    // topLevelDomains: topLevelDomains,       // optional
    suggested: function(element, suggestion) {
      $('#emailSuggestion').html("<b><i>" + suggestion.full + "</b></i> ?");
      sugestaoEmailSpan.style.display = 'block';
    },
    empty: function(element) {
      // callback code
    }
  });
});