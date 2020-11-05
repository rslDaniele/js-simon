alert("Benvenuto giocatore! Pronto a misurare la tua memoria?")

var numeri = [];

var punteggio = 0;

// ALERT VISUALIZZA 5 NUMERI

function generaNum() {

  for (var i = 0; i < 5; i++) {
    var ricorda = Math.floor(Math.random()* 100 + 1);
    console.log(ricorda);
    if (!numeri.includes(ricorda)) {
      numeri.push(ricorda);
    }
  }
}

generaNum(),
console.log(numeri);

alert("Concentrati! " + numeri);


// DOPO 30 SECONDI VIENE CHIESTO AD UTENTE DI INSERIRE 5 NUMERI

function chiediNum() {

  for (var i = 0; i < numeri.length; i++) {
    var guess = parseInt(prompt("Inserisci un numero!"));
    if (numeri.includes(guess)) {
      punteggio++;
    }
  }
}

setTimeout(chiediNum, 30000);



// IL SISTEMA COMUNICA QUANTI NUMERI SONO STATI RICORDATI

console.log(punteggio);
