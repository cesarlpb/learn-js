/*

Has hecho una compra y sabes el precio del producto y su IVA. 
Haz un script que te calcule el precio total que vas a pagar por tu compra. 

Te recuerdo que para calcular el total debes sumar al precio el resultado 
de multiplicar precio por el IVA y dividir por 100.

inputs: precio, IVA   -> numbers
output: precio total  -> number

Ejemplo:

inputs: 100, 21 -> €, %
output: 121     -> €

inputs: 200, 10 -> €, %
output: 220     -> €

*/

// ************************************************************************** //

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let precio = 100;
let iva = 21;
// 2. Realizamos operaciones necesarias
let total = precio + (iva / 100 ) * precio
// 3. Escribimos el resultado (output)
console.log(total) // Escribe el resultado en consola -> lectura
