/* 

Definir una función que cree una cadena de letras repetidas tantas veces como le digamos. La función recibe dos argumentos: la letra y el número de repeticiones.

Ejemplo:
repetir("1", 3) // '111'

No hacemos validaciones por el momento
*/

function repetir(str, num){
  return str.repeat(num);
}

let str = prompt("Ingresa string:");
let num = parseInt(prompt("Ingresa entero:"));

console.log(repetir(str, num));

