/**
 * El usuario debe introducir dos valores numéricos por teclado y la aplicación 
 * deberá indicar cual es el mayor, el primero o el segundo.

La idea es usar las sentencias if reducidas (cond ? true: false)
 */

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let a = Number(prompt("Introduce el primer número"));
let b = Number(prompt("Introduce el segundo número"));
// 2. Realizamos operaciones y bucles necesarios
// Método 1: if - else
let msj = "";
if(a > b){
  msj = `El primer número es mayor: ${a} > ${b}`;
} else if (b > a){
  msj = `El segundo número es mayor: ${b} > ${a}`;
} else {
  // igualdad
  msj = `Los números son iguales: ${a} = ${b}`;
}
// Método 2: ternario
let msj2 = "";
msj2 =  a > b ? "a es mayor que b" : 
        b > a ? "b es mayor que a" : "a es igual a b"
// 3. Escribimos el resultado (output)
// Método 1:
console.log(msj);
// Método 2:
console.log(msj2);

// 4. Pruebas
// caso a mayor
// caso b mayor
// caso iguales