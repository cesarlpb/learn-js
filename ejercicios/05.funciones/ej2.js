/**
 * Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos.
 * 
 * esPar(2) // true
 * esPar(3) // false
 * 
 */

function esPar(num){
  return num % 2 == 0 // 4 % 2 -> 0 == 0 true
                      // 5 % 2 -> 1 == 0 false
}

// Cambiamos a número entero si es posible:
let num = parseInt(prompt("Ingresa un número:"));
let esNumeroPar = esPar(num); // guardamos el resultado
console.log(`El número ${num} es par? ${esNumeroPar}`);

// Nota: no realizamos validación del input -> por ahora, el programa "fallaría" si no recibimos un número