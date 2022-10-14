

// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


// chiedo una stringa all'utente e la copio in una variabile
const string = String(prompt('Inserisci una parola'));
palindrome(string);

function palindrome (str) {
    const stringCopy = str;
    
    // trasformo la stringa copiata in array con split()
    const stringToArray = stringCopy.split('');
    
    // inverto l'array con reverse()
    const stringReverse = stringToArray.reverse();
    
    // riporto l'array in stringa con join()
    const arrayToString = stringReverse.join('');
    // console.log(stringToArray);
    const reverse = arrayToString;
    
    console.log(string);
    console.log(reverse);
    
    // confronto se le due variabili e stampo messaggio a schermo
    if (string == reverse) {
        console.log('La parola è palindroma');
    } else {
        console.log('La parola non è palindroma');
    }
} 


