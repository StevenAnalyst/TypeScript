// TYPES

// Type basico
type Numero = number;

// Type bascio Objeto Literal
type Programadores = {
    nombre: string;
    edad: number;
    lenguajes: string[];
}

// Type con union types
type Nombre = string | null

// Type con propiedades opcionales
type Producto1 = {
    nombre: string;
    precio: number;
    descripcion?: string;
}

// Type para funciones
type Comparador1 = {
    (a: number, b: number): boolean;
}

// Type para clases (class types)
type Persona2 = {
    nombre: string;
    edad: number;
    saludar(): void;
}