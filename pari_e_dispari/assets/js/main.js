

// Pari e Dispari


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userNum = Number(prompt('inserisci un numero da 1 a 5'));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
const botNum = randomNum();

function randomNum() {
    return Math.ceil(Math.random() * 5);
}

console.log('Numero dell\' User: ' + userNum);
console.log('Numero del bot: ' + botNum);
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).

const sum = botNum + userNum;

if (sum % 2 == 0) {
    console.log('Somma: ' + sum);
    console.log('Numero PARI, vince USER');
} else {
    console.log('Somma: ' + sum);
    console.log('Numero DISPARI, vince BOT');
}

// Dichiariamo chi ha vinto.

