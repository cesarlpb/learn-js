/*
En este ejemplo el usuario tecleará dos números. 

Debe devolver la diferencia entre el mayor y el menor
*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let num1 = Number(prompt("Introduce el primer número:"));
let num2 = Number(prompt("Introduce el segundo número:"));
let diferencia = 0;
// 2. Realizamos operaciones y bucles necesarios
if (num1 > num2) {
  // num1 es mayor => num1 - num2
  diferencia = num1 - num2;
} else {
  // num2 es mayor o igual => num2 - num1
  diferencia = num2 - num1;
}
// 3. Escribimos el resultado (output)
console.log(`La diferencia entre ${num1} y ${num2} es ${diferencia}.`)

// 4. Pruebas
// inputs: 1, 0 => 1
// inputs: 0, 1 => 1
// inputs: 1, 1 => 0

// Alternativa: usar Math.abs() para calcular el valor absoluto de la diferencia