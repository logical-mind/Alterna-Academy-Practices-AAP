/*
PRACTICA 1 - Escribir un programa que pregunte al usuario por el número de
las trabajadas y el coste porhora. Después debe mostrar por pantalla la paga
que le corresponde
*/


let horasTrabajadas: string | null = prompt("Horas Trabajadas: ")
let costePorHora: string | null = prompt("Coste por horas USD$")

if (horasTrabajadas !== null && costePorHora !== null) {
    let paga: number | null = parseFloat(horasTrabajadas) * parseFloat(costePorHora);
    console.log("Calcular pago de salario por horas trabajadas")
    console.log(`Horas Trabajadas: ${horasTrabajadas} horas`)
    console.log(`Coste por Hora: ${costePorHora} USD`)
    console.log(`Mi pago: ${paga} USD`)
}
else { console.log("Introduce valores validos") }