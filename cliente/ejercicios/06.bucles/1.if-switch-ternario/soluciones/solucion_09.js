/**
 * Un comerciante hace descuentos a sus clientes de la siguiente forma:

- Si ha comprado menos de 100 euros no hay descuento
- Si la compra está entre 100 y 300 euros le descuenta un 5%
- Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
- Si la compra supera los 500 euros le descuenta un 15%

 */

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let precioTotal = Number(prompt("Introduce el precio total de la compra en euros:"));
// 2. Realizamos operaciones y bucles necesarios
let descuento = 0; // %
if(precioTotal > 100 && precioTotal <= 300){
  descuento = 5; // %
} else if(precioTotal > 300 && precioTotal <= 500){
  descuento = 10; // %
} else if(precioTotal > 500){
  descuento = 15; // %
}
// 3. Escribimos el resultado (output)
console.log(`
  Para la compra de ${precioTotal} se aplica un descuento de ${descuento} %. 
  Te ahorras: ${(precioTotal * descuento / 100).toFixed(2)} €`);