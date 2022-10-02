// Variáveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

//Métodos
var applyInertToElementsOutsideTheModal = (inert) => {
  let inertList = document.querySelectorAll('.pularNavegacao, header, footer, section:not(.doNotAplyInert)')
  for (let i = 0; i < inertList.length; i++) {
    inertList[i].inert = inert;
  }

}

btnAbreDialog.style.display = 'block';

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('#dialogRecebeEmail').focus()
  applyInertToElementsOutsideTheModal(true)
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');   
  applyInertToElementsOutsideTheModal(false)
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);