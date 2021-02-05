// Ejercicio 4.1. Implementa una función que realice la multiplicación de todos los parámetros
// pasados a la función. El número de parámetros debe ser indeterminado, por ejemplo, se puede
// llamar con 3 o 5 parámetros.
// Ejercicio 4.2. Implementa una función que devuelva dos valores (Módulo y nota) y utiliza la
// deconstrucción para asignarlos a dos variables.
// Ejercicio 4.3. Implementa una función potencia que por defecto calcule el cuadrado del primer
// valor.

// 4.1
function multiplicarTodo(...args) {
    let sum = 1;
    args.forEach(v => sum *= v);
    return sum;
}

console.log("Resultado: " + multiplicarTodo(1,5,3,9));

// 4.2
function dosValores(modulo, nota) {
    return [modulo, nota ];
}

const [modulo, nota] = dosValores('DWEC', 10);
console.log(modulo, nota);

// 4.3
function cuadrado(numero, potencia = 2) {
    return numero**potencia;
}

console.log("Potencia: " + cuadrado(3));
console.log("Potencia: " + cuadrado(3,3));