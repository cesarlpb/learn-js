/**
 * En este ejercicio el usuario ingresa la longitud de la base y el alto de un 
 * cuadrilátero. 
 
 * Si la base y el alto son idénticos la respuesta será "Es un cuadrado", 
 * si la base es mayor que el alto dirá "Rectángulo horizontal" 
 * y en caso contrario dirá "Rectángulo vertical".
 * 
 * ____
 * |   |
 * |   |
 * |   |
 * |___|
 * 
 */

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let base = Number(prompt("Introduce la base del cuadrilátero:"));
let altura = Number(prompt("Introduce la altura del cuadrilátero:"));
// 2. Realizamos operaciones y bucles necesarios
if(base == altura){
  // cuadrado
  console.log("📦 Cuadrado");
} else if(base > altura){
  // rectángulo horizontal
  console.log("Rectángulo horizontal");
} else {
  // rectángulo vertical
  console.log("Rectángulo vertical");
}
// 3. Escribimos el resultado (output)
