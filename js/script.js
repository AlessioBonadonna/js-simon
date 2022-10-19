
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
//i numeri che ha visto precedentemente, tramite una casella di input e un bottone
// Dopo che sono stati inseriti i 5 numeri, 
//il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// costanti 
let numeri = [];
const NUMERIMEMORY = 5;
const bottone = document.getElementById('go');
const arrInputUtente = [];
let prova = document.getElementById('prova');
let titolo= document.getElementById('titolo');
let secondoTitolo=document.getElementById("scriviinumeri")
prova.innerHTML = stampanumeri(numeri);
let cancello = setTimeout(nonelist, 4000);
let inserisco=setTimeout(removenNoneList,4000);
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

// //che mi cancellerà (displaynone prova)
function nonelist() {
    //cancello i numeri
    prova.classList.add('none');
    titolo.classList.add('none');

}
//funzione che mi rimuove il displaynone e mi rimette quello giusto;
function removenNoneList() {
    secondoTitolo.classList.remove('none');

}
//bottone ed event click


function creaInput() {

    let valoreInputHTML = parseInt(document.getElementById('numeroUser').value);

    if (arrInputUtente.length < NUMERIMEMORY) {
        arrInputUtente.push(valoreInputHTML);
        console.log(arrInputUtente);
        const stampaNumeriOutput = document.getElementById('stampaNumeri');
        stampaNumeriOutput.innerHTML = 'Hai inserito il numero: ' + arrInputUtente;
    }
    numeroUser.value = '';
}
bottone.addEventListener('click', () => {
    creaInput();
});

//funzione che compara i valori aggiunti con array random


const verificaInput = document.getElementById('verifica');
const risultato = document.getElementById('risultato');


function verificaNumeri() {
    let contatore=0;
    for(let i = 0; i < numeri.length; i++) {
        if(arrInputUtente.includes(numeri[i])) {
            risultato.innerHTML = '<span class="green">Bravo !! <br> Hai indovinato tutti i numeri!</span>';
        } else {
            contatore++;
            
            risultato.innerHTML = '<span class="red">Hai perso <br> non hai indovinato ' + contatore + ' numeri! </span>';
        }
    }
}
function ricaricapagina(){
    setTimeout(function() {
        window.location.reload()
      }, 5000);
}
verificaInput.addEventListener('click', () => {
    verificaNumeri();
    ricaricapagina();

});


//sbagliata
// function verificaNumeri() {
//     let trovato = false;
//     let contatore = 0;
//     for (i = 0; i < arrInputUtente.length; i++) {
//         for (j = 0; j = numeri.length; j++) {
//             if (arrInputUtente[i] == numeri[j]) {
//                 trovato = true;
//                 break;
//             } else {
//                 trovato =false;
//             }

//         } if (trovato == false) {
//             contatore++;
//         }
//     }
//     if (trovato ==true) {
//         let vittoria = document.getElementById('risultato')
//         vittoria.innerHTML = "porcodio"
//     } else {
//         let vittoria = document.getElementById('risultato')
//         vittoria.innerHTML = "Dioporco " + contatore;
//     }
// }
// let verific = document.getElementById('verifica');

// verific.addEventListener('click', () => {
//     verificaNumeri()
// });