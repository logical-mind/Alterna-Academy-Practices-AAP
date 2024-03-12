// titleCase

const convertirATitle = (texto: string): string => {
    let newText = "";
    let capNext = true;
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        if (capNext && caracter !== " ") {
            newText += caracter.toUpperCase();
            capNext = false;
        } else {
            newText += caracter.toLowerCase();
        }
        if (caracter === " ") {
            capNext = true;
        }
    }
    return newText;
};
const texto = prompt("Ingresa un texto") ?? ''
console.log(convertirATitle(texto));