/**
 * Este programa te ayuda a viajar. El programa pide al usuario si va a viajar 
 * con coche, tren, bicicleta o autobús. 
 * Si va en tren o autobús le recordará que lleve dinero para el billete.
 */


/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let medioTransporte = prompt("Introduce tu medio de transporte (coche, tren, bicicleta, autobús):");
medioTransporte = medioTransporte.toLowerCase();
// 2. Realizamos operaciones y bucles necesarios
if( medioTransporte == "tren" || medioTransporte == "autobús"){
  console.log("No te olvides de llevar dinero para el billete.")
}
// 3. Escribimos el resultado (output)
// ---
