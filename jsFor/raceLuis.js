let laps5= prompt("Ingrese la cantidad de vueltas que va realizar");
let total =0;
timelap = 0
console.log("Cantidad de vueltas : "+ laps5);
for (i =1 ; i <= laps5; i++){
    let timelap = prompt(" Indique el tiempo de su vuelta Nro. " + i +" (en segundos)");
    total +=parseInt(timelap);
    console.log("Vuelta " + i + ": " + timelap + " s");
}
console.log("⏱ Promedio: " + total / laps5+ " s");