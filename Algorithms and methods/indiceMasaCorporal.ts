/*
PRACTICA 2 -Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), 
calcule el índice de masa corporal y lo almacene en una variable, y muestre por pantalla la 
frase Tu índice de masa corporales <imc> donde <imc> es el índice de masa corporal calculado 
Formular (IMC = peso (kg)/ [estatura (m)]2 
*/

let peso: string | null = prompt("Peso en kilogramos: ")
let estatura: string | null = prompt("Estatura en metros")

if (peso !== null && estatura !== null) {
    let imc: number | null = parseFloat(peso) / (parseFloat(estatura) ** 2);
    console.log("calcule el índice de masa corporal")
    console.log(`Peso: ${peso} Kilogramos`)
    console.log(`Estatura: ${estatura} Metros`)
    alert(`Tu índice de masa corporal es: ${imc.toFixed(2)}`)
    console.log(`Tu índice de masa corporal es: ${imc.toFixed(2)}`)
}

else { console.log("Introduce valores validos") }