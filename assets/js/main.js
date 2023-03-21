/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: 
le bombe.
nella stessa cella può essere posizionata al massimo una bomba, 
perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella:
se il numero è presente nella lista dei numeri generati
abbiamo calpestato una bomba
la cella si colora di rosso e la partita termina.
Altrimenti
la cella cliccata si colora di azzurro
l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando
 raggiunge il numero massimo possibile di numeri consentiti (ovvero 
  quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.*/

const container = document.querySelector(".container-main");

let nMax = 100;

for (let i = 1; i <= nMax; i++) {
  const cell = `<div class="cell">${i}</div>`;
  container.innerHTML += cell;
}

const cellEl = document.querySelectorAll(".cell");

function generazioneBombe() {
  let bombs = [];
  while (bombs.length < 16) {
    let mrandom = Math.floor(Math.random() * nMax) + 1;

    if (!bombs.includes(mrandom)) {
      bombs.push(mrandom);
      console.log(bombs);
    }
  }
  return bombs;
}

function startGame() {
  let bombs = generazioneBombe();
  // let contatore = 0;
  let score = 0;

  for (let i = 0; i < cellEl.length; i++) {
    const thisCell = cellEl[i];

    console.log(thisCell);
    thisCell.addEventListener("click", function () {
      console.log("Colore Celeste " + thisCell.textContent);

      if (bombs.includes(Number(thisCell.textContent))) {
        thisCell.classList.add("bomb-cell");
        console.log(" Game over!");
        alert("Hai calpestato una bomba! Il tuo punteggio è " + score);
      } else {
        thisCell.classList.toggle("bg_blue");
        score++;
      }
      if (score === nMax - bombs.length) {
        alert("Complimenti! Hai vinto con un punteggio di " + score);
      }
    });
  }
  return bombs;
}

const playButton = document.getElementById("play-button");

playButton.addEventListener("click", startGame);
