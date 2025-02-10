/*
En este ejercicio vas a pedir al usuario que teclee 
tres números enteros 
y el script mostrará como resultado el valor medio de los tres.

Recuerda que la media de tres números se calcula sumando los tres 
y dividiendo entre 3.

inputs: num1, num2, num3 // enteros => no lo validamos -> number
output: promedio         // floats  => number

Ejemplo:
inputs: 10, 20, 30
output: 60 / 3 = 20

*/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
// El "problema" es que prompt me devuelve string => necesitamos number
let num1 = prompt("Introduce el primer número:");
let num2 = prompt("Introduce el segundo número:");
let num3 = prompt("Introduce el tercer número:");
console.log(num1, num2, num3);
// Usamos Number para evitar este problema:
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3); // si no se hace esto => el resultado 
                     // MUY probablemente será incorrecto
console.log(num1, num2, num3);
// 2. Realizamos operaciones necesarias
let media = ( num1 + num2 + num3 ) / 3;
// 3. Escribimos el resultado (output)
console.log(media);
