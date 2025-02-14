/**
 * En una sala de juegos existen cuatro salas: 
 * 
 * Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. 
 * 
 * Si un usuario paga 4 créditos puede acceder a todas, 
 * si paga 3 solo podrá acceder a las tres primeras, 
 * si paga 2 a las dos primeras 
 * y si paga 1 solo a la primera sala.
 */

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let creditos = Number.parseInt(prompt("Introduce el número de créditos:"));
// 2. Realizamos operaciones y bucles necesarios
if(creditos >= 4){
  console.log("Puedes acceder a Consolas, Juegos 2D, Juegos 3D, Realidad Virtual");
} else if(creditos >= 3){
  console.log("Puedes acceder a Consolas, Juegos 2D, Juegos 3D");
} else if(creditos >= 2){
console.log("Puedes acceder a Consolas, Juegos 2D");
} else if(creditos >= 1){
console.log("Puedes acceder a Consolas")
} else {
console.log("No puedes acceder a ninguna sala. Necesitas créditos.");
}
// 3. Escribimos el resultado (output)
