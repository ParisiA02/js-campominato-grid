/*
    1. chiedo all' utente il livello del gioco
    2. definisco una funzione che generi dei numeri casuali
    3. definisco una funzione che generei dei quadrati
    4. se l'utente sceglie il lvl 1, stamperò 100 quadratini, lvl2, 81 quadratini e lvl3, 79 quadratini
    5. definisco un evento che al click renda il quadratino di unn altro colore
*/

let livello = parseInt(prompt("Inserisci il livello che vuoi giocare: 1, 2 o 3"));
let container = document.querySelector(".container");

if(livello === 1){

    for(let i = 0; i < 100; i++){
        let square = squareGenerator("div","lvl1");
        container.appendChild(square);

        square.addEventListener("click",function(){
            square.classList.add("colore");
        });
    }

}else if(livello === 2){

    for(let i = 0; i < 81; i++){
        let square = squareGenerator("div","lvl2");
        container.appendChild(square);

        square.addEventListener("click",function(){
            square.classList.add("colore");
        });
    }

}else if(livello === 3){

    for(let i = 0; i < 49; i++){
        let square = squareGenerator("div","lvl3");
        container.appendChild(square);

        square.addEventListener("click",function(){
            square.classList.add("colore");
        });
    }

}


// funzioni
function squareGenerator(squareGen, classAdd){
    let node = document.createElement(squareGen);
    node.classList.add(classAdd);
    node.innerHTML += randomNum();
    return node;
}

function randomNum(){
    numero = Math.floor(Math.random() * 5 + 1);
    return numero;
}