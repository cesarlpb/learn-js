/**
 * Un programa que pida un número y diga si es positivo o negativo. 
 * 
 * El cero se considera positivo ?
 * 
 * Ejemplo:
 * 
 * 1  -> positivo
 * -1 -> negativo
 * 
 * 'a' -> error
 * [], {} -> error
 * 
 */

// Esta vez validamos el tipo de dato:

let num = Number(prompt("Ingresa un número:"));

if (Number.isNaN(num) || typeof(num) != 'number'){
  // A veces, se añade esta condición: num == null
  console.error("El dato no es un número");
} else {
  // si he recibido número
  if (num >= 0){
    console.log('%c El número es positivo o cero ', 'background: #000; color: #bada55');
  } else {
    console.log('%c El número es negativo ', 'background: #000; color: #ff0000');
  }
}
// console.log con colores 👀