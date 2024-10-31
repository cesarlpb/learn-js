/**
 * Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento.
 * 
 * esMultiplo(10, 2) // true
 * esMultiplo(11, 2) // false
 * 
 */

// Comprobamos si b es divisor de a, es decir, 

// si a es múltiplo de b:
// 10, 2 -> 2 es divisor de 10
// o lo que es lo mismo: 10 es múltiplo de 2

function esMultiplo(a, b){
  return a % b === 0;
}

let a = parseInt(prompt("Introduce el primer número (múltiplo):"));
let b = parseInt(prompt("Introduce el segundo número (divisor)"));
let multiplo = esMultiplo(a, b);
console.log(`${a} es múltiplo de ${b}? ${multiplo}`);

// Nota: no estamos validando que sean números, ni que b <= a para que pueda ser divisor, o que no sea cero la b, etc.