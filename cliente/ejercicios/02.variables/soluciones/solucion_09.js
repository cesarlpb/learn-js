/*
Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, 
puedes estar seguro: entiendes las variables.

Tienes que escribir un programa que intercambie el valor de dos variables. 
a = 1
b = 2

Al final la primera variable debe terner el valor de la segunda 
y la segunda el valor de la primera. No vale usar arrays ni asignación múltiple

...
b // 1
a // 2

inputs:  var1, var2
outputs: var1, var2

Ejemplo:
var1 = 1
var2 = 2
...
var1 -> 2
var2 -> 1

*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let a = prompt("Introduce el primer valor:");
let b = prompt("Introduce el segundo valor:") 
let temp;
let prevA, prevB; // variables para el test
// 2. Realizamos operaciones necesarias

// se pide que los valores de a <---> b se intercambien
// Idea: usamos temp para intercambiar los valores => memoria temporal

console.log("Valores iniciales:");
console.log("a:", a);
console.log("b:", b);

// Guardamos los datos para comprobarlos al final:
prevA = a;
prevB = b;

temp = b; // guardamos valor de b en temp
// pasamos el valor de a --> b
b = a;
// a <---- temp (valor original de b)
a = temp;

// 3. Escribimos el resultado (output)
console.log("Valores finales:");
console.log("a:", a);
console.log("b:", b);

// Test o comprobación
console.log("a tiene el valor esperado?", a === prevB);
console.log("b tiene el valor esperado?", b === prevA);
console.log("El programa tiene el resultado correcto?", a === prevB && b === prevA);