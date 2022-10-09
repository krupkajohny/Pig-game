'use strict'
/* SELECTING HTML ELEMTNS */

// ares of the players - classes
const areaPl0El = document.querySelector('.player--0')
const areaPl1El = document.querySelector('.player--1')

// buttons - clases
const btnNewGame = document.querySelector('.btn--new')
const btnRollDice = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// scores - ids
const totalScorePl0el = document.getElementById('score--0')
const totalScorePl1el = document.getElementById('score--1')
const currScorePl0el = document.getElementById('current--0')
const currScorePl1el = document.getElementById('current--1')

// dice - class
const diceImg = document.querySelector('.dice')

/* CONSTS. FOR HOLDING DATA */
let playingState
let totalScores
let currentScore
let activePl
let winningScore = 20

/* FUNCTIONS */
function initialReset () {
  playingState = true

  // removing winners bg
  // document.querySelector(`.player--${activePl}`).classList.add('player--winner')
  areaPl0El.classList.remove('player--winner')
  areaPl1El.classList.remove('player--winner')

  totalScores = [0, 0]
  currentScore = 0
  activePl = 0

  // reseting scores
  totalScorePl0el.textContent = '0'
  totalScorePl1el.textContent = '0'
  currScorePl0el.textContent = '0'
  currScorePl1el.textContent = '0'

  // hiding dice
  diceImg.classList.add('hidden')

  // changing bg - pl0 active
  areaPl0El.classList.add('player--active')
  areaPl1El.classList.remove('player--active')
}

function switchingPl () {
  // reseting current score
  currentScore = 0
  document.getElementById(`current--${activePl}`).textContent = currentScore
  // switch players
  activePl = activePl === 0 ? 1 : 0
  areaPl0El.classList.toggle('player--active')
  areaPl1El.classList.toggle('player--active')
}

// Inital reset of the game
initialReset()

/* ROLLING THE DICE */
btnRollDice.addEventListener('click', function () {
  if (playingState) {
    // generating random number
    const randomNumber = Math.trunc(Math.random() * 6) + 1
    console.log(randomNumber)

    // showing and chaning the dice img
    diceImg.classList.remove('hidden')
    diceImg.src = `dice-${randomNumber}.png`

    // checking if dice roll is 1
    if (randomNumber !== 1) {
      // add roll dice to current score
      currentScore += randomNumber

      // show current score
      document.getElementById(`current--${activePl}`).textContent = currentScore
    } else {
      switchingPl()
    }
  }
})

btnHold.addEventListener('click', function () {
  if (playingState) {
    // adding current score to total score
    totalScores[activePl] += currentScore
    document.getElementById(`score--${activePl}`).textContent =
      totalScores[activePl]

    // checking for winner
    // no winner switch player
    if (totalScores[activePl] < winningScore) {
      switchingPl()
      // winner found => stop game/change state
    } else {
      playingState = false
      diceImg.classList.add('hidden')
      document
        .querySelector(`.player--${activePl}`)
        .classList.add('player--winner')
    }
  }
})

/* NEW GAME - RESETING THE GAME */
btnNewGame.addEventListener('click', initialReset)
