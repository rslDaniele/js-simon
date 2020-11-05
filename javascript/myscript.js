$(document).ready(function () {

  // alert("Benvenuto giocatore! Pronto a misurare la tua memoria?")

  var numeri = [];

  var numeriUser = [];

  var punteggio = 0;

  // ALERT VISUALIZZA 5 NUMERI

  function generaNum() {

    while (numeri.length < 5) {

      var ricorda = Math.floor(Math.random()* 100 + 1);

      if (!numeri.includes(ricorda)) {
        numeri.push(ricorda);
      }

    }
    console.log(numeri);

    document.getElementById('memory').innerHTML = ("Memorizza questi numeri, hai 5 secondi! " + numeri)
  }

  // AL CLICK DEL PULSANTE IL GIOCO GENERA ARRAY NUMERI

  document.getElementById('play').addEventListener('click', generaNum);


  // IL DIV CHE MOSTRA I NUMERI GENERATI SPARISCE

  $('.numeri').fadeOut(5000);


  // IL SISTEMA CHIEDE AL GIOCATORE DI RICORDARE I NUMERI

  setTimeout(chiediNum, 10000);

  function chiediNum() {

    while (numeriUser.length < numeri.length) {
      var guess = parseInt(prompt("Inserisci un numero!"));

      if (!numeriUser.includes(guess)) {
        numeriUser.push(guess);

      }else {
        alert("Sicuro? Non mi sembra ci fossero doppioni...")
      }

      if (numeri.includes(guess)) {
        punteggio++;

      }

    }
    console.log(numeriUser);

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
