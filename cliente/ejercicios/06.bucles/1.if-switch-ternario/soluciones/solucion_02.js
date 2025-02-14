/**
 * El usuario debe entrar un número y su cuadrado. Si es correcto el script 
 * enviará un mensaje de acierto en caso contrario dirá que se produjo un error.

Se trata de usar el if resumido (cond ? true : false)
 */

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let num = Number(prompt("Introduce un número:")); // número a elevar al cuadrado -> base
let pow = Number(prompt("Introduce un número:")); // power -> potencia

// x^2 -> x es la base, exponente = 2 y potencia es el resultado de x*x

// 2. Realizamos operaciones y bucles necesarios
let expectedPow = num * num; // num ** 2 -> valor esperado de la potencia (correcto)
let esCorrecto  = pow === expectedPow;
let msj = "";
if(esCorrecto){
  msj = `El cuadrado es correcto: ${num}^2 = ${pow}`;
} else {
  msj = "El cuadrado no es correcto";
}
// 3. Escribimos el resultado (output)
// Método 1:
console.log(msj);
// Método 2:
console.log(esCorrecto ? "✅ El cuadrado es correcto" : "❌ Ha habido un error");

// 4. Pruebas
// caso correcto: 3 y 9
// caso incorrecto: 3 y 8
// caso de inputs incorrectos -> mensaje de cuadrado no es correcto