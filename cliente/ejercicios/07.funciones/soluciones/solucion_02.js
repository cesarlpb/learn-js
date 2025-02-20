// Ej 02 

// Esta función se va a llamar esPar(num) y deberá devolver verdadero si el 
// argumento es par y falso si es impar. 
// Se acepta que solo se usarán números válidos.

// Por ejemplo al llamarla como esPar(5) me dará false, 
// mientras que con esPar(6) me dará true.
/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables y constantes necesarias para el programa e inputs
let input = 0;
// 2. Definimos las funciones necesarias para el programa
function esPar(num){
  return num % 2 === 0;
}
function main(){
  input = Number(prompt("Introduce un número para saber si es par:"));
  let esNumeroPar = esPar(input);
  console.log(`El número ${input} es par?`, esNumeroPar); 
}
// 3. Realizamos operaciones y bucles necesarios -> usando las funciones
main();
// 4. Escribimos el resultado (output) -> usando las funciones
// hecho en main
// 5. Pruebas o casos conocidos de resultados correctos
function hacerTests(){
  let input1 = 5, valorEsperado1 = false;
  let input2 = 6, valorEsperado2 = true;
  let valorCalculado1 = esPar(input1);
  let valorCalculado2 = esPar(input2);
  return (valorCalculado1 === valorEsperado1 && 
          valorCalculado2 === valorEsperado2);
}
let sonTestsCorrectos = hacerTests();
console.log("Los test son correctos?", sonTestsCorrectos ? "✅ Sí" : "❌ No");
// esPar(5) // false
// esPar(6) // true