/**
 * En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. 
 * Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le 
 * ofrecerá vino blanco y si pide verdura se le ofrecerá agua.

Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.
 */

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let menu = prompt("¿Qué menú quiere tomar?").toLowerCase();
let menuValido = menu == "carne" || menu == "pescado" || menu == "verdura";
// 2. Realizamos operaciones y bucles necesarios

// Método 1: if - else

let bebida = "";
// mensaje por defecto:
let mensaje = "Por favor, elija carne, pescado o verdura.";

if(menu == "carne"){
  bebida = "vino tinto";
} else if (menu == "pescado"){
  bebida = "vino blanco";
} else if(menu == "verdura"){
  bebida = "agua";
} 

// 3. Escribimos el resultado (output)

// Método 1:
if(menuValido){
  mensaje = `Su bebida es: ${bebida}`;
}
console.log(`Ha elegido ${menu}. ${mensaje}`);

// Ternario
console.log(menu == "carne" ? 
  "Su bebida es vino tinto" : menu == "pescado" ? 
  "Su bebida es vino blanco" : menu == "verdura" ? 
  "Su bebida es agua" : "Elija carne, pescado o verdura");

// Switch
// ¿Cuándo? -> viene bien cuando conocemos los casos exactos (valores) a comprobar
let msj2 = ""
switch(menu){
  case "carne":
    // menu == "carne"
    msj2 = "Bebida: vino tinto";
    break; // parar o romper la ejecución del bucle -> envía a 65 -> } (y sale del bucle)
  case "pescado":
    // menu == "pescado"
    msj2 = "Bebida: vino blanco";
    break;
  case "verdura":
    // menu == "verdura"
    msj2 = "Bebida: agua";
    break;
  default:
    // todos los demás casos no contemplados en los anteriores
    msj2 = "Elija carne, pescado o verdura";
}
console.log(msj2); // salida del switch