/*
Crea una función que tenga dos argumentos: num1, num2, y que devuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos, no letras o símbolos.

Llamo a la función como sumar(3,5) deberá devolver 8.
*/

// Método 1: function
let a = 3, b = 4;
function sumar(num1, num2){
  // Este console.log() sí sale:
  console.log("parámetros:", num1, num2)
  return num1 + num2;
  // Esta línea no se ejecuta:
  console.log("Algo super importante");
}
let res = sumar(1, 2); // 3
console.log(`${1} + ${2} = ${res}`);
res = sumar(a, b) // 7
console.log(`${a} + ${b} = ${res}`);
// Método 2: const
// (( recomendado ))
const suma2 = function(a, b){
  return a + b;
}
// Notación de arrow function: 
const suma3 = (a, b) => a + b;

// Comprobamos que funcionan:
console.log("10 + 20 =", suma2(10, 20));
console.log("11 + 21 =", suma3(11, 21));