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
  let contatore = 0;
  let score = 0;

  for (let i = 0; i < cellEl.length; i++) {
    const thisCell = cellEl[i];

    console.log(thisCell);
    thisCell.addEventListener("click", function () {
      console.log("Colore Celeste " + thisCell.textContent);

      if (bombs.includes(Number(thisCell.textContent))) {
        thisCell.style.background = "red";
        thisCell.textContent = "END";
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

/*--------STEP 1----------*/ // -------------
/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: 
le bombe.
// per generare i 16 numeri casuali utilizziamo Math.random()*16 e
// poi con la funzione Math.round arrotondiamo all’intero.*/

// function casuale() {
//   num = Math.round(Math.random() * 16);
//   console.log("Numero casuale " + num);
// }
// creiamo in html un input button per il pulsante a cui andiamo ad
//associare l'evento onclick che richiama la funzione casuale()

// associamo l input button alla cell e non al button cosi al click della cella
//si genererá un numero casuale con il colore preimpostato celeste

/*----------STEP---2-------------------*/
/*verificare se il numero contentuto nella 
cella corrisponde ad una delle 16 bombe generate. Se si, allora é una bomba altrimenti no.

implementare il codice per generare le 16 bombe casuali comprese nel range di
 celle generate.*/

/*----------STEP---3-------------------*/

/*Al termine della partita il software deve comunicare il punteggio con un prompt, 
cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.*/

// Per contare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba,
//possiamo utilizzare una variabile contatore all'interno della funzione startGame()
// andiamo ad incrementarla ogni volta che clicchiamo sulla cella che non contiene la bomba
//alla fine del gioco comunichiamo il punteggio con un prompt

/*  aggiungiamo un let score per il punteggio e aggiungiamo un else 
per incrementare il punteggio e  colorare la cella di celeste
con un if finale che controllera se tutte le celle senza la bomba sono state cliccate */
