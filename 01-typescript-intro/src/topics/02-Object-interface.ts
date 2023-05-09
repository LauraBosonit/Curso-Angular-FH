const skills: string[] = ['Bash', 'Counter', 'Healing']; 

//Las interfaces nos permiten definir de qué tipo debe ser cada atributo de nuestro objeto
interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string   //Cuando utilizamos la interrogación estamos indicando que el atributo puede ser opcional
}

//Una vez creada la interfaz, cuando creemos un objeto podemos utilizarla como su tipo. Debe cumplir exactamente con la estructura de la interfaz, si no, produce un error.
const strider: Character = {
    name: "Strider",
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown = "Rivendell";

console.table(strider)

export {}