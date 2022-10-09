'use strict';

// /* SELECTING ELEMENTS */
// /* buttons */
// const btnNewGame = document.querySelector('.btn--new');
// const btnRollDice = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// /* player 1 */
// const pl1BgEl = document.querySelector('.player--0');
// const pl1TotScorEl = document.querySelector('#score--0');
// const pl1CurScorEl = document.querySelector('#current--0');

// /* player 2 */
// const pl2BgEl = document.querySelector('.player--1');
// const pl2TotScorEl = document.querySelector('#score--1');
// const pl2CurScorEl = document.querySelector('#current--1');

// /* others */
// let imgDiceEl = document.querySelector('.dice');

// /* VARIABLES FOR HOLDING DATA */
// /* player 1 */
// let pl1TotScor = 0;
// let pl1CurScor = 0;

// /* player 2 */
// let pl2TotScor = 0;
// let pl2CurScor = 0;

// /* rolled number */
// let rolledNo;

// /* FUNCTIONS */
// /* switching player active */
// function switchingPlActive() {
//   pl1BgEl.classList.toggle('player--active');
//   pl2BgEl.classList.toggle('player--active');
// }

// /* reseting score */
// function resetingScore(dataVar, elVar) {
//   dataVar = 0;
//   elVar.textContent = dataVar;
// }

// function completeReset() {
//   /* reseting current scores */
//   // resetingScore(pl1CurScor, pl1CurScorEl);
//   // resetingScore(pl2CurScor, pl2CurScorEl);
//   pl1CurScor = 0;
//   pl1CurScorEl.textContent = pl1CurScor;
//   pl2CurScor = 0;
//   pl2CurScorEl.textContent = pl2CurScor;
//   // console.log(`Current score pl1:${pl1CurScor}`);
//   // console.log(`Current score pl2:${pl2CurScor}`);

//   /* reseting total scores */
//   // resetingScore(pl1TotScor, pl1TotScorEl);
//   // resetingScore(pl2TotScor, pl2TotScorEl);
//   pl1TotScor = 0;
//   pl1TotScorEl.textContent = pl1CurScor;
//   pl2TotScor = 0;
//   pl2TotScorEl.textContent = pl1CurScor;
//   // console.log(`Total score pl1:${pl1TotScor}`);
//   // console.log(`Total score pl2:${pl2TotScor}`);

//   if (btnRollDice.classList.contains('hidden')) {
//     btnRollDice.classList.remove('hidden');
//   }

//   if (btnHold.classList.contains('hidden')) {
//     btnHold.classList.remove('hidden');
//   }

//   /* Player1 activation */
//   if (!pl1BgEl.classList.contains('player--active')) {
//     switchingPlActive();
//   }
//   /* hiding dice picture */
//   imgDiceEl.classList.add('hidden');
// }

// /* INITIAL RESET */
// completeReset();

// /* ROLLING THE DICE (CLICKING THE ROLL DICE BTN)*/
// btnRollDice.addEventListener('click', function () {
//   /* Rolling random namber */
//   rolledNo = Math.trunc(Math.random() * 6) + 1;
//   console.log(rolledNo);

//   /* Changing dice image src */
//   imgDiceEl.src = `dice-${rolledNo}.png`;
//   // for (let i = 1; i <= 6; i++) {
//   //   if (i === rolledNo) {
//   //     imgDiceEl.src = `dice-${i}.png`;
//   //   }
//   // }
//   /* Showing dice image */
//   if (imgDiceEl.classList.contains('hidden')) {
//     imgDiceEl.classList.remove('hidden');
//   }

//   /* player 1 active */
//   if (pl1BgEl.classList.contains('player--active')) {
//     if (rolledNo !== 1) {
//       pl1CurScor += rolledNo;
//       pl1CurScorEl.textContent = pl1CurScor;
//     } else {
//       // resetingScore(pl2CurScor, pl2CurScorEl);
//       pl1CurScor = 0;
//       pl1CurScorEl.textContent = pl1CurScor;
//       switchingPlActive();
//     }
//     /* player 2 active */
//   } else if (pl2BgEl.classList.contains('player--active')) {
//     if (rolledNo !== 1) {
//       pl2CurScor += rolledNo;
//       pl2CurScorEl.textContent = pl2CurScor;
//     } else {
//       // resetingScore(pl2CurScor, pl2CurScorEl);
//       pl2CurScor = 0;
//       pl2CurScorEl.textContent = pl2CurScor;
//       switchingPlActive();
//     }
//   }
// });

// /* WHEN HOLDING SCORE (CLICKING THE HOLD BTN)*/
// btnHold.addEventListener('click', function () {
//   if (pl1BgEl.classList.contains('player--active') && pl1CurScor !== 0) {
//     /* Adding current score to total score */
//     pl1TotScor += pl1CurScor;
//     pl1TotScorEl.textContent = pl1TotScor;
//     /* Reseting current score */
//     // resetingScore(pl1CurScor, pl1CurScorEl);
//     pl1CurScor = 0;
//     pl1CurScorEl.textContent = pl1CurScor;

//     /* Player1 wins */
//     if (pl1TotScor >= 100) {
//       btnRollDice.classList.add('hidden');
//       btnHold.classList.add('hidden');
//       imgDiceEl.classList.add('hidden');
//       /* switching players */
//     } else {
//       switchingPlActive();
//     }
//   } else if (pl2BgEl.classList.contains('player--active') && pl2CurScor !== 0) {
//     /* Adding current score to total score */
//     pl2TotScor += pl2CurScor;
//     pl2TotScorEl.textContent = pl2TotScor;
//     /* Reseting current score */

//     // resetingScore(pl1CurScor, pl1CurScorEl);
//     pl2CurScor = 0;
//     pl2CurScorEl.textContent = pl2CurScor;

//     /* Player2 wins */
//     if (pl2TotScor >= 100) {
//       btnRollDice.classList.add('hidden');
//       btnHold.classList.add('hidden');
//       imgDiceEl.classList.add('hidden');
//       /* switching players */
//     } else {
//       switchingPlActive();
//     }
//   }
// });

// /* WHEN RESETING GAME (CLICKING THE NEW GAME BTN) */
// btnNewGame.addEventListener('click', function () {
//   completeReset();
//   console.log(`
//   --- Numbers after reset ---
//   Current scores
//   PL1 current score: ${pl2CurScor}
//   PL2 current score: ${pl2CurScor}

//   Total scores
//   PL1 current score: ${pl1TotScor}
//   PL1 current score: ${pl2TotScor}
//   `);
// });
