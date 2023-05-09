interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Ella",
    details: {
        author: "Karol G",
        year: 2012
    }
}

// Destructuring de objetos:
// -----------------------------
// Nos permite obtener los atributos de un objeto en variables independientes, con las que podemos trabajar directamente.
// Podemos obtener los atributos y valores del objeto de la siguiente forma:
// const { audioVolume, songDuration, song, details: { author, year } } = audioPlayer;

// console.log("Volumen: ", audioVolume);
// console.log("Duración: ", songDuration);
// console.log("Canción: ", song);
// console.log("Autor: ", author);
// console.log("Año de lanzamiento: ", year);

// Destructuring de arrays:
// -----------------------------
const dbz: string[] = ["Goku", "Vegeta", "Trunks"];

//De esta manera obtenemos los elementos del array en una variable independiente
// const [ p1, p2, p3 ] = dbz;

//Si solo queremos acceder a un elemento, podemos destructurar así:
// const [ , , p3 ] = dbz;

//Por último, podemos indicar valores opcionales, por si no encontramos el elemento en el array
const [ , , p3 = "No hay personaje"] = dbz;

console.log("Personaje: ", p3);


export {};