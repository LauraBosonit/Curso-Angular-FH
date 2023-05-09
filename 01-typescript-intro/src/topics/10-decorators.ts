//Los decoradores son funciones especiales precedidas ppor un "@", que se pueden incluir en las clases, en las propiedades de las clases y en los métodos de las clases
// function classDecorator() {
//     constructor: any
// } {
//     return class extends constructor {
//         newProperty = "New Property";
//         hello = "Override"
//     }
// }

// @classDecorator
export class Superclass {
    public myProperty: string = "Abc123";

    print() {
        console.log('Hola mundo');
    }
}

console.log(Superclass);

const newClass = new Superclass();
console.log(newClass);
