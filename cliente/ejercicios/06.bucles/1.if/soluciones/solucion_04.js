/*
Este script pide al usuario que teclee una letra entre A, B, C, D. 
Si pulsa la letra A en mayúscula o en minúscula le 
dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó.
*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let letra = prompt("Introduce una letra entre A y D:");
letra = letra.toLowerCase() // -> pasamos la letra a minúscula
// 2. Realizamos operaciones y bucles necesarios
// condición para que sea letra a, b, c o d:
let esLetraValida = letra == 'a' || letra == 'b' || letra == 'c' || letra == 'd'
if(esLetraValida) {
  if(letra == 'a'){ console.log("✅ ¡Has acertado!") }
  else { console.log("❌ No has acertado") }
} else {
  console.log("❌❌ Esa letra no es válida. Vuelve a probar...")
}
// 3. Escribimos el resultado (output)
// con el mensaje del console.log es suficiente

// 4. Pruebas

// input: a -> acertado
// input: b -> no acertado
// input: z -> no válido
// input: 1 -> no válido