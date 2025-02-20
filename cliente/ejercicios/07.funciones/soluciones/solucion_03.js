// Ej 03

// Función que calcule si un número es múltiplo de otro. 
// La función recibirá dos 
// argumentos, el primero será el supuesto mutiplo del segundo argumento.

// Si ejecuto o llamo a la función con esMultiplo(40,4) 
// debe devolver true porque 40 es divisible por 4. Si ejecutas esMultiplo(23,4) dará false.

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables y constantes necesarias para el programa e inputs
let input = 0;
// 2. Definimos las funciones necesarias para el programa
function esMultiplo(multiplo, divisor){
  /*
  let cociente = Number.parseInt(multiplo / divisor); // 23 / 4 -> 5
  let resto    = multiplo - cociente * divisor;       // 23 - 4 * 5 = 3
  return resto === 0; // 3 === 0 false
  // en este ejemplo, 23 no es múltiplo de 4 ni 4 es divisor de 23.
  */
  return multiplo % divisor === 0;
}
function main(){
  input1 = Number(prompt("Introduce el múltiplo a comprobar:"));
  input2 = Number(prompt("Introduce el divisor a comprobar:"));
  let esMultiploValido = esMultiplo(input1, input2);
  console.log(`El número ${input1} es múltiplo de ${input2}?: ${esMultiploValido}`); 
}
// 3. Realizamos operaciones y bucles necesarios -> usando las funciones
main();
// 4. Escribimos el resultado (output) -> usando las funciones
// -> en main
// 5. Pruebas o casos conocidos de resultados correctos
function hacerTests(){
  let m1 = 40, d1 = 4, correcto1 = true;
  let m2 = 23, d2 = 4, correcto2 = false;
  let calculado1 = esMultiplo(m1, d1);
  let calculado2 = esMultiplo(m2, d2);
  return (
    correcto1 === calculado1 && correcto2 === calculado2
  );
}
let sonTestsCorrectos = hacerTests();
console.log("Los test son correctos?", sonTestsCorrectos ? "✅ Sí" : "❌ No");

// esMultiplo(40,4) // true
// esMultiplo(23,4) // false