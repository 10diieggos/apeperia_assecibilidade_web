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
      campo.classList.add('contatoCampo--validouErro');
    }
  }
});

// Implementação Mailcheck.js
let sugestaoEmailSpan = document.querySelector('#emailContato + span')
sugestaoEmailSpan.style.display = 'none'
$('#emailContato').on('blur', function(event) {
  $(this).mailcheck({
    // domains: domains,                       // optional para acrescentar mais sugestões
    // topLevelDomains: topLevelDomains,       // optional
    suggested: function(element, suggestion) {
      $('#emailContato + span').html(`Você quis dizer <a id="emailSuggestion" href="#"><strong><i>${suggestion.full}</i></strong> ?<span class='escondeVisualmente'>clique aqui para corrigir</span></a>`)
      
      sugestaoEmailSpan.style.display = 'inline-block';
      sugestaoEmailSpan.setAttribute('tabindex', '0');
      sugestaoEmailSpan.focus();
      sugestaoEmailSpan.setAttribute('role', 'status');

      $('#emailSuggestion').on('click', function (e) {
        e.preventDefault();
        $('#emailContato').val(
          $('#emailSuggestion i').html()
        )
        sugestaoEmailSpan.style.display = 'none';
      })

    },
    empty: function(element) {
      // callback code
    }
  });
});

$('#emailContato').on('focus', function (e) {
  sugestaoEmailSpan.style.display = 'none';
})