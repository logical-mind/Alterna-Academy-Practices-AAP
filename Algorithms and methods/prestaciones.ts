// pretaciones

class Persona {
    nombre: string;
    salario: number;
    fechaInicio: Date;
    fechaSalida: Date;
    preavisado: boolean;
    cesantia: boolean;
    vacaciones: boolean;
    dobleSueldo: boolean;
    years: number;
    meses: number
    dias: number
    mesesTotales: number

    constructor(
        nombre: string,
        salario: number,
        fechaInicio: Date,
        fechaSalida: Date,
        preavisado: boolean,
        cesantia: boolean,
        vacaciones: boolean,
        dobleSueldo: boolean
    ) {
        this.nombre = nombre;
        this.salario = salario;
        this.fechaInicio = fechaInicio;
        this.fechaSalida = fechaSalida;
        this.preavisado = preavisado;
        this.cesantia = cesantia;
        this.vacaciones = vacaciones;
        this.dobleSueldo = dobleSueldo;
        const { anos, meses, dias, mesesTotales } =
            this.calcularAnosMesesDiasLaborando();
        this.years = anos;
        this.meses = meses;
        this.dias = dias;
        this.mesesTotales = mesesTotales;
    }

    calcularAnosMesesDiasLaborando(): {
        anos: number, meses: number, dias:
        number, mesesTotales: number
    } {
        const diff = this.fechaSalida.getTime() -
            this.fechaInicio.getTime();
        const diasTotales = Math.floor(diff / (1000 * 60 * 60 * 24));

        const anos = Math.floor(diasTotales / 365);
        const meses = Math.floor((diasTotales % 365) / 30);
        const mesesTotales = Math.floor(diasTotales / 30);
        const dias = diasTotales % 30;
        return { anos, meses, dias, mesesTotales };
    }

    calcularPreavisoYCesantia(): number {
        const salarioM = this.salario / 30;
        const anosLaborados = this.years + this.meses / 12 + this.dias /
            365;
        const total = salarioM * 13 * anosLaborados;
        return total + (this.preavisado || this.cesantia ? salarioM : 0);
    }

    calcularVacaciones(): number {
        return this.vacaciones ? this.mesesTotales / 2 : 0;
    }

    calcularDobleSueldo(): number {
        return this.dobleSueldo ? this.mesesTotales : 0;
    }

    calcularTotalAPagar(): number {
        return this.calcularPreavisoYCesantia() + this.calcularVacaciones()
            + this.calcularDobleSueldo();
    }

    salida(): string {
        return `Nombre: ${this.nombre}, Preaviso: ${this.preavisado},
    Cesantía: ${this.cesantia}, Vacaciones: ${this.calcularVacaciones()}, Doble
    sueldo: ${this.calcularDobleSueldo()}, Total a pagar:
    ${this.calcularTotalAPagar()}`;
    }

}
const nombre = prompt("Ingrese su nombre: ") || '';
const salario = parseFloat(prompt("Ingrese su salario mensual: ") || '0');
const fechaInicioString = prompt("Ingrese la fecha de inicio (YYYY-MM-DD):") || '';
const fechaSalidaString = prompt("Ingrese la fecha de salida (YYYY-MM-DD):") || '';
const preavisado = prompt("¿Ha hecho un preaviso?: ") === 'si';
const cesantia = prompt("¿Incluye cesantía?: ") === 'si';
const vacaciones = prompt("¿Tiene vacaciones?: ") === 'si';

const dobleSueldo = prompt("¿Incluye bono navideño?: ") === 'si';
const fechaInicio = new Date(fechaInicioString);
const fechaSalida = new Date(fechaSalidaString);
const persona = new Persona(nombre, salario, fechaInicio, fechaSalida, preavisado, cesantia, vacaciones, dobleSueldo);

console.log(persona.salida());
