/*
Un programa que pida un número y diga si es positivo o negativo. 

El cero se considera positivo.
*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let num = Number(prompt("Introduce un número:"));
// 2. Realizamos operaciones y bucles necesarios
// 3. Escribimos el resultado (output)
if ( num >= 0 ) {
  console.log(`El número ${num} es positivo.`)
} else {
  console.log("El número es negativo.")
}

// 4. Pruebas o tests:

// 0  -> positivo
// 1  -> positivo
// -1 -> negativo

// NaN no se contempla
// Infinty no se ha tenido en cuenta