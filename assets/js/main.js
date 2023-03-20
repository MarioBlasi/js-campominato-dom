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
// let colori = ["nero", "rosso"]; // Creo un array di colori da assegnare

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
      //per generare i 16 numeri casuali utilizziamo Math.random()*16 e
      // poi con la funzione Math.round arrotondiamo all’intero.*/
      //generando cosí un numero casuale ad ogni click di una singola cella
      num = Math.round(Math.random() * 16);
      console.log("Numero casuale " + num);
    });
  }
}
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", startGame);

// distribuiamo casualmente le bombe nelle celle ( possiamo posizionare max una bomba a cella )
// con il numero casuale precedentemente creato,
/*   --------- IN SOSTANZA DEVO ASSEGNARE UN COLORE AL NUMERO CASUALE CHE FUNGERA' DA BOMBA */
/* -- per cui : 
  - creo e seleziono l'elemento HTML che voglio modificare e assegno
   un colore dall'array di colori utilizzando 
   la proprietà style.background di CSS:


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

/*--------STEP 1----------*/ // -------------  OK
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
/*nella stessa cella può essere posizionata al massimo una bomba, 
perciò nell’array delle bombe non potranno esserci due numeri uguali.*/

// distribuiamo casualmente le bombe nelle celle ( possiamo posizionare max una bomba a cella )
// con il numero casuale precedentemente creato,
// assegnadogli un una bomba ( cerchio nero ) che dovrá apparire sul browser una volta cliccato,
// nello stesso tempo la casella si colorerá di rosso e dovremmo cancellare il colore celeste
// ( prima assegnato)

/* per cui assegnamo il colore rosso alla cella 'casuale' 
  - useremo if else 
  - allinterno andremo a posizionare una bomba 
  - come far finire la partita una volta trovata la bomba?????? */
