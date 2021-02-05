// Ejercicio 1

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(Math.min(...array));
console.log(Math.max(...array));
console.log(array.reduce((p,c) => c += p) / array.length);
console.log(calcularMedia(array.reduce((p,c) => c += p) / array.length));
console.log(esPrimo(array.reduce((p,c) => c += p) / array.length));

function calcularMedia(nota) {
    if (nota < 5) return "suspenso";
    else if (nota >= 5 && nota < 6) return "suficiente";
    else if (nota >= 6 && nota < 7) return "bien";
    else if (nota >= 7 && nota < 9) return "notable";
    else if (nota >= 9 && nota <= 10) return "sobresaliente";
    else return "nota no válida";
}

function esPrimo(n) {
    if (Number.isInteger(n) == false) return false;
    if (n <= 0) return false;
    if (n == 1 || n == 2) return true;
    for (let i = 2; i <= Math.floor(n / 2); i++) {
        if (n % i == 0) return false;
    }
    return true;
}
