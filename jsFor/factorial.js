/*
❗️ Factorial
Crear un programa que pida ingresar un número, y muestre su factorial. Este se
calcula multiplicando el mismo número y todos los números que le anteceden hasta
el 1. Por ejemplo: 4 ⇒ 4 _ 3 _ 2 * 1 = 24
*/

let numberFact = parseInt(prompt("Enter a number, please: "));
let factorial = 1;
let factOutput = document.querySelector("#factorial");
let factOutput2 = document.querySelector("#factorial2");

for (let i = 1; i <= numberFact; i++) {
    factorial = factorial * i;
    console.log (factorial);

    factOutput.innerHTML = `
    The factorial number of <b>${numberFact}</b> is =>`; factOutput2.innerHTML += ` <b>${factorial}</b>
    `
}