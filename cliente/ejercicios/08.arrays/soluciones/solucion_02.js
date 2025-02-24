// Ej 02

// Crea un array booleano con dos valores 'verdadero' y 'falso'. Este array te 
// sirve para traducir los valores true y false. Usalo para que el script 
// muestre un alert con el nombre verdadero si un usuario teclea un valor entre 
// 0 y 9 y falso en el caso contrario.

// Por ejemplo al teclear 10 deberá devolver falso
// 9 => verdadero

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let input = Number.parseInt(prompt("Introduce un número entero:"));
let arr   = ["Es verdadero", "Es falso"];
let msj   = "";
// 2. Realizamos operaciones y bucles necesarios
if(input < 0 || input > 9){
  msj = arr[1]; // accedemos al segundo valor
} else {
  msj = arr[0]; // accedemos al primer valor
}
// 3. Escribimos el resultado (output)
console.log(msj);