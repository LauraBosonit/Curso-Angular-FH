export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Valki"
}

const passenger2: Passenger = {
    name: "Ángeles",
    children: ["Laura", "Daniel"]
}

const printChildren = (passenger: Passenger) => {
    const childrenCounter = passenger.children?.length || 0;
    console.log(`Nº de hijos de ${passenger.name}: `, childrenCounter);
}

printChildren(passenger1);
printChildren(passenger2);