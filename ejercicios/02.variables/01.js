/*

Has hecho una compra y sabes el precio del producto y su iva. 
Haz un script que te calcule el precio total que vas a pagar por tu compra. 

Te recuerdo que para calcular el total debes sumar al precio el resultado 
de multiplicasr precio por el iva y dividir por 100.

input: precio, iva
output: total

Ejemplo:

input: 100, 21
output: 121

input: 200, 21
output: 242

*/

// Caso 1:

let precio = 100; // €
let iva = 21;     // %
// Calculamos el impuesto:
let impuesto = (21 / 100) * precio;  // 21 
// Sumamos el impuesto al precio base:
let precioTotal = precio + impuesto; // 121
// Escribimos resultado en consola:
console.log("El resultado es:", precioTotal);
// Escribimos también el resultado en el elemento <p> con id "ej-1-1":
// Solo el número: 
document.getElementById("ej-1-1").innerText = precioTotal;
// Formateando el dato con texto:
// document.getElementById("ej-1-1").innerText = "El precio con IVA es: " + precioTotal + " €";

// Caso 2: 