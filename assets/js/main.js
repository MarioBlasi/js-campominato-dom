// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed
// emetto un messaggio in console con il numero della cella cliccata.

// const button = document.getElementById("crea-griglia");
// const playButton = document.getElementById("play");
// const griglia = document.getElementById("griglia");

const container = document.querySelector(".container-main");

let nMax = 100;

for (let i = 1; i <= nMax; i++) {
  const cell = `<div class="cell">${i}</div>`;
  container.innerHTML += cell;
}

const cellEl = document.querySelectorAll(".cell");

function startGame() {
  for (let i = 0; i < cellEl.length; i++) {
    const thisCell = cellEl[i];
    console.log(thisCell);
    thisCell.addEventListener("click", function () {
      thisCell.classList.toggle("bg_blue");
      console.log("Changed the color" + thisCell.textContent);
    });
  }
}
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", startGame);

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
