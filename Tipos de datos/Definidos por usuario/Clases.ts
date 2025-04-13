// CLASES

// Clase con tipado explicito
class Persona {
    nombre: string

    constructor(nombre: string){
        this.nombre = nombre
    }

    saludar(){
        return `Hola, me llamo ${this.nombre}`
    }
}

const steven = new Persona("Steven")
console.log(steven.saludar())