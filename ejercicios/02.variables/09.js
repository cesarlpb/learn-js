/* 

Este ejercicio es todo un clásico si lo haces a la primera 
y sin tardar mucho, puedes estar seguro: 
entiendes las variables.

Teiens que escribir un programa que intercambie el valor 
de dos variables. 

Al final la primera variable debe tener 
el valor de la segunda y la segunda el valor de la primera. 

No vale usar arrays ni asignación múltiple.

inputs: var1, var2

var1 = 1;
var2 = 2;

output: var1, var2

var1 -> 2
var2 -> 1

*/

console.log("--- Ejercicio 09 ---");

let var1 = prompt("Introduce el primer valor:");
let var2 = prompt("Introduce el segundo valor:");

console.log("Valores recibidos:")
console.log("var1, var2:", var1, var2);

let temp = var2;
var2 = var1;

// Usamos temp para guardar temporalmente el valor 
// de una de las dos variables:

var1 = temp; // valor anterior de var2

console.log("Valores intercambiados:")
console.log("var1, var2:", var1, var2);