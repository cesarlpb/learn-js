/*
Crea una función que tenga dos argumentos: num1, num2, y que devuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos, no letras o símbolos.

Llamo a la función como sumar(3,5) deberá devolver 8.
*/

// Método 1: function
let a = 3, b = 4;
function sumar(num1, num2){
  // Este console.log() sí sale:
  console.log("parámetros:", num1, num2);
  return num1 + num2;
  // Esta línea no se ejecuta:
  console.log("Algo super importante");
}

console.group("Ejercicio 1: Sumas");

console.group("Método 1: function");
  // Declaro y asigno res: 
  let res = sumar(1, 2); // 3
  console.log(`${1} + ${2} = ${res}`);
  // Reasigno res:
  res = sumar(a, b) // 7
  console.log(`${a} + ${b} = ${res}`);
console.groupEnd();

// Método 2: const
// (( recomendado ))
const suma2 = function(a, b){
  return a + b;
}

// Método 3: arrow o flecha
// Notación de arrow function: 
const suma3 = (a, b) => a + b;

// Comprobamos que funcionan:
console.group("Método 2: const");
  console.log(suma2)
  console.log("10 + 20 =", suma2(10, 20));
console.groupEnd();

console.group("Método 3: arrow =>");
  console.log(suma3)
  console.log("11 + 21 =", suma3(11, 21));
console.groupEnd();

// Se puede añadir prompts para recibir los números que se suman