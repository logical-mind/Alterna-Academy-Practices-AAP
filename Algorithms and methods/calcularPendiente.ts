/*
Crear una función que reciba dos Coordenadas como parámetros y retorne 
el valor de la pendiente de la recta que pasa por los dos puntos.
*/

const calcularPendiente = (x1: number, x2: number, y1: number, y2: number) => {
    const numerador = y2 - y1;
    const denominador = x2 - x1;
    if (denominador === 0) {
        console.log('La pendiente es infinita, los puntos están sobre la misma línea vertical.');
    }
    return numerador / denominador;
};
const x1 = parseInt(prompt("Ingresa x1") ?? '0');
const x2 = parseInt(prompt("Ingresa x2") ?? '0');
const y1 = parseInt(prompt("Ingresa y1") ?? '0');
const y2 = parseInt(prompt("Ingresa y2") ?? '0');
const m = calcularPendiente(x1, x2, y1, y2);
console.log(`
    x1 = ${x1} x2 = ${x2}
    y1 = ${y1} y2 = ${y2}
    La pendiente es: ${m}
    `);