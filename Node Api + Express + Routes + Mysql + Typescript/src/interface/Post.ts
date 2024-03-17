export interface Empleados {
    id?: string;
    cedula: string;
    fullname: string;
    pagoPorHora: number;
}

export interface HorasTrabajadas {
    id?: string;
    horasTrabajadas:number
    empleadoId:number
}