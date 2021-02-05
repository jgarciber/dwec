// Ejercicio 6.1. Crea una clase matriz que contenga un array bidimensional y la función sumar.
// Ejercicio 6.2. Crea una función “copiar” que devuelva una copia “profunda” de un array
// bidimensional.

class Matriz {
    static sumar(arrayBidimensional = [[]]) {
        let sum = 0;
        /* arrayBidimensional.forEach(array => {
            array.forEach(value => {
                sum += value;
            });
        }); */
        // arrayBidimensional.forEach(array => sum += array.reduce((a,b) => a + b));
        sum = arrayBidimensional.flat().reduce((a, b) => a + b);
        return sum;
    }

    static copia(array) {
        /* let copia = [];
        for (let i = 0; i < array.length; i++) {
            copia[i] = array[i];
        }
        return copia; */
        return array.slice();
    }
}

const arrayBidimensional = [[1,2],[3,4],[5,6]];

const suma = Matriz.sumar(arrayBidimensional);
console.log("Suma [[1,2],[3,4],[5,6]]: " + suma);

const copia = Matriz.copia(arrayBidimensional);
console.log("Origen: " + arrayBidimensional);
copia[0][0] = 100;
console.log("Objetivo: " + copia);

// EXTRA - Copiando objetos y objetos planos (json)

class Fruit {
    constructor(name,colour) {
        this.name = name;
        this.colour = colour;
    }
}

function copiarObj(source) {
    return Object.assign(new Fruit(), source);
}

function copiarJSON(source) {
    return Object.assign({}, source);
}

let banana = new Fruit('Banana', 'Yellow');
let bananaCopy = copiarObj(banana);
bananaCopy.name = 'Orange';
bananaCopy.colour = 'Orange';
console.log(banana);
console.log(bananaCopy);

let bananaJSON = copiarJSON(banana);
bananaJSON.name = 'Pear';
bananaJSON.colour = 'Green Yellow';
console.log(banana);
console.log(bananaJSON);