/* 
Has hecho una compra y sabes el precio del producto y su iva. 
Haz un script que te calcule el precio total que vas a pagar por tu compra.

Te recuerdo que para calcular el total debes sumar al precio el resultado 
de multiplicasr precio por el iva y dividir por 100.
*/

// Iniciamos las variables necesarias para calcular el resultado:
let precio = 200;
let iva = 21; // %
// Cálculo de los impuestos a pagar:
let impuestos = precio * iva / 100;
// Calculamos el precio final del producto:
let precioTotal = precio + impuestos;
// Escribimos el resultado en consola:
console.log("El precio final es: " + precioTotal);