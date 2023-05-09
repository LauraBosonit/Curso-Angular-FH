// Hay dos formas de definir un constructor:

export class Person {
    // 1) Definiendo primero los atributos y después el constructor:

    // public name: string;
    // private address: string;

    // constructor(name: string, address: string) {
    //     this.name = name;
    //     this.address = address;
    // }

    // 2) Definiendo los atributos y el constructor a la vez:
    constructor(
       public firstName: string,
       public lastName: string,
       private address: string = "No address" 
    ) {}
}

// Herencia:
// ----------------------------------
// Se debe llamar al constructor de la clase padre y pasarle los valores necesarios:

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, "New York"); // Constructor de la clase padre
//     }
// }

// Composición:
// ----------------------------------
// Es preferible utilizar la composición de clases, en lugar de la herencia:
export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person   //En lugar de extender una clase de otra, pasamos al constructor la clase que queramos usar. De esta manera, aunque la clase Hero cambie, la clase Person se mantiene intacta.
    ) {}
}

const person = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony', person);
console.log(ironman);
