export function getNombreAleatorio() {
    var nombre = '';
    let long = Math.floor(Math.random() * (10 - 5) + 5);
    for (let i = 0; i < long; i++) {
        nombre += String.fromCharCode(97 + Math.random() * 26);
    }
    return nombre;
}