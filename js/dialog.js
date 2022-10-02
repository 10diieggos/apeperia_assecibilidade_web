// Variáveis
var btnAbreDialog = document.querySelector('#abreDialog')
var dialog = document.querySelector('.dialogNewsletter')
var dialogBody = document.querySelector('.dialogNewsletter-body')
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay')
let inertList = document.querySelectorAll('.pularNavegacao, header, footer, section:not(.doNotAplyInert)')
//Métodos
var applyInertToElementsOutsideTheModal = (inert) => {
  inertList.forEach((item) => {
        item.inert = inert
    })
}

btnAbreDialog.style.display = 'block'

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--aberto')
  document.querySelector('#dialogRecebeEmail').focus()
  applyInertToElementsOutsideTheModal(true)
})

function fechandoDialog() {
  document.activeElement.blur()
  dialog.classList.remove('dialogNewsletter--aberto')   
  applyInertToElementsOutsideTheModal(false)
  btnAbreDialog.focus()
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog)

document.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') {
    fechandoDialog()
  }
})