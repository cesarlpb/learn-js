/**
 * 
 * Una tienda aplica un descuento del 15% para las compras que incluyan más de 
 * 10 artículos iguales cuyo precio sea superior a 40 euros. 
 * Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el número 
 * de artículos y el precio de cada uno.
 */

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let numArticulos = Number.parseInt(prompt("Introduce el número de artículos a comprar:"));
let precioUnidad = Number(prompt("Introduce precio por unidad del artículo:"));
// 2. Realizamos operaciones y bucles necesarios
let precioTotal  = numArticulos * precioUnidad;
let descuento    = 0;
if ( numArticulos > 10 && precioTotal > 40 ){
  // aplicamos descuento
  descuento = 15; // %
  let cantidadDescontada = precioTotal * descuento / 100;
  precioTotal = precioTotal - cantidadDescontada;
}
// 3. Escribimos el resultado (output)
console.log(`
  
  Ticket 001
  
  Resumen de la compra:
  
  
  -----------------------------------------------------------
  Descripción         Unidades | Precio Unidad | Precio Total
  -----------------------------------------------------------
  Artículo sin nombre    ${numArticulos}          ${precioUnidad}          ${precioTotal}
  
  Descuento aplicado: ${descuento} %

  Mi Empresa S.L. @ 2025

  `)
