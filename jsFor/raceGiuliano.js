var vueltas = prompt('Ingrese la cantidad de vueltas que va a realizar');
console.log('Cantidad de vueltas: ', vueltas);

i = 0;
var sumat = 0;

while (vueltas > i)
{
    let tiempo = parseInt(prompt('Ingrese el tiempo en segundos de cada vuelta'));
    sumat = parseInt(sumat + tiempo);
    i++;
    console.log('Vuelta', i,':', tiempo)
}

promedio = parseFloat(sumat/vueltas);
//console.log('\u231a', 'promedio es: ', promedio);//
console.log('⏱', 'promedio es: ', promedio);