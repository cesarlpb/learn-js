/*
Se trata de escribir un script que diga si un número es par o es impar.

Recordemos que un número es par si al dividirlo por 2 da como resto 0.
*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let num = Number.parseInt(prompt("Introduce un número entero para verificar si es par o impar:"));
let esPar = false; // inicializamos la variable como boolean
// 2. Realizamos operaciones y bucles necesarios
esPar = num % 2 == 0; // determina si el resto de dividir por 2 es 0 
                      // => si true, es par, si false, impar
                      // 4 / 2 = 2 => R = 0 ===> 4 % 2 = 0
                      // 3 / 2 = 1 => R = 1 ===> 3 % 2 = 1
// 3. Escribimos el resultado (output)
console.log("El número es par?", esPar);

// bucle if
if(esPar) {
  console.log(`El número ${num} es par`);
} else {
  console.log(`El número ${num} es impar`);
}
