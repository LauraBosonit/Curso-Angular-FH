// Cuando a la función se le pueden pasar argumento de distinto tipo, no podemos definir con precisión de qué tipo es el argumento, ni qué tipo de dato devuelve. En estos casos se utilizan los genéricos, que tienen una sintaxis propia, e indican que el tipo del elemento que se pasa como argumento y el de retorno van a ser del mismo tipo.

// 1) Se definen la función, el argumento y el valor de retorno con el tipo genérico "<T>". Por convenio se utiliza la "T":
export function whatsMyType<T>(argument: T): T  {
    return argument;
}

// 2) A la hora de llamar a la función, se indica el tipo del argumento y el valor de retorno, y el propio argumento:
let amIString = whatsMyType<string>('Hola mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(" "));
console.log(amINumber.toFixed(2));
console.log(amIArray.join("-"));
