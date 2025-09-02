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

class CuentaBancaria {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    getSaldo() {
        return this.#saldo;
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
        }
    }
}

const cuentaDanielito = new CuentaBancaria(1000);
cuentaDanielito.depositar(500);
console.log(`Su saldo es de: $${cuentaDanielito.getSaldo()} pesos`);

// En este ejemplo usamos "#" para encapsular el saldo y que no se pueda acceder directamente a su valor desde afuera del objeto.
// Ya que si intentamos "console.log(cuentaDanielito.#saldo);" esto nos daria un error.
//######################################################################################
//######################################################################################

// Ejemplo Polimorfismo.
console.log(`-------------------------------------------`);
console.log(`Ejemplo de Polimorfismo: `);
