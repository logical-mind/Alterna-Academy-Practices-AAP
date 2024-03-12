/*
Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. Suele hacer venta por correo y la
empresa de logística les cobra por peso de cada paquete así que deben calcular el peso de los payasos y muñecas que
saldrán en cada paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75 g. Escribir un programa que lea el
número de payasos y muñecas vendidos en el último pedido y calcule el peso total del paquete que será enviado.
*/

let numPayasos: string | null = prompt("Cantidad de payasos")
let numMunecas: string | null = prompt("Cantidad de muñecas")

const pesoPayaso: number = 112
const pesoMuneca: number = 75

if (numPayasos !== null && numMunecas !== null) {
    console.log("Calcular el peso de los payasos y muñecas")
    let pesoPayasoSuma: number = parseInt(numPayasos) * pesoPayaso
    let pesoMunecaSuma: number = parseInt(numMunecas) * pesoMuneca
    let pesoTotal: number = pesoPayasoSuma + pesoMunecaSuma
    console.log(`Peso total payasos: ${pesoPayasoSuma} Kilogramos`)
    console.log(`Peso total muñecas: ${pesoMunecaSuma} Kilogramos`)
    console.log(`Peso total: ${pesoTotal} Kilogramos`)
} else {
    console.log("Datos incorrectos")
}

