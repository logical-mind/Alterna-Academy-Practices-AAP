/*
Escribir un programa que pregunte el nombre del usuario y después de que el
 usuario lo introduzca muestre porpantalla la cadena ¡Hola !, donde es el nombre 
 que el usuario haya introducido.
*/

let nombreUsuario:string | null = prompt("Introduce tu nombre de usuario")

if (nombreUsuario !== null){
console.log(`¡Hola! ${nombreUsuario}` )
}else{
console.log("Campo de usuario vacio")
}