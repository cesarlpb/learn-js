// Ej 08

// Escribe una función que reciba como argumento un precio y el porcentaje de 
// impuestos. 
// La función devolverá el valor total a pagar, teniendo en cuenta 
// que al precio sin impuestos se le descuenta un porcentaje del 10% si es mayor 
// de 100 euros.

// Si he comprado por valor de 200 euros con un impuesto del 5%, me descuentan 
// un 10% por tanto pago 180 euros más los impuestos que son el 5% de 180. 
// En total 189 euros.

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables y constantes necesarias para el programa e inputs
let input1 = 0, input2 = 0;
// 2. Definimos las funciones necesarias para el programa
function calcularPrecioFinal(precioBase, impuesto){
  let descuento = 0;
  if(precioBase > 100){
    descuento = 10; // %
  }
  let precioConDescuento = precioBase  * (1 - descuento / 100);
  let precioFinal = precioConDescuento * (1 + impuesto / 100);
  return precioFinal.toFixed(2); // string
}
function main(){
  input1 = prompt("Introduce el precio base en euros:");
  input2 = Number(prompt("Introduce el impuesto en porcentaje:"));
  let precioBase = Number(input1);
  let impuesto   = Number(input2); 
  let precioFinalEuros = calcularPrecioFinal(precioBase, impuesto);
  console.log(`Ticket:
    Información de la tienda
    ------------------------
    Detalle de productos

    ------------------------
    Precio Base:       ${precioBase.toFixed(2)} €
    Impuesto aplicado: ${impuesto.toFixed(2)} %
    Descuento:         ${precioBase > 100 ? "10.00" : "0.00"} %
    ========================
    Precio Final:      ${precioFinalEuros} €

    Fecha y hora: ${new Date().toLocaleString()}
    `)
}
// 3. Realizamos operaciones y bucles necesarios -> usando las funciones
main();
// 4. Escribimos el resultado (output) -> usando las funciones
// en main
// 5. Pruebas o casos conocidos de resultados correctos
// TODO