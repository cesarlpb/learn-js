// Ej 06

// Diseña una función que calcule el factorial de un número, usa una función recursiva (que se llama a si misma). 
// Recuerda que el factorial de un número es el resultado de multiplicar cada número por el anterior hasta llegar a 1. 
// Y el factorail de 0 es por definición 1

// Si escribo factorial(3) obtendré 3 * 2 * 1 = 6

// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

// factorial(1) = 1
// factorial(0) = 1 (definición)

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables y constantes necesarias para el programa e inputs
let input = prompt("Introduce un número entero positivo:"); // factorial solo con números no negativos
// 2. Definimos las funciones necesarias para el programa
// Simplificación: suponemos que el dato es un número no negativo
function factorial_for(num){
  let factorial = num;
  
  // casos especiales del 0 o 1:
  // Assertive Programming o programación negativa
  // descartar primero los casos no válidos o simples
  if(num == 0 || num == 1){
    return 1;
  }

  // resto de casos:
  for(let i = num-1; i > 1; i--){
    factorial = factorial * i;
    // debug:
    console.log(factorial, i)
  }
  return factorial
}
function factorial_while(){
  // while
}
function factorial_recursion(){
  // 
}
function main(){

}
// 3. Realizamos operaciones y bucles necesarios -> usando las funciones
main();
// 4. Escribimos el resultado (output) -> usando las funciones
// en main()
// 5. Pruebas o casos conocidos de resultados correctos


// factorial(3) obtendré 3 * 2 * 1 = 6

// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

// factorial(1) = 1

// factorial(0) = 1 (definición)