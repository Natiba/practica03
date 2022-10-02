/*
󰝋 Carrera
Crear un programa para controlar las vueltas de una deportista. Debe pedir al
usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo en
segundos de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos
de cada vuelta y el promedio del tiempo de las vueltas (suma de las vueltas /
cantidad de vueltas). Ejemplo:
Cantidad de vueltas: 3
Vuelta 1: 133s
Vuelta 2: 145s
Vuelta 3: 166s
⏱ Promedio: 144.45s
*/

let laps = prompt("Enter a number of laps");
let race = document.querySelector("#race");
let race2 = document.querySelector("#race2");
let race3 = document.querySelector("#race3");
let sum = 0;
let seconds;
let average;

for (let i = 1; i <= laps; i++) {
  //console.log([i]);
  seconds = parseInt(prompt("Enter your time in seconds"));

  race2.innerHTML += `
Lap ${[i]}: <b>${seconds}s</b><br>
`;

  sum += seconds;
  average = sum / laps;

  //console.log(sum);

  race3.innerHTML = `
The average number of laps is: <b>${average} s</b> <br>
`;

  race.innerHTML = `
  Number of laps: <b>${laps}</b> <br>
`;
}
