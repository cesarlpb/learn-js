// Ej 08

/**
 * Se trata de dibujar un triángulo rectángulo con asteriscos. 
 * El usuario tecleará un valor entero, el programa escribirá con asteriscos 
 * tantas líneas como diga ese número. Cada línea estará formada por una serie 
 * de astericos tan larga como diga el número de línea en el que está.

- Para separar una línea de la siguiente en console o en alert debes usar "\n". 
- En este ejercicio usa console.log().

Le tecleamos el valor 5. El resultado será:

*
**
***
****
*****

Es decir, 5 líneas.

*/

/******************************************************************************/

// Pasos para resolver

// Recibimos número => validamos que sea no negativo
// bucle for para escribir los caracteres

// 1. Declaramos variables necesarias (inputs)
let input = prompt("Introduce el número de línea del triángulo:");
let num = Number.parseInt(input); // convertimos el input numérico (string) a number

// usamos la comprobación del ej 01 para verificar que el número es entero:
let esEnteroValido = false;
let esNumberValido = !Number.isNaN(num) && Number.isFinite(num) ? true : false;
if(esNumberValido && num >= 0){
  esEnteroValido = String(input) == String(parseInt(input)) && esNumberValido ? true : false;
}
// en este punto -> sabemos si es un entero 'correcto' -> esEnteroValido

// 2. Realizamos operaciones y bucles necesarios
let output = ""; // caso input == '0'

// Triángulo de num filas y tantas columnas como el número de la fila

// fila 0 -> 0 * -> 
// fila 1 -> 1 * -> *
// fila 2 -> 2 * -> **
// fila 3 -> 3 * -> ***
// etc

if(esEnteroValido){
  console.log("primer bucle:");
  // primer bucle: itera por filas desde 0 a num -> 1, 2 ... num
  for(let i = 1; i <= num; i++){
    console.groupCollapsed(`iteración (i): ${i}`);
    let debug = i + " -> ";
    debug += "previo: \n" + output + " -> "; // al añadir este \n output sale alineado "mejor"

    /********* instrucciones del for ********/

    // segundo bucle: itera las columnas en cada fila -> de 0 a i - 1
    for(let j = 0; j < i; j++){
      output += "*";
    }
    // al finalizar columna -> salto de línea para la siguiente fila:
    output += "\n";

    /****************************************/

    debug += "posterior: \n" + output; // al añadir este \n output sale alineado "mejor"
    console.log(debug);
    console.groupEnd();
  }
  console.log("final del primer bucle:");
}
// 3. Escribimos el resultado (output)
console.log("Salida:");
console.log(output);

// 4. Pruebas
// cualquier char, número negativo    -> output: ""
// cualquier char, número no negativo -> output: "..."

// 5. Variantes

// - Triángulo recto inclinado a la derecha:

// Para input 3:

//   *
//  **
// ***

// - Triángulo rotado 90 grados, "tumbado" u horizontal:

// Para 4:
// *
// *  *
// *  *  *
// *  *  *  *

// - Triángulo con borde:

// Para 5:
// *
// * *
// * o *
// * o o *
// * * * * *

// o: 

/*

/|
--

*/

/*

   /|
  /*|
 /**|
/***|
-----

*/