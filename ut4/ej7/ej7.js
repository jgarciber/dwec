// Ejercicio 7.1. Implementa y exporta un módulo llamado “Pruebas”. Este debe contener una
// variable constante llamada “saludo” que contenga “Buenos dias”.
// Ejercicio 7.2. Importa y utiliza la variable saludo desde otro código Javascript de forma que sea
// accesible directamente.
// Ejercicio 7.3. Importa y utiliza la variable saludo desde otro código Javascript de forma que sea
// accesible mediante un objeto Module.
// Ejercicio 7.4. Implementa y exporta una función “saludar” en el módulo “Pruebas” que muestre
// por pantalla (mediante un alert) el contenido de “saludo”.
// Ejercicio 7.5. Importa y utilizar la función “saludar” mediante un objeto Module.
// Ejercicio 7.6. Importa dinámicamente y utilizar la función “saludar”.

import {saludo} from './Pruebas.mjs'; // VSCode no importa un módulo correctamente con .js (con .mjs Si O_ò)
console.log(saludo);

import * as pruebas from './Pruebas.mjs';
console.log(pruebas.saludo);

import('./Pruebas.mjs').then(Module => console.log("import dinámico: " + Module.saludo));

document.getElementById('saludar').addEventListener('click', () => {
    import('./Pruebas.mjs').then(m => alert(m.saludo));
});
console.log("---");
pruebas.saludar();
pruebas.despedirse();