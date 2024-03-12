/*
Introducir un numero entero de mínimo un digito (1) y máximo 3 (999) y dividir 
unidad, decena y centenas,imprimir cuantas unidades tiene, cuantas decenas y
cuantas centenas.
*/

let numero: string | null = prompt("Introduce un numero: ")

let numeroInt: number = 0
function dividirNum(numero: number) {
    let unidades: number = Math.floor(numero % 10)
    let decenas: number = Math.floor((numero % 100) / 10)
    let centenas: number = Math.floor(numero / 100)
    console.log(`Numero Ingresado: ${numero}`)
    console.log(`Unidades: ${unidades}`);
    console.log(`Decenas: ${decenas}`);
    console.log(`Centenas: ${centenas}`);
}
if (numero !== null) {
    numeroInt = parseInt(numero)
    if (numeroInt >= 1 && numeroInt <= 999) {
        dividirNum(numeroInt)
    } else {
        console.log("El numero ingresado no cumple con los requisitos")
    }

}