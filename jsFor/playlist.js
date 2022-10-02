/*
📀 Playlist
Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas
canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de
canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que
quedan por agregar y la playlist con los temas hasta el momento a medida que se
va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la
lista de canciones.
*/

let userPlaylist = prompt("Enter a playlist").toUpperCase();
let playSong = parseInt(prompt("Enter a number of songs"));

let playlist = [];
let remain = 0;

let songOutput = document.querySelector("#play");
let songOutput2 = document.querySelector("#play2");
let songOutput3 = document.querySelector("#play3");

/*
for (let i = 1; i <= playSong; i++) {
    let songs = prompt(`Enter the song number: ${i}`);
    console.log(songs);

    playlist.push(songs);
    console.log(playlist);

    remain = playSong - playlist.length;
    console.log(remain);

    songOutput.innerHTML = `
    Your playlist is <b>${userPlaylist}</b>, and your number of songs is: <b>${playSong}</b>
    `;
  

    if (i === 1) {
        songOutput2.innerHTML += `
        Your song number <b>${i}</b> is <b>${songs}</b>. <br>
        Your playlist looks like this= <i>${userPlaylist}:</i> '${playlist}'<br> 
        The number of songs that remain to be added is: <b>${remain}</b>
        <br><br> 
        `;
    }
else {
    songOutput2.innerHTML += `
    Your song number <b>${i}</b> is <b>${songs}</b>. <br>
    Your playlist looks like this => <i>${userPlaylist}:</i> ${playlist} <br> 
    The number of songs that remain to be added is: <b>${remain}</b>
    <br><br> 
    `;
}
    
} */

for (let i = 1; i <= playSong; i++) {
  function requestSong() {
    let songs = prompt(`Enter the song number: ${i}`);
    //console.log(songs);

    playlist.push(songs);
    //    console.log(playlist);

    remain = playSong - playlist.length;
    //console.log(remain);

    songOutput.innerHTML = `
Your playlist is <b>${userPlaylist}</b>, and your number of songs is: <b>${playSong}</b>
`;

    songOutput2.innerHTML += `
Your song number <b>${i}</b> is <b>'${songs}'</b>. <br>
Your playlist looks like this => <i>${userPlaylist}:</i> '${playlist}'<br> 
The number of songs that remain to be added is: <b>${remain}</b>
<br><br> 
`;

songOutput3.innerHTML = `
Your Playlist is <b>${userPlaylist}: </b> 
${playlist} 
`;
  }
  requestSong()
}

// Ver como pongo espacio luego de cada cancion
// Acomodar estetica
// Ver si cumple con lo que pide el enunciado
