
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
};
//funzione stampanumeri in html
function stampanumeri() {
    while (numeri.length < NUMERIMEMORY) {
        let numerino = randomNumber(1, 100);
        if (!numeri.includes(numerino)) {
            numeri.push(numerino);
        }
    } console.log(numeri)
    return numeri;
}
let prova = document.getElementById('prova');
prova.innerHTML = stampanumeri(numeri);

// faccio partire un timer di 30 secondi (che poi sara di 4  cosi faccio prima a vederli )
let cancello = setTimeout(nonelist, 4000);
// //che mi cancellerà (displaynone prova)
function nonelist() {
    //cancello i numeri
    prova.classList.add('none');

}
//funzione che mi rimuove il displaynone e mi rimette quello giusto;
function removenNoneList() {
    prova.classList.remove('none');

}
// //funzione che fa partire il gico e mi confronta i valori del utente 
// let bottone = document.getElementById('go');
// let valoreInputArray = [];

// bottone.addEventListener('click', creaInput());
// //funzione che prende i dati dal input e me li pusha in un array
// function creaInput() {
//     let valoreInput = document.getElementById("numeroUser").value;
//      if (valoreInputArray.length < numeri.length) {
//         valoreInputArray.push(valoreInput);
//         console.log(valoreInputArray);
//     }
// }
const bottone = document.getElementById('go');
const arrInputUtente = [];

function creaInput() {

    let valoreInputHTML = document.getElementById('numeroUser').value;

    if(arrInputUtente.length < NUMERIMEMORY) {
        arrInputUtente.push(valoreInputHTML);
        console.log(arrInputUtente);
        const stampaNumeriOutput = document.getElementById('stampaNumeri');
        stampaNumeriOutput.innerHTML = 'Hai inserito il numero: ' + arrInputUtente;
    }
  numeroUser.value='';
}
bottone.addEventListener('click', () => {
    creaInput();
})

