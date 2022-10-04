//👾 Monstruo
//Crear un juego de combate contra un monstruo.
//● El juego debe contar con las siguientes variables:
//○ Vida jugadora
//○ Vida monstruo
//○ Cantidad de pociones
//○ Ataque máximo jugadora
//○ Ataque máximo monstruo
//○ Curación máxima poción
//● Todos los valores anteriores deben ser números enteros (a elecci ́ón)
//● El juego debe tener las siguientes acciones posibles:
/*○ ATACAR MONSTRUO: genera un número aleatorio entre 1 y Ataque
máximo jugadora y lo resta a Vida monstruo */
/*○ TOMAR POCION: genera un número aleatorio entre 1 y Curación
máxima poción y lo suma a Vida jugadora y resta 1 a Cantidad de
pociones */
/*○ BUSCAR POCION: genera un número entre 1 y 4, si sale 1 suma una
poción, sino no encuentra nada */
// ○ SALIR: termina el programa
// ● En todo momento se debe mostrar un mensaje de lo que está pasando
/*
● Luego de cada acción, el monstruo ataca a la jugadora y le resta a Vida
jugadora un número aleatorio entre 1 y Ataque máximo monstruo */
// ● Luego del ataque del monstruo, se debe mostrar la vida de ambos
/* ● El programa termina cuando o la jugadora o el monstruo se quedan con vida igual o menor a 0 */
//● Mostrar un mensaje con el resultado final

let playerLife = 3;
let monsterLife = 10;
let numberOfPotions = 4;
let maxPlayerAttack = 5;
let maxMonsterAttack = 20;
let maxHealingPotion = 6;
let monsterLifeRes;
let playerLifeRes;
let potionSum = 0;

let monsterMessage = document.querySelector("#monsterMessage");
let potionMessage = document.querySelector("#potionMessage");
let leaveMessage = document.querySelector("#leaveMessage");

// ATTACK MONSTER

function monsterAttack() {
  for (let i = 1; i <= monsterLife; i++) {
    let randomAttack = Math.floor(Math.random() * maxPlayerAttack) + 1; // Returns a random integer from 1 to 5 (maxPlayerAttack):
    monsterLifeRes = monsterLife - randomAttack;
    monsterLife = monsterLifeRes;
    console.log(randomAttack);
    console.log(monsterLifeRes);

    if (monsterLifeRes > 0) {
      monsterMessage.innerHTML += `
          In this ${i} lap, the monster has ${monsterLifeRes} lives <br>`;
    } else {
      monsterMessage.innerHTML = `
          The monster has no more lives`;
    }
  }
}
monsterAttack();

// DRINK POTION:

function drinkPotion() {
  for (let i = 0; i <= numberOfPotions; i++) {
    let randomPotion = Math.floor(Math.random() * maxHealingPotion) + 1;
    console.log(randomPotion); // Returns a random integer from 1 to 6 (maxHealingPotion)
    playerLifeRes = playerLife + randomPotion;
    numberOfPotions -= 1;
    console.log(numberOfPotions);

    if (numberOfPotions > 0) {
      potionMessage.innerHTML += `
        You have <b>${playerLifeRes}</b> lives and <b>${numberOfPotions}</b> potions<br><br>
        `;
    } else {
      potionMessage.innerHTML = `
        Sorry, you have No More Potions
        `;
    }
  }
}
drinkPotion();

// SEARCH POTION:

function searchPotion() {
  let randomFindPotion = Math.floor(Math.random() * 4) + 1;
  console.log(randomFindPotion);

  if (randomFindPotion === 1) {
    potionSum = randomFindPotion + numberOfPotions;
    console.log(numberOfPotions);
    console.log(potionSum);
  }
}

searchPotion()

// LEAVE:

if (playerLife == 0 || monsterLife === 0) {
leaveMessage.innerHTML = `
Sorry, the game is OVER <br>`;
let playAgain = prompt("Do you want to play again? 'Yes' or 'No'").toLowerCase();
}
// Una pregunta al jugador de si quiere continuar jugando o salir?
