/**
 * En este ejercicio debes pedir dos números enteros y devolver el cociente de dividir el primero entre el segundo, pero si este es cero no debe hacer la división, sino lanzar un mensaje de error
 * 
 * Ejemplo: 
 * 4/2 -> 2
 * 
 * 1/0 -> Aviso: no se puede dividir por cero
 * 
 * Variación: while para pedir dato hasta que sea correcto
 * 
 */


function dividir(a, b) {
  if (b == 0){
    myPrint("Error: no se puede dividir por cero", 'r');
    return ; // undefined o NaN, por defecto sería Infinity
  }
  return a / b;
}
// let a = parseInt(prompt("Ingresa el dividendo:"));
// let b = parseInt(prompt("Ingresa el divisor:"));

// Realizamos la operación:
// dividir(a, b);

// ¿Cómo vuelvo a pedir datos si tengo b = 0?
let a, b;
do {
  a = parseInt(prompt("Ingresa el dividendo:"));
  // TODO 2: pedir solo b si es cero:
  b = parseInt(prompt("Ingresa el divisor:"));
  // TODO: colocar un if para evitar llamada si b es 0
  let cociente = dividir(a, b);
  console.log("b es: ", b);
  console.log("cociente:", cociente);
} while(b == 0);

// print

function myPrint(mensaje, color){
  if (color == 'r'){
    console.log(`%c ${mensaje} `, 'background: #000; color: #ff0000');
  } else if (color == 'g') {
    console.log(`%c ${mensaje} `, 'background: #000; color: #00ff00');
  } else {
    console.log(`%c ${mensaje} `, 'background: #000; color: #aaa');
  }
}