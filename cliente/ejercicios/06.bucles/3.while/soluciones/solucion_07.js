// Ej 07 

// Este script le pide al usuario que vaya tecleando números enteros positivos 
// hasta que el usuario ingrese el 0. 
// 
// En este caso el programa acaba mostrando el valor máximo y mínimo de los números 
// tecleados.

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let num = Number.parseInt(prompt("Introduce un número:"));
let min = Number.POSITIVE_INFINITY; // Infinity
let max = Number.NEGATIVE_INFINITY; // -Infinity

// 2. Realizamos operaciones y bucles necesarios

// >>> El 0 se excluye porque es la condición de parada del while <<<

while(num != 0){
  let esPositivo = num > 0; // se podría añadir que no sea NaN, etc...
  if(num > max && esPositivo){
    max = num;
  }
  if(num < min && esPositivo){
    min = num;
  }
  // ****************** debug: *********************
  console.log("input, max, min: ", num, max, min);
  //************************************************
  num = Number.parseInt(prompt("Introduce un número:"));
}

// 3. Escribimos el resultado (output)
console.log("Salida:");
console.log("El número mínimo registrado es ", min);
console.log("El número máximo registrado es ", max);

// El menor número posible de registrar es 1 en este programa
// Ignora números negativos
