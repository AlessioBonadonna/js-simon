
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
//i numeri che ha visto precedentemente, tramite una casella di input e un bottone
// Dopo che sono stati inseriti i 5 numeri, 
//il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// costanti 
let numeri = [];
const NUMERIMEMORY = 5;
//funzione che mi crea numeri casuali .
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione che mi crea 5 numeri casuali e me li stampa in html
let stampanumeri =function(){
while (numeri.length < NUMERIMEMORY) {
    let numerino = randomNumber(1, 100);
    if (!numeri.includes(numerino)) {
        numeri.push(numerino);
    }
}console.log(numeri)
 return numeri;
}
let prova =document.getElementById('prova');
    prova.innerHTML=stampanumeri(numeri);


