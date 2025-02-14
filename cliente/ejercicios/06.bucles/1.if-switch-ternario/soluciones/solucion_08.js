/**
 * En una tienda coches se quiere redirigir a un cliente hacia una sección de 
 * acuerdo al tipo de coche que elija. 
 * 
 * - Si elige tipo gasolina o 1 se le enviará a la oficina numero 100. 
 * - Si elige el tipo diésel o 2 irá a la oficina 200 y 
 * - Si elige eléctrico o 3 se le enviará a la oficina 300.
 * 
 */

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let opciones = `
  [1] Gasolina
  [2] Diésel
  [3] Eléctrico
`;
let opcion = Number.parseInt(prompt(`¿Qué tipo de coche quiere elegir (por número)? ${opciones}`));
// 2. Realizamos operaciones y bucles necesarios
if(opcion == 1){
  // gasolina
  console.log("🚗 Gasolina");
} else if(opcion == 2){
  // diésel
  console.log("🚙 Diésel");
} else if(opcion == 3){
  // eléctrico
  console.log("🚕 Eléctrico");
} else {
  // cualquier otro input no es válido
  console.error("Esa no es una opción válida. Vuelve a intentarlo...");
}
// 3. Escribimos el resultado (output)
