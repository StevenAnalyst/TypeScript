// FUNCIONES

// Declaracion funcion con tipado explicito
function suma(a: number,b: number): number{
    return a + b;
}

// Funciones flecha con retorno implicito
const dividir = (a: number, b: number) => a / b;

// Funciones con parametros opcionales
function saludar(nombre: string, edad: number): string{
    if(edad !== undefined){
        return `Hola ${nombre}, tu edad es ${edad}`
    }else{
        return `Hola ${nombre}`
    }
}

// Funciones con parametros por defecto
function saludar2(nombre: string, edad: number = 18): string{
    return `Hola, soy ${nombre} y tengo ${edad} años`
}