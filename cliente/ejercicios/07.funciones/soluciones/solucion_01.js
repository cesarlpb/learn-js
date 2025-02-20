// Ej 01

// Crea una función que tenga dos argumentos: num1, num2, y que devuelva como 
// resultado la suma de ambos números. 
// Se supone que se usarán solo números válidos, no letras o símbolos.  

// Llamo a la función como sumar(3,5) deberá devolver 8.

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables y constantes necesarias para el programa e inputs
let a = 0, b = 0;
// 2. Definimos las funciones necesarias para el programa
function sumar(num1, num2){
  return num1 + num2; // no validamos los inputs -> deben ser numbers
}
function hacerTest(){
  // si sumo 3 + 5 me debe salir 8
  sumaCalculada = sumar(3,5);
  sumaEsperada  = 8; // valor conocido correcto
  return sumaCalculada === sumaEsperada; // true -> correcto
}
/**
 * Ejecuta lógica del ej 01 -> el programa se envuelve en esta fn
 */
function main(){
  console.log("Inicio del programa");
  a = Number(prompt("Introduce el primer número:"));
  b = Number(prompt("Introduce el segundo número:"));
  suma = sumar(a, b);
  console.log(`La suma de ${a} + ${b} = ${suma}`);
  console.log("Final del programa");
}
// 3. Realizamos operaciones y bucles necesarios -> usando las funciones

// 4. Escribimos el resultado (output) -> usando las funciones
main();       // parte principal del programa
// 5. Pruebas o casos conocidos de resultados correctos
// sumar(3,5) // 8 = 3 + 5
let esTestCorrecto = hacerTest();  // tests
console.log("El test es correcto?", esTestCorrecto);