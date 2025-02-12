/*
Pues seguimos con los números. 

Escribe un script  que dado un número nos devuelva 

- true si es un número par 
- y false si es un número impar. 

No usar condicionales. Sin usar bucle if

Vale: ternario o condiciones

- Hay que ver como se hace una comparación
- El tipo boolean => true o false

Input: number
Output: boolean

*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let num = Number.parseInt(prompt("Introduce un número:")); // número entero
// 2. Realizamos operaciones necesarias
// Nomenclatura de booleans -> Y/N Questions // Preguntas de sí o no (true o false)
// esNumeroPar, esPar, noEsImpar... etc
let esPar = num % 2 == 0 ? true : false;
// 3. Escribimos el resultado (output)
console.log("¿El número es par?", esPar)
