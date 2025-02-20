// Ej 04

// Definir una función que cree una cadena de letras repetidas tantas veces como
//  le digamos. La función recibe dos argumentos: la letra y el número de repeticiones.

// Al ejecutar repetir('a', 5) deberá devover la cadena  aaaaa.

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables y constantes necesarias para el programa e inputs
let input1 = "", input2 = 0;
// 2. Definimos las funciones necesarias para el programa
function repetir(letra, repeticiones){
  let string = "";
  for(let i = 0; i < repeticiones; i++){
    string += letra;
  }
  return string;
}
function main(){
  input1 = prompt("Introduce la letra a repetir:");
  input2 = Number.parseInt(prompt("Introduce el número de repeticiones:"));
  let output = repetir(input1, input2);
  console.log(`La letra ${input1} repetida ${input2} veces:\n${output}`);
}
// 3. Realizamos operaciones y bucles necesarios -> usando las funciones
main();
// 4. Escribimos el resultado (output) -> usando las funciones
// en main
// 5. Pruebas o casos conocidos de resultados correctos
function hacerTest(){
  let letra = 'a', repeticiones = 5, stringEsperado = "aaaaa";
  let stringGenerado = repetir(letra, repeticiones);
  return stringGenerado === stringEsperado;
}
let esTestCorrecto = hacerTest();
console.log("Los test son correctos?", esTestCorrecto ? "✅ Sí" : "❌ No");
// repetir('a', 5); // 'aaaaa'