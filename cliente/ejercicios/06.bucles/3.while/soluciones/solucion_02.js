// Ej 02

// Se trata de pedir al usuario que teclee un número entre 1 y 5, si escribe 
// alguno que esté fuera de ese rango deberá 
// volver a pedir el número

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let num = Number.parseInt(prompt("Introduce un número entre 1 y 5 (incluídos):"));

// 2. Realizamos operaciones y bucles necesarios
while(num < 1 || num > 5){
  num = Number.parseInt(prompt("Debes introducir un número entre 1 y 5 (incluídos):"));
}
// 3. Escribimos el resultado (output)
console.log("El número introducido es ", num);
console.log("Final del programa");

// No se valida input, el programa no funciona bien en caso de NaN...