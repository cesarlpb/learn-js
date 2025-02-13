/**
 * Crea un programa que pida la nota de un estudiante en los tres trimestres del 
 * curso y calcule la nota promedio. 
 * 
 * El resultado que dará será suspenso si la 
 * media es menor de 5, aprobado si está entre 5 y 7 y notable por encima de 7.
 */

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let nota1 = Number(prompt("Introduce la nota del primer trimestre:"));
let nota2 = Number(prompt("Introduce la nota del segundo trimestre:"));
let nota3 = Number(prompt("Introduce la nota del tercer trimestre:"));
let promedio = ( nota1 + nota2 + nota3 ) / 3;
// 2. Realizamos operaciones y bucles necesarios
if ( promedio < 5 ){
  // suspenso
  console.log("Suspenso");
}
if ( promedio >= 5 && promedio <= 7 ){
  // incluye 5 y 7
  console.log("Aprobado");
}
if ( promedio > 7){
  // mayor que 7 estricto
  console.log("Notable");
}
console.log(nota1, nota2, nota3, "promedio:", promedio);
// 3. Escribimos el resultado (output)
// --

// 4. Pruebas

// Hay que comprobar todos los rangos de notas:
// 0 - 4
// 5 o 7
// entre el 5 y el 7 -> 6.5
// más de 7

// Bonus:
// podría tener sentido validar que no sea menor que 0 o mayor que 10
