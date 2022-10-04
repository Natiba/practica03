/*
💲Cara o cruz
Crear un programa que permita escoger entre cara o cruz. El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no. El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a 0. También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar. Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.
*/

let userFace = prompt("Enter 'Face' or 'Cross' to play, please").toLowerCase();
let faceMessage = document.querySelector("#faceMessage");
let roundsMessage = document.querySelector("#roundsMessage");

let counter = 0;
let maxWinnerRounds = [];

while (userFace === 'face' || userFace === 'cross') {
    for (let i = 1; i < 10; i++) {
        let randomFace = Math.floor(Math.random() * 2) + 1;
        console.log(randomFace);

        if (randomFace === 1) {
            randomFace = 'face';
        } else {
            randomFace = 'cross';
        }
        
        if (userFace === randomFace) {
            faceMessage.innerHTML = `
                You were right!! 😃
                `;
            counter++;
            roundsMessage.innerHTML = `
        You have <b>${counter}</b> successful rounds
        `;
          } else {
            faceMessage.innerHTML = `
                You fail!! 😥
                `;
                counter = 0;
          }
        
//maxWinnerRounds.push(counter);
//console.log(maxWinnerRounds);
    }

  userFace = prompt("Enter 'Face' or 'Cross' to play. 'LEAVE' to end the game").toLowerCase();
}
