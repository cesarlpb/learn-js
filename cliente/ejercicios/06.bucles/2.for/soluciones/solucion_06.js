// Ej 06

/**
 * Este script el usuario deberá teclear una letra y un número, y el programa 
 * mostrará una cadena formada por la letra repetida el número de veces que haya 
 * tecleado.
 */

// Ejemplo:

// inputs: "a", 3
// output: "aaa"

/******************************************************************************/

// Pasos para resolver

// Validaciones:
// - número >= 0 (no negativo)
// cualquier caracter como primer input de tipo string está ok

// 1. Declaramos variables necesarias (inputs)
// character => caracter => char en corto => 8 bytes
let char = prompt("Introduce un caracter para repetir:");
let input = prompt("Introduce un número mayor de repeticiones que cero:");
let num = Number.parseInt(input); // convertimos el input numérico (string) a number

// usamos la comprobación del ej 01 para verificar que el número es entero:
let esEnteroValido = false;
let esNumberValido = !Number.isNaN(num) && Number.isFinite(num) ? true : false;
if(esNumberValido && num >= 0){
  esEnteroValido = String(input) == String(parseInt(input)) && esNumberValido ? true : false;
}
// en este punto -> sabemos si es un entero 'correcto' -> esEnteroValido

// En vez de copiar y pegar este código, 
// ¿sería posible tenerlo disponible para usar en futuros programas?
// Sí, así surgen las funciones

// 2. Realizamos operaciones y bucles necesarios
let output = ""; // lo devolvemos así si no es esEnteroValido ( -> false )
if(esEnteroValido){
  for(let i = 0; i < num; i++){
    // iniciamos en 0 -> iteramos hasta antes de num -> num veces y step de 1 (i++)
    let debug = "iteración (i): " + i + " -> ";
    debug += "previo: " + output + " -> ";

    /********* instrucciones del for ********/
    output += char;
    /****************************************/

    debug += "posterior: " + output;
    console.log(debug);
  }
    
} 
// 3. Escribimos el resultado (output)
console.log("Salida:");
console.log(output);

// 4. Pruebas
// número negativo, cualquier char > ""
// número no negativo, cualquier char > "..." 
// se puede usar emojis como char