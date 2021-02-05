// Ejercicio 5.1. Define la clase trabajador. Las propiedades de trabajador deben ser: nombre
// completo (string); genero (“hombre”, “mujer”, “otro” o “prefiero no decirlo”), fecha de
// contratación (entre 1991 y la actualidad), formación (“Sin estudios”, “Primaria”, “ESO”,
// “Bachiller”, “CFGM FP”, “CFGS FP”, “Grado universitario”, “Master universitario”, “Doctorado”) y
// puesto (“Base”, “Medio”, “Superior”, “Super superior”). Se deben utilizar enumeradores
// Ejercicio 5.2. Implementa una función generadora que devuelva un objectos Trabajadores
// aleatorios.
// Ejercicio 5.3. Convierte un objeto Trabajador a formato JSON y muestra la cadena por pantalla.
// Ejercicio 5.4. Convierte el texto JSON resultante del ejercicio anterior en un objeto Trabajador.

export function getNombreAleatorio() {
    var nombre = '';
    let long = Math.floor(Math.random() * (10 - 5) + 5);
    for (let i = 0; i < long; i++) {
        nombre += String.fromCharCode(97 + Math.random() * 26);
    }
    return nombre;
}

export const GENERO = Object.freeze({
    HOMBRE: "hombre",
    MUJER: "mujer",
    OTRO: "otro",
    PREFIERO_NO_DECIRLO: "prefiero no decirlo"
});

export const FORMACION = Object.freeze({
    SIN_ESTUDIOS: "Sin estudios",
    PRIMARIA: "Primaria",
    ESO: "ESO",
    BACHILLER: "Bachiller",
    CFGM_FP: "CFGS FP",
    GRADO_UNIVERSITARIO: "Grado universitario",
    MASTER_UNIVERSITARIO: "Master universitario",
    DOCTORADO: "Doctorado"
});

export const PUESTO = Object.freeze({
    BASE: "Base", 
    MEDIO: "Medio", 
    SUPERIOR: "Superior", 
    SUPER_SUPERIOR: "Super superior"
});

class Trabajador {
    constructor(nombre, genero = GENERO.PREFIERO_NO_DECIRLO, fecha_contratacion, formacion = FORMACION.SIN_ESTUDIOS, puesto = PUESTO.BASE) {
        this.nombre = nombre;
        this.genero = genero;
        this.fecha_contratacion = fecha_contratacion;
        this.formacion = formacion;
        this.puesto = puesto;
    }
}

function* crearCurrante() {
    while(true) yield new Trabajador(getNombreAleatorio());
}

console.log(crearCurrante().next().value);
console.log(crearCurrante().next().value);

const stringJSON = JSON.stringify(crearCurrante().next().value)
const json = JSON.parse(stringJSON);

document.getElementById('json').innerHTML = `
    <div>stringJSON: ${stringJSON}</div>
    <br />
    <div>json: ${json}</div>
    <br />
    <div>json keys: ${Object.keys(json)}</div>
    <br />
    <div>json values: ${Object.values(json)}</div>
    <br />
    <div>json entries: ${Object.entries(json)}</div>
`;
