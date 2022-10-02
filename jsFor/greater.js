/*
🔍 Número mayor o menor
Crear un programa que pregunte si se desea buscar el mayor o el menor número de un conjunto. Luego, preguntar entre cuántos se desea buscar. Ir pidiendo ingresar uno por uno la cantidad de números que se eligió, y al finalizar mostrar el número mayor o menor de todos los ingresados según el elegido.
*/

let greaterUser = prompt("What number do you want to search? 'older' or  'younger' ");
let numberUser = parseInt(prompt("Among how many do you want to search? Enter a number, please"));
let nums = [];

let greaterOutput = document.querySelector("#greater");

for (let i = 0; i < numberUser; i++) {
    let numbers = parseInt(prompt("Enter a number ${i}"));
    nums.push(numbers);
    console.log(nums);

    // ordenar el array de menor a mayor o viceversa
    nums.sort(function(a, b){return a - b});
    console.log(nums);

    if (greaterUser == 'older') {
        greaterOutput.innerHTML = `
        The <i>older</i> number of your group is: <b>${}</b>`
    }
    else {
        greaterOutput.innerHTML = `
        The <i>younger</i> number of your group is: <b>${}</b>`
    }
}
