//Realizar un programa que determine si un año es bisiesto o no

while (true) {
    let year = Number.parseInt(prompt("Ingrese un año o marca 0 para salir") ?? "0")
    if (year === 0) {
        console.log("Adios")
        break
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        alert(`El año ${year} es bisiesto`)
        console.log(`El año ${year} es bisiesto`)
    } else if (year % 100 === 0 && year % 400 === 0) {
        alert(`El año ${year} es bisiesto`)
        console.log(`El año ${year} es bisiesto`)
    } else {
        alert(`El año ${year} No es bisiesto`)
        console.log(`El año ${year} No es bisiesto`)
    }
}