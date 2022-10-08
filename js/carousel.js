var artigo1 = document.querySelector('#new0')
var btns = document.querySelectorAll('.listaDeArtigos-slider-item');
var artigos = document.querySelectorAll('.listaDeArtigos-item');


artigo1.style.display = 'block';

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    
    // Remove a classe 'ativo' do artigo atual
    artigos.forEach((artigo) => {
      artigo.style.display = 'none';
    })

    // Ativa o artigo que corresponde ao botão clicado
    let newSelected = this.getAttribute('href')
    document.querySelector(newSelected).style.display = 'block';

    // Remove classe 'ativo' de todos os botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })
    // Ativa apenas o botão que foi clicado
    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})