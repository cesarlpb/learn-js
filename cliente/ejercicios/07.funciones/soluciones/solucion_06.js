// Ej 06

// Diseña una función que calcule el factorial de un número, usa una función recursiva (que se llama a si misma). 
// Recuerda que el factorial de un número es el resultado de multiplicar cada número por el anterior hasta llegar a 1. 
// Y el factorail de 0 es por definición 1

// Si escribo factorial(3) obtendré 3 * 2 * 1 = 6

// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

// factorial(1) = 1
// factorial(0) = 1 (definición)

/******************************************************************************/

// Pasos para resolver

const DEBUG = false;
// 1. Declaramos variables y constantes necesarias para el programa e inputs
let input = "";

// 2. Definimos las funciones necesarias para el programa

// Simplificación: suponemos que el dato es un número no negativo

// solución usando bucle for

function factorialFor(num){
  let factorial = num;
  
  // casos especiales del 0 o 1:
  // Assertive Programming o programación negativa
  // descartar primero los casos no válidos o simples
  if(num == 0 || num == 1){
    return 1;
  }

  // resto de casos:
  for(let i = num-1; i > 1; i--){
    factorial = factorial * i;
    // debug:
    DEBUG ? console.log(factorial, i) : null;
  }
  return factorial
}

// solución usando bucle while

function factorialWhile(num){
  let factorial = num;

  if(num == 0 || num == 1){
    return 1;
  }

  let i = num - 1;
  while(i > 1){
    factorial *= i; // equivale a la línea 34
    // debug: 
    DEBUG ? console.log(factorial, i) : null;
    // debug ^
    i--;            // decrementamos en 1 el contador
  }

  return factorial;
}

// solución recursiva

// Recursión o recursividad := el uso de un recurso (función) repetidas veces
// para resolver un problema usando un caso más sencillo cada vez hasta que lleguemos
// a un caso cuya respuesta conocemos. 

// Límite: Number.MAX_VALUE -> 1.7976931348623157e+308
// factorialRecursion(170)
// 7.257415615307994e+306
// factorialRecursion(171)
// Infinity

function factorialRecursion(num){
  if(num == 0 || num == 1){
    return 1;
  }
  return num * factorialRecursion(num - 1);
}

// versión con BigInt

// BigInt -> tipo de dato que almacena números enteros grandes
// Hemos comprobado empíricamente que la siguiente función resuelve hasta 
// cerca de num < 8000

// Límite: 7864

// factorialRecursionBigInt(7864)
// 24867523562369163069167475716193145325856270344854…000000000000000000000000000000000000000000000000n
// ~ 10**27222
// factorialRecursionBigInt(7865) 
// Uncaught RangeError: Maximum call stack size exceeded => hemos excedido la cantidad
// de llamadas a la fn que podemos hacer en el navegador

// TODO: ¿habrá una forma de ir más lejos con JS en frontend?
function factorialRecursionBigInt(num){
  num = BigInt(num); // convertimos a bigint
  if(num == 0n || num == 1n){
    return 1n;
  }
  return num * factorialRecursionBigInt(num - 1n);
}

// Función para verificar el entero:
function verificarEntero(str){
  let esEntero = Number.parseInt(str) == Number(str);
  let esNaN    = Number.isNaN(Number(str));
  let esNumeroFinito = Number.isFinite(Number(str)); // no es Infinity
  // TODO: añadir condición de que - además - sean no negativos (0, 1, 2...)
  return esEntero && !esNaN && esNumeroFinito;
}

function main(){
  input   = prompt("Introduce un número entero positivo:");
  let num = Number.parseInt(input); // factorial solo con números no negativos
  let esEnteroValido = verificarEntero(input) // le pasamos string
  if(!esEnteroValido){
    console.error(`${input} debe ser un entero válido no negativo`).
    return;
  }
  
  factorial1 = factorialFor(num);
  
  factorial2 = factorialWhile(num);
  
  factorial3 = factorialRecursion(num);
  
  factorial4 = factorialRecursionBigInt(num);

  let output = `
  Resultados:
  Factorial de ${num}
  - bucle for:   ${factorial1}
  - bucle while: ${factorial2}
  - recursión:   ${factorial3}
  - BigInt:      ${factorial4}
  `

  console.log(output);
}
// 3. Realizamos operaciones y bucles necesarios -> usando las funciones
main();
// 4. Escribimos el resultado (output) -> usando las funciones
// en main()
// 5. Pruebas o casos conocidos de resultados correctos


// factorial(3) obtendré 3 * 2 * 1 = 6

// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

// factorial(1) = 1

// factorial(0) = 1 (definición)