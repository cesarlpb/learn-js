/**
 * En este ejercicio el script convertirá las notas numéricas de un examen en 
 * palabras: 
 * 
 * 0 - 4 suspenso, 
 * 5-6 aprobado, 
 * 7-8 notable, 
 * 9-10 sobresaliente.
 * 
 */

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let nota = Number(prompt("Introduce tu nota:"));
// 2. Realizamos operaciones y bucles necesarios
if(nota >= 0 && nota < 5){
  // suspenso
  console.log("😟 Suspenso");
} else if(nota >= 5 && nota < 7){
  // aprobado
  console.log("🙃 Aprobado");
} else if(nota >= 7 && nota < 9){
  // notable
  console.log("🙂 Notable");
} else if(nota >= 9 && nota <= 10){
  // sobresaliente
  console.log("🚀 Sobresaliente");
} else {
  // no válida
  console.error("Esta nota no es válida");
}
// 3. Escribimos el resultado (output)
