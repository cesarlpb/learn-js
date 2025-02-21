// Ej 07

// Escribir una función que reciba un número como argumento y lo devuelva 
// invertido, o sea, escrito del revés. Usar esta función para determinar si un 
// número es capicúa (palíndromo)

// Si ejecuto invertir(123) me deberá devolver el número 321 y me diría que no es capicua. 
// Sin embargo si hago 
// invertir(242) el resultado sería 242, y la prueba me diría que es capicúa.

// function invertir(...)
// function esPalindromo(...)

// esPalindromo(101) -> true
// esPalindromo(100) -> false

/******************************************************************************/

// Pasos para resolver
const DEBUG = false;
// 1. Declaramos variables y constantes necesarias para el programa e inputs
let input = "";
// 2. Definimos las funciones necesarias para el programa
function invertir(str){
  let strInvertido = "";
  for(let i = str.length - 1; i >= 0; i--){
    strInvertido += str[i];
    // debug:
    DEBUG ? console.log(i, str[i]) : null;
  }
  return strInvertido;
}
function esPalindromo(str){
  let strInvertido = invertir(str);
  return str === strInvertido;
}
function main(){
  input = prompt("Introduce un número o palabra para comprobar si es capicúa o palíndromo:");
  let esPalindromValido = esPalindromo(input);
  console.log(`La palabra o número ${input} es capicúa/palíndromo?`, esPalindromValido);
}
// 3. Realizamos operaciones y bucles necesarios -> usando las funciones
main();
// 4. Escribimos el resultado (output) -> usando las funciones
// en main
// 5. Pruebas o casos conocidos de resultados correctos
// TODO