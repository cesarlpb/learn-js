// Ej 10

// Escribe una función que devuelva el siglo al que correponde un año que se la 
// pasa como argumento. 
// 
// El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200....

// 103 -> II
// 1   -> I

// Por ejemplo si le pido siglo(1910) me dirá siglo 20

// function siglo(año){...}
// function numerosRomanos(decimal){...}

// ¿output en números decimales o romanos?

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables y constantes necesarias para el programa e inputs
let input = 0;
// 2. Definimos las funciones necesarias para el programa

// Simplificación: suponemos que nos pasan número de año válido
function calcularSiglo(año){
  // Idea: dividimos el año entre 100 y redondeamos al alza
  return Math.ceil(año / 100);
}
function main(){
  input = Number.parseInt(prompt("Introduce el año para calcular siglo:"));
  let output = calcularSiglo(input);
  console.log(`El año ${input} pertenece al siglo ${output}`);
}
// 3. Realizamos operaciones y bucles necesarios -> usando las funciones
main();
// 4. Escribimos el resultado (output) -> usando las funciones
// en main
// 5. Pruebas o casos conocidos de resultados correctos
// TODO