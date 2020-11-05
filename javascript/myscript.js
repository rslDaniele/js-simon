setTimeout(chiediNum, 30000);

alert("Benvenuto giocatore! Pronto a misurare la tua memoria?")

var numeri = [];

var numeriUser = [];

var punteggio = 0;

// ALERT VISUALIZZA 5 NUMERI

function generaNum() {

  for (var i = 0; i < 5; i++) {
    var ricorda = Math.floor(Math.random()* 100 + 1);
    if (!numeri.includes(ricorda)) {
      numeri.push(ricorda);
      console.log(ricorda);
    }
  }
}

generaNum(),
console.log(numeri);

alert("Concentrati! " + numeri);


// DOPO 30 SECONDI VIENE CHIESTO AD UTENTE DI INSERIRE 5 NUMERI

// IL SISTEMA COMUNICA QUANTI NUMERI SONO STATI RICORDATI

function chiediNum() {

  for (var i = 0; i < numeri.length; i++) {
    var guess = parseInt(prompt("Inserisci un numero!"));
    console.log(guess);
    if (!numeriUser.includes(guess)) {
      numeriUser.push(guess);
      console.log(numeriUser);
    }else {
      alert("Sicuro? Non mi sembra ci fossero doppioni...")
    }

    if (numeri.includes(guess)) {
      punteggio++;
      console.log("Complimenti! Hai ottenuto " + punteggio + " punti!")
    }
  }
}
