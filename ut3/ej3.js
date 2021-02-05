/**
 * Ejercicio 3
 * 3.1. Construye un objeto valor Map con clave DNI y valor un nombre. Añádele 100 elementos de forma
 * aleatoria.
 * ❖Comprueba si un DNI dado se encuentra en el Map. En caso positivo muestra su nombre y en caso
 * negativo el texto “No existe”.
 * 
 * 3.2. Construye un objeto valor Set de DNI. Añádele 100 elementos de forma aleatoria.
 * ❖Comprueba si un DNI dado se encuentra en el Set.
 * 
 * 3.3. Repite los ejercicios 3.1. y 3.2. utilizando weakMap y weakSet, respectivamente.
 * 
 * 3.4. ¿Cuánto tiempo, en milisegundos, tardan la solución normal y la solución weak? Ten en cuenta
 * todos los tiempos (creación y consulta).
 * ❖Realiza la comparación haciendo una sola consulta.
 * ❖Realiza la comparación haciendo cien consultas (puede ser la misma).
 */

import { getRandomDNI } from '../lib/_randomDNI.js';
import { getNombreAleatorio } from '../lib/_randomName.js';

const DNI = '11223344K';

const mapResultado = document.getElementById('mapResultado');
const setResultado = document.getElementById('setResultado');
const weakMapResultado = document.getElementById('weakMapResultado');
const weakSetResultado = document.getElementById('weakSetResultado');

const mapTiempo = document.getElementById('mapTiempo');
const setTiempo = document.getElementById('setTiempo');
const weakMapTiempo = document.getElementById('weakMapTiempo');
const weakSetTiempo = document.getElementById('weakSetTiempo');

const mapTiempo2 = document.getElementById('mapTiempo2');
const setTiempo2 = document.getElementById('setTiempo2');
const weakMapTiempo2 = document.getElementById('weakMapTiempo2');
const weakSetTiempo2 = document.getElementById('weakSetTiempo2');

document.getElementById('buscar').addEventListener('click', () => {
    runMap();
    runSet();
    runWeakMap();
    runWeakSet();
});

// ==================================================
//  MAP
// ==================================================
function runMap() {
    const t1 = window.performance.now();
    let miMap = new Map();
    for (let i = 0; i < 100; i++) {
        miMap.set(getRandomDNI(), getNombreAleatorio());
    }
    
    miMap.set(DNI, 'RuPeRTo');

    if (miMap.get(DNI)) {
        mapResultado.innerHTML = '<span class="text-success fw-bold">Encontrado: ' + miMap.get(DNI) + '</span>';
    } else {
        mapResultado.innerHTML = '<span class="text-danger fw-bold">No encontrado</span>';
    }
    const t2 = window.performance.now();
    mapTiempo.innerHTML = t2 - t1;

    for (let i = 0; i < 100; i++) {
        if (miMap.get(DNI)) {
            mapResultado.innerHTML = '<span class="text-success fw-bold">Encontrado: ' + miMap.get(DNI) + '</span>';
        } else {
            mapResultado.innerHTML = '<span class="text-danger fw-bold">No encontrado</span>';
        }
    }
    const t3 = window.performance.now();
    mapTiempo2.innerHTML = t3 - t1;
}

// ==================================================
//  SET
// ==================================================
function runSet() {
    const t1 = window.performance.now();
    let miSet = new Set();
    for (let i = 0; i < 100; i++) {
        miSet.add(getRandomDNI());
    }
    miSet.add(DNI);
    
    let encontrado = miSet.has(DNI);
    if (encontrado) {
        setResultado.innerHTML = '<span class="text-success fw-bold">Encontrado: ' + [...miSet].find(v => v === DNI) + '</span>';
    } else {
        setResultado.innerHTML = '<span class="text-danger fw-bold">No encontrado</span>';
    }
    const t2 = window.performance.now();
    setTiempo.innerHTML = t2 - t1;

    for (let i = 0; i < 100; i++) {
        let encontrado = miSet.has(DNI);
        if (encontrado) {
            setResultado.innerHTML = '<span class="text-success fw-bold">Encontrado: ' + [...miSet].find(v => v === DNI) + '</span>';
        } else {
            setResultado.innerHTML = '<span class="text-danger fw-bold">No encontrado</span>';
        }
    }
    const t3 = window.performance.now();
    setTiempo2.innerHTML = t3 - t1;
}

// ==================================================
//  WEAKMAP
// ==================================================
function runWeakMap() {
    const t1 = window.performance.now();
    let miWeakMap = new WeakMap();
    for (let i = 0; i < 100; i++) {
        miWeakMap.set({k: getRandomDNI()}, {v: getNombreAleatorio()});
    }
    const key = {k: DNI};
    const value = {v: 'RuPeRTo'};
    miWeakMap.set(key, value);

    if (miWeakMap.get(key)) {
        weakMapResultado.innerHTML = '<span class="text-success fw-bold">Encontrado: ' + miWeakMap.get(key).v + '</span>';
    } else {
        weakMapResultado.innerHTML = '<span class="text-danger fw-bold">No encontrado</span>';
    }
    const t2 = window.performance.now();
    weakMapTiempo.innerHTML = t2 - t1;

    for (let i = 0; i < 100; i++) {
        if (miWeakMap.get(key)) {
            weakMapResultado.innerHTML = '<span class="text-success fw-bold">Encontrado: ' + miWeakMap.get(key).v + '</span>';
        } else {
            weakMapResultado.innerHTML = '<span class="text-danger fw-bold">No encontrado</span>';
        }
    }
    const t3 = window.performance.now();
    weakMapTiempo2.innerHTML = t3 - t1;
}


// ==================================================
//  WEAKSET
// ==================================================
function runWeakSet() {
    const t1 = window.performance.now();
    let miWeakSet = new WeakSet();
    for (let i = 0; i < 100; i++) {
        let v = {k: getRandomDNI()}
        miWeakSet.add(v);
    }
    const key = {k: DNI};
    miWeakSet.add(key);

    let encontrado = miWeakSet.has(key);

    if (encontrado) {
        weakSetResultado.innerHTML = '<span class="text-success fw-bold">Encontrado: ' + key.k + '</span>';
    } else {
        weakSetResultado.innerHTML = '<span class="text-danger fw-bold">No encontrado</span>';
    }
    const t2 = window.performance.now();
    weakSetTiempo.innerHTML = t2 - t1;

    for (let i = 0; i < 100; i++) {
        let encontrado = miWeakSet.has(key);
        if (encontrado) {
            weakSetResultado.innerHTML = '<span class="text-success fw-bold">Encontrado: ' + key.k + '</span>';
        } else {
            weakSetResultado.innerHTML = '<span class="text-danger fw-bold">No encontrado</span>';
        }
    }
    const t3 = window.performance.now();
    weakSetTiempo2.innerHTML = t3 - t1;
    console.log(miWeakSet);

}