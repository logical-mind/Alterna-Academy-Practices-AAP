//Calificaciones

const obtenerCalificacionEnLetras = (calificacion: number) => {
    if (calificacion >= 90 && calificacion <= 100) {
        return "A";
    } else if (calificacion >= 80 && calificacion < 90) {
        return "B";
    } else if (calificacion >= 70 && calificacion < 80) {
        return "C";
    } else if (calificacion >= 60 && calificacion < 70) {
        return "D";
    } else if (calificacion >= 0 && calificacion < 60) {
        return "F";
    } else {
        return "Calificación no es correcta. Debe ser un número entre 0 y 100.";
    }
};
const calificacionNum = parseInt(prompt("Ingrese la calificacion") ?? '')
const calificacionLetra = obtenerCalificacionEnLetras(calificacionNum);
console.log(`La calificación en letras`)