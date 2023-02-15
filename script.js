const selectionButtons = document.querySelectorAll('[data-selection]')

selectionButtons.forEach(selectionButton => {
   selectionButton.addEventlistener('click', e => {
      const selectionName = selectionButton.dataset.selection
      makeSelection(selectionName)
   })
})

function makeSelection(selection) {
   console.log(selection)
}