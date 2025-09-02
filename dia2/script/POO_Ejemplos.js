// Ejemplo HERENCIA.

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}


class Perro extends Animal {
    hablar() {
        console.log(`${this.nombre} dice: Woof!`);
    }
}


const perro = new Perro("Rocky");
perro.hablar();