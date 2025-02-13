/*
En este ejercicio debes pedir dos números enteros y devolver el cociente de 

dividir el primero entre el segundo, 

pero si este es cero no debe hacer la división, sino lanzar un mensaje de error
*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)

// a -> dividendo
// -
// b -> divisor

// variables "necesarias"
let dividendo = Number(prompt("Introduce el primer número (dividendo):"));
let divisor   = Number(prompt("Introduce el segundo número (divisor):"));
let cociente  = 0;
// 2. Realizamos operaciones y bucles necesarios
// variables opcionales
let esDivisorCero = divisor == 0;
let msj = "";
if ( esDivisorCero ){
  console.error("❌ No se puede dividir por cero.")
} else {
  cociente = dividendo / divisor;
  msj = `El resultado de la divisón de ${dividendo} entre ${divisor} es ${cociente}.`
}
// 3. Escribimos el resultado (output)
console.log(msj);