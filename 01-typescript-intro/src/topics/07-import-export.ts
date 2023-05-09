import { Product, calculateTax, calculateTaxOptions } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: "Nokia",
        price: 100
    },
    {
        description: "iPad",
        price: 150
    }
];

const tax = 0.15;


const [ total, taxTotal ] = calculateTax({
    products: shoppingCart, 
    tax: tax
});

console.log("Total: ", total);
console.log("Tax: ", taxTotal);


export {};