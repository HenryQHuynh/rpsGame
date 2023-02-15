const selectionButtons = document.querySelectorAll('[data-selection]')
const SELECTIONS = [
   {
      name: 'fire',
      pic: './pics/fire.png',
      beats: 'grass'
   },
   {
      name: 'water',
      pic: './pics/water.png',
      beats: 'fire'
   },
   {
      name: 'grass',
      pic: './pics/grass.png',
      beats: 'water'
   }
]

selectionButtons.forEach(selectionButton => {
   selectionButton.addEventListener('click', e => {
     const selectionName = selectionButton.dataset.selection
     const selection = SELECTIONS.find(selection => selection.name === selectionName)
     makeSelection(selection);
   })
 })

function makeSelection(selection) {
   const computerSelection = randomSelection()
   const youreWinner = isWinner(selection, computerSelection)
   const computerWinner = isWinner(computerSelection, selection)
   console.log(computerSelection)
}

function isWinner(selection, opponentSelection) {
   return selection.beats === opponentSelection.name
   
}

function randomSelection() {
   const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
   return SELECTIONS[randomIndex]
}

