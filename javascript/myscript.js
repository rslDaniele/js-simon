setTimeout(chiediNum, 3000);

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

    }

  }
  if (punteggio <= 2) {
    console.log("Hmmm " + punteggio + " punti, dovremo lavorarci su...");
  } else if (punteggio <= 4) {
    console.log("Bella prova! Hai totalizzato " + punteggio + " punti!");
  } else {
    console.log("Eccezionale! Hai totalizzato " + punteggio + " punti su 5!");
  }

}
