/*
🔢 Números impares
Crear un programa que muestre en consola los números impares entre el 0 y el 20
*/

let oddOutput = document.querySelector("#odd");
let oddOutput2 = document.querySelector("#odd2");

for (let i = 0; i <=20; i++) {

if(i%2 !== 0) {

    console.log(i)

    oddOutput.innerHTML = `
    Odd Numbers: 
    `
    oddOutput2.innerHTML += `
    <b>${i}</b>
    `
}
}