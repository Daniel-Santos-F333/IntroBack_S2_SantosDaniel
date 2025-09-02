//#####################################
//############# Ejemplos ##############
//#####################################

// Ejemplo HERENCIA.
console.log(`Ejemplo de Herencia: `);


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

// En este ejemplo la clase Perro hereda el constructor y metodo de Animal
// Y con extends se redefine el metodo hablar()
//#################################################################################
//#################################################################################

// Ejemplo Encapsulamiento.

console.log(`-------------------------------------------`);
console.log(`Ejemplo de Encapsulamiento: `);

