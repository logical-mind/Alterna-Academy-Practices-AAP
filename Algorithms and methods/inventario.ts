//Inventario


let inventario = 0;

const vender = (cantidad: number) => {
    if (cantidad <= inventario) {
        inventario -= cantidad
        console.log("Venta realizada. Nuevo inventario:", inventario);
    } else {
        console.log("No hay suficiente inventario para realizar la venta.");
    }
}

const reabastecer = (cantidad: number) => {
    inventario += cantidad;
    console.log("Reabastecimiento exitoso. Inventario:", inventario);
}

const consultarInventario = () => {
    console.log("Inventario actual:", inventario);
}

const runPrograma = () => {
    let opcion;
    do {
        console.log("\nOpciones:");
        console.log("1 - Vender");
        console.log("2 - Reabastecer");
        console.log("3 - Consultar inventario");
        console.log("4 - Salir");

        opcion = parseInt(prompt("Ingrese una opción:") ?? '4');
        switch (opcion) {
            case 1:
                const cantidadSell = parseInt(prompt("cantidad a vender:") ?? '0');
                vender(cantidadSell);
                break;
            case 2:
                const cantidadAdd = parseInt(prompt("cantidad a reabastecer:") ?? '0')
                reabastecer(cantidadAdd);
                break;
            case 3:
                consultarInventario();
                break;
            case 4:
                console.log("Saliendo del programa.");
                break;
            default:
                console.log("Opción no válida. Inténtelo de nuevo.");
        }
    } while (opcion !== 4);
};