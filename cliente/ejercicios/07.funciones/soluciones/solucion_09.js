// Ej 09

// En esta función se trata de convertir notas a calificaciones literales de 
// manera que menos de 5 es suspenso, un 5 es aprobado, el 6 es bien, el 7 y el 
// 8 son notable, el 9 es sobresaliente y el 10 es matrícula.

// Por ejemplo si pido calificar(5) la función me dirá tu calificación 
// es Aprobado

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables y constantes necesarias para el programa e inputs
let input = "";
// 2. Definimos las funciones necesarias para el programa
function calificar(nota){
  let notaStr = "";
  if(nota >= 0 && nota < 5){
    // suspenso
    notaStr = "😟 Suspenso";
  } else if(nota >= 5 && nota < 7){
    // Aprobado
    notaStr = "🙃 Aprobado";
  } else if(nota >= 7 && nota < 9){
    // notable
    notaStr = "🙂 Notable";
  } else if(nota >= 9 && nota <= 10){
    // sobresaliente
    notaStr = "🚀 Sobresaliente";
  } else {
    // no válida
    notaStr = "Esta nota no es válida";
  }
  return notaStr;
}
function main(){
  input  = Number(prompt("Introduce tu nota:"));
  output = calificar(input);
  console.log(`La nota ${input} es ${output}`);
}
// 3. Realizamos operaciones y bucles necesarios -> usando las funciones
main();
// 4. Escribimos el resultado (output) -> usando las funciones
// en main
// 5. Pruebas o casos conocidos de resultados correctos
// TODO ?