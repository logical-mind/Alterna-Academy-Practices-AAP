// Class Practice


class personas{
    peso: number = 0
    altura: number = 0
    mayordeEdad: boolean = false
    dni: string

    constructor(private nombre: string = "", private edad: number = 0, private sexo: string = 'H') {

        this.sexo = this.confirmarSexo()
        this.mayordeEdad = this.calcularEdad()
        this.peso = this.calcularPeso()
        this.dni = this.createDni()
    }

    calcularPeso(): number {
        const miPeso = this.peso / (this.altura * this.altura)
        if (miPeso < 20) { return -1 }
        else if (miPeso >= 20 && miPeso <= 25) { return 0 }
        else {
            return 1
        }
    }
    calcularEdad(): boolean {
        if (this.edad >= 18) { return true }
        else { return false }
    }
    confirmarSexo(): string {
        if (this.sexo.toLocaleUpperCase() === "M" ||
            this.sexo.toLocaleUpperCase() === "H") {
            return this.sexo.toLocaleUpperCase()
        }
        else { return "H" }
    }
    createDni(): string {
        const numDni = Math.floor(Math.random() * 100000000)
        const letra = "QWERTYUIOPASDFGHJKLZXCVBNM"
        const letraSelect = letra.charAt(numDni % 26)
        return `${numDni}-${letraSelect}`;
    }

    obtenerInfo(): string {
        return `
    Nombre: ${this.nombre}
    edad: ${this.edad}
    Vota: ${this.mayordeEdad}
    sexo: ${this.sexo}
    peso: ${this.peso}
    altura: ${this.altura}
    dni: ${this.dni}
    `
    }
}


for (let i = 0; i < 3; i++) {
    const nombre = prompt("Introduce el nombre") ?? ""
    const edad = parseFloat(prompt("Introduce la edad") ?? "0")
    const sexo = prompt("Introduce el sexo") ?? ""
    const peso = parseFloat(prompt("Introduce el peso") ?? "0")
    const altura = parseFloat(prompt("Introduce la altura") ?? "0")
    
    const newPersona = new personas(nombre, edad, sexo)
    newPersona.peso = peso
    newPersona.altura = altura

    switch (newPersona.calcularPeso()) {
        case -1:
            console.log("Tiene peso bajo")
            break
        case 0:
            console.log("Peso Ideal")
            break
        case 1:
            console.log("Sobrepeso")
            break
    }
    if (newPersona.mayordeEdad) {
        console.log("Es mayor de edad")
    }
    console.log(newPersona.obtenerInfo())
}