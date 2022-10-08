var artigo1 = document.querySelector('#new0')
var btns = document.querySelectorAll('.listaDeArtigos-slider-item');
var artigos = document.querySelectorAll('.listaDeArtigos-item');

//cria o elemento para ser utilizado no botão ativo do slider
//<span class="escondeVisualmente" id="indicadorSlideAtual">Slide atual</span>
var indicadorSlideAtual = document.createElement('span')
// indicadorSlideAtual.classList.add('escondeVisualmente')
indicadorSlideAtual.textContent = 'Slide atual';
indicadorSlideAtual.id = 'indicadorSlideAtual';

artigo1.style.display = 'block';
document.querySelector('.listaDeArtigos-slider-item').append(indicadorSlideAtual);

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function(event) {
    // event.preventDefault(); Impede o screen reader de ler o contúdo da notícia
    document.querySelector('#indicadorSlideAtual').remove()   
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
    this.append(indicadorSlideAtual)
  })
})