/* 13 - Crear un juego de combate contra un monstruo.
●	El juego debe tener las siguientes acciones posibles:
○	ATACAR MONSTRUO: genera un número aleatorio entre 1 y Ataque máximo jugadora y lo resta a Vida monstruo
○	TOMAR POCION: genera un número aleatorio entre 1 y Curación máxima poción y lo suma a Vida jugadora y resta 1 a Cantidad de pociones
○	BUSCAR POCION: genera un número entre 1 y 4, si sale 1 suma una poción, sino no encuentra nada
○	SALIR: termina el programa
●	En todo momento se debe mostrar un mensaje de lo que está pasando
●	Luego de cada acción, el monstruo ataca a la jugadora y le resta a Vida jugadora un número aleatorio entre 1 y Ataque máximo monstruo
●	Luego del ataque del monstruo, se debe mostrar la vida de ambos
●	El programa termina cuando o la jugadora o el monstruo se quedan con vida igual o menor a 0
●	Mostrar un mensaje con el resultado final. */

let vidaJ = 100;
let vidaM = 100;
let pociones = 10;
let ataMaxJ= 20;
let ataMaxM = 25;
let curaMax= 20;
let minTodo= 1;

let opcion = prompt("Elija el número de la opción que desee: \n 1- ATACAR \n 2- TOMAR POCIÓN \n 3- BUSCAR POCIÓN \n 4- SALIR");
    opcion = opcion;

switch (opcion) {

    case '1': 
        let ataque = minTodo + Math.floor(Math.random()* ataMaxJ);
        vidaM = vidaM - ataque; 
        
    
        console.log("Ataque exitoso! Le disminuiste " + ataque + " puntos a la vida del monstruo.");
        
        let ataqueM = minTodo + Math.floor(Math.random()* ataMaxM);
        console.log("No obstante el monstruo ataca y te reduce " + ataqueM + " puntos vitales.");

        vidaJ = vidaJ - ataqueM;

        console.log("Luego de esta ronda tienes esta cantidad de vida: " + vidaJ + " y el monstruo: " + vidaM + "."); 
        
        //opcion = prompt("Elija el número de la opción que desee: \n 1- ATACAR \n 2- TOMAR POCIÓN \n 3- BUSCAR POCIÓN \n 4- SALIR");
        

    case '2':
        let cura = minTodo + Math.floor(Math.random()* curaMax);
        vidaJ = cura + vidaJ;
        pociones--;
        console.log("Sumaste " + cura + " puntos de tu vida con éxito. Ahora posees " + vidaJ + " de vida, pero perdiste una poción y te quedan " + pociones);
        
        
        let ataqueMo = minTodo + Math.floor(Math.random()* ataMaxM);
        console.log("No obstante, el monstruo ataca y te quita " + ataqueMo + " puntos.");
        vidaJ = vidaJ - ataqueMo;

        console.log("Luego de esta ronda tienes esta cantidad de vida: " + vidaJ + " y el monstruo: " + vidaM + ".");
        break;

    case '3': 
        let busqueda = minTodo + Math.floor(Math.random()* 4);
        if (busqueda === 1) {
            pociones++;
            console.log("Excelente búsqueda. Conseguiste una poción más. Ahora tienes " + pociones + " pociones.");

           
            let ataqueMon = minTodo + Math.floor(Math.random()* ataMaxM);
            console.log("A pesar de esto el monstruo ataca y te reduce " + ataqueMon + " puntos vitales.");

            vidaJ = vidaJ - ataqueMon;

            console.log("Luego de esta ronda tienes esta cantidad de vida: " + vidaJ + " y el monstruo: " + vidaM + ".");   

        } else {
            console.log("No se encontró ninguna poción.");
            
            let ataqueMons = minTodo + Math.floor(Math.random()* ataMaxM);
            console.log("Pero el monstruo consigue atacar y te quita " + ataqueMons + " puntos.");
            
            vidaJ = vidaJ - ataqueMons;

            console.log("Luego de esta ronda tienes esta cantidad de vida: " + vidaJ + " y el monstruo: " + vidaM + ".");

        }
        opcion = prompt("Elija el número de la opción que desee: \n 1- ATACAR \n 2- TOMAR POCIÓN \n 3- BUSCAR POCIÓN \n 4- SALIR");
    case '4':
        document.write("La partida ha finalizado.");
        
}

if (vidaJ === 0) {
    document.write("Tu vida se agotó, fuiste derrotad@ por el monstruo");
} else if (vidaM === 0){
    document.write("Felicitaciones, le quitaste toda la vida al monstruo!");
}