// Variables:
// Typescript contempla los mismos tipos primitivos que JavaScript: string, number, boolean, etc...
let name: string = "Kira"
let hpPoints: number | "FULL" = 95;
const isAlive: boolean = true;

hpPoints = "FULL";

console.log({name, hpPoints, isAlive});

export {};