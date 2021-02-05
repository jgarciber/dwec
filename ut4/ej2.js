// Generar un array númerico de n números aleatorios

// - Ordénalos de mayor a menor
// - Ordénalos de menor a mayor

let array = [];
for (let i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 100));
}

let mayorMenor = array.sort((a,b) => a - b);
let menorMayor = [...array].sort((a,b) => b - a);
console.log(mayorMenor);
console.log(menorMayor);

// Genera un array aleatorio de tamaño n donde cada entrada
// contenta [text, número] (aleatorios) 
// - ordenar de mayor a menor
// - ordenar de menor a mayor
let arrayRandom = [];
for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    let text = '';
    for (let x = 0; x < Math.floor(Math.random() * (10 - 5)  + 5); x++) {
        text += String.fromCharCode(97 + (Math.random() * 26));
    }
    let numero = Math.floor(Math.random() * 100);
    arrayRandom.push([text, numero]);
}
let menoraMayor = arrayRandom.sort((a,b) => a[1] - b[1]);
let mayoraMenor = [...arrayRandom].sort((a,b) => b[1] - a[1]);
console.log(menoraMayor);
console.log(mayoraMenor);

const [a, b] = arrayRandom;
console.log(a, b);