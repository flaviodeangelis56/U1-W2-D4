/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 1");
const area = function (l1, l2) {
  let total = l1 * l2;
  return total;
};
console.log(area(25, 10));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 2");
const crazySum = function () {
  const randNum1 = Math.floor(Math.random() * 10);
  const randNum2 = Math.floor(Math.random() * 10);
  if (randNum1 !== randNum2) {
    let total2 = randNum1 + randNum2;
    return total2;
  } else {
    let total2 = (randNum1 + randNum2) * 3;
    return total2;
  }
};

console.log(crazySum());
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 3");
const crazyDiff = function (n1) {
  if (n1 > 19) {
    let total3 = n1 + 19;
    let diffAss = (total3 - n1) * 3;
    return diffAss;
  } else {
    let total3 = n1 + 19;
    let diffAss = total3 - n1;
    return diffAss;
  }
};
console.log(crazyDiff(21));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 4");
const boundary = function (n) {
  if (20 < n) {
    if (n <= 100) {
      return true;
    } else if (n === 400) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(boundary(100));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 5");
const epify = function (str) {
  if (str === "EPICODE") {
    return str;
  } else {
    return "EPICODE " + str;
  }
};
console.log(epify("EPICODE"));
console.log(epify("is awsome"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 6");
const check3and7 = function (n) {
  let total3 = n % 3;
  let total7 = n % 7;
  if (total3 === 0) {
    console.log("è un multiplo di 3");
  } else if (total7 === 0) {
    console.log("è un multiplo di 7");
  } else {
    console.log("non è ne un multiplo di 3 ne di 7");
  }
};
check3and7(8);
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 7");
const reverseString = function (str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
};
console.log(reverseString("EPICODE"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZO 8");
const upperFirst = function (string) {
  let parole = string.split(" ");
  for (let i = 0; i < parole.length; i++) {
    parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].substr(1, parole[i].length);
  }
  console.log(parole);
};

upperFirst("epicode is awsome");
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 9");
const cutString = function (str) {
  let splitString = str.split("");
  let stringCutEnd = splitString.pop();
  let stringCutStart = splitString.shift();
  console.log(splitString);
};
cutString("epicode is awsome");
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log("ESERCIZIO 10");
let giveMeRandom = function (n) {
  for (let i = 0; i < n; i++) {
    let randNum1 = Math.floor(Math.random() * 10);
    console.log(randNum1);
  }
};
giveMeRandom(5);
/* SCRIVI QUI LA TUA RISPOSTA */
