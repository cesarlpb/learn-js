/**
 * A partir de un número de mes tecleado por un usuario el programa debe indicar 
 * la estación del año.

Las estaciones serán 

12,1,2: Invierno. 
3,4,5 primavera, 
6,7,8 verano y 
9,10,11 otoño.

 */

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
// numMes del 1 al 12
let numMes = Number.parseInt(prompt("Introduce el número del mes (del 1 al 12):"));
// 2. Realizamos operaciones y bucles necesarios
if(numMes == 12 || numMes == 1 || numMes == 2){
  // invierno
  console.log("🥶 Estamos en invierno");
} else if(numMes >= 3 && numMes <= 5){
  // primavera
  console.log("🌻 Estamos en primavera");
} else if(numMes >= 6 && numMes <= 8){
  // verano
  console.log("⛱️ Estamos en verano");
} else if(numMes >= 9 && numMes <= 11){
  // otoño
  console.log("🌲 Estamos en otoño");
} else {
  console.log("El número introducido no es correcto");
}
// 3. Escribimos el resultado (output)
