//Realizar un programa en TypeScript que convierta de Decimal a Romano

while (true) {
    let decimal = Number.parseInt(prompt("Ingrese un numero decimal o marca 0 para salir") ?? "0")
    if (decimal === 0) {
        console.log("Adios")
        break
    }
    const decimalFijo = decimal
    const listaDecimales: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const listaRomanos: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let resultado = ''
    for (let i = 0; i < listaDecimales.length; i++) {
        while (decimal >= listaDecimales[i]) {
            resultado += listaRomanos[i]
            decimal -= listaDecimales[i]
        }
    }
    alert(`${decimalFijo} en romano es ${resultado}`)
    console.log(`${decimalFijo} en romano es ${resultado}`)
}