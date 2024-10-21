// El usuario debe introducir dos valores numéricos por teclado y la aplicación deberá indicar cual es el mayor, el primero o el segundo.

// La idea es usar las sentencias if reducidas (cond ? true : false)

// inputs
let a = Number(prompt("Introduce el primer número:"));
let b = Number(prompt("Introduce el segundo número:"));

// if-else

// Descomentar y comentar ternario para solo usar uno:
// if (a > b){
//     alert("El primer número es mayor")
// } else {
//     alert("El segundo es mayor o igual")
// }

// ternario
a > b 
    ? alert("El primer número es mayor") 
    : alert("El segundo es mayor o igual");
