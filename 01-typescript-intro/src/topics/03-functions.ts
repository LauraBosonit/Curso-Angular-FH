// En el caso de las funciones, se debe indicar el tipo de los parámetros que recibe y, en caso de no querer que Typescript infiera el tipo del valor de retorno, este también se debe indicar a continuación de los paréntesis.

// Función tradicional
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

const result = addNumbers(1, 2);
console.log("Suma: ", result);

// Función flecha
const addNumbersArrow = (num1: number, num2: number): string => {
    return `${num1 + num2}`;
}

const result2 = addNumbersArrow(2, 5);
console.log("Suma string: ", result2);

const fullName = (firstName: string, lastName: string) => `${firstName} ${lastName}`;
let result3 = fullName("Laura", "Cabezas");
console.log("Nombre completo: ", result3);


// Parámetros en las funciones:
// ---------------------------------------------

// Hay parámetros de varios tipos:
// * Obligatorios para la ejecución de la función.
// * Opcionales, que pueden o no pasarse a la función.
// * Por defecto, que si no se pasan a la función, obtienen el valor por defecto que se ha establecido previamente.

// Se deben colocar en este orden como buena práctica.
function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const multiplyResult = multiply(5);

console.log("Multiplicación: ", multiplyResult);

// Objetos como argumentos:
// ------------------------------
// Se pueden pasar objetos a las funciones para trabajar con sus atributos directamente:
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

// Función que recibe al objeto como parámetro y le sube el atributo de los puntos de salud
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: "Strider",
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

healCharacter(strider, 10);
healCharacter(strider, 30);
strider.showHp();


export {}