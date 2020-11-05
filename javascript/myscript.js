$(document).ready(function () {

  alert("Benvenuto giocatore! Pronto a misurare la tua memoria?")

  var numeri = [];

  var numeriUser = [];

  var punteggio = 0;

  // ALERT VISUALIZZA 5 NUMERI

  function generaNum() {

    while (numeri.length < 5) {

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

  setTimeout(chiediNum, 10000);

  // IL SISTEMA CHIEDE AL GIOCATORE DI RICORDARE I NUMERI

  function chiediNum() {

    while (numeriUser.length < numeri.length) {
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
    // IL SISTEMA COMUNICA IL PUNTEGGIO AL GIOCATOREs
    if (punteggio <= 2) {
      document.getElementById('punti').innerHTML = ("Hmmm " + punteggio + " punti, dovremo lavorarci su...");
    } else if (punteggio <= 4) {
      document.getElementById('punti').innerHTML = ("Bella prova! Hai totalizzato " + punteggio + " punti!");
    } else {
      document.getElementById('punti').innerHTML = ("Eccezionale! Hai totalizzato " + punteggio + " punti su 5!");
    }

  }

})
