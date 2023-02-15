const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
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

   addSelectionResult(computerSelection, computerWinner)
   addSelectionResult(selection, youreWinner)

   if (youreWinner) incrementScore(yourScoreSpan)
   if (computerWinner) incrementScore (computerScoreSpan)
}

function incrementScore(scoreSpan) {
   scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
   const div = document.createElement('div')
   div.innerText = selection.pic
   div.classList.add('result-selection')
   if (winner) div.classList.add('winner')
   finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
   return selection.beats === opponentSelection.name
   
}

function randomSelection() {
   const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
   return SELECTIONS[randomIndex]
}

