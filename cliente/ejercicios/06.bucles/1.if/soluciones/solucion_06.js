// Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, 
// para ello el cliente puede pedir vino, cerveza, refresco, agua. 

// Si pide un cerveza o vino se le dirige a la barra 
// y si no pues se le dirige a la tienda.

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let bebida = prompt("Elige la bebida:");
bebida = bebida.toLowerCase(); // solo comprobamos con minúsculas
// 2. Realizamos operaciones y bucles necesarios
if( bebida == 'vino' || bebida == 'cerveza' ){
  console.log("Pase a la barra a por su bebida.")
}
if( bebida == 'refresco' || bebida == 'agua' ){
  console.log("Por favor, vaya a la tienda.")
}
// 3. Escribimos el resultado (output)
// con el console.log es suficiente

// 4. Pruebas
// elegimos una bebida de cada opción -> barra o tienda
// elegimos una bebida que no está en las opciones -> no hay mensaje
