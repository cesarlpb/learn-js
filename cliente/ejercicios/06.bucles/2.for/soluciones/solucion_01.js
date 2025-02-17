// Ej 01 

/*
*
* Usando un bucle for escribir un script que pida un valor entero y muestre en 
* pantalla una lista de números desde el 0 al valor tecleado. Los números se 
* separarán por comas.  
*
* Ejemplo:
* 
* para el número 3: 0, 1, 2, 3
* para el 0  -> 0
* para el -1 -> 0 // NaN, Infinity... -> podemos usar un if para "verificar" el input
* 
*/

/******************************************************************************/

// Pasos para resolver:

// 0. Lógica:

// Pedimos un número  -> convertimos a entero y verificamos que sea entero
// Si es entero       -> verificamos si es mayor o 0 -> hacemos string de salida
// En caso contrario  -> (no es entero) habría dos casos: es número o no es número
//  - si es número    -> podemos redondear
//  - si no es número -> devolvemos 0 (convenio o decisión sobre la salida del programa)

// input  -> string -> number
// output -> string // lista separada por comas o un mensaje...

/******************************************************************************/

// 1. Declaramos variables necesarias (inputs)
let input = prompt("Introduce un número entero y mayor o igual a cero:");
let num = parseInt(input);
let esEnteroValido = false; // por defecto 'suponemos' que no es válido
// verificamos si se cumplen las condiciones necesarias:
// - es entero -> si es número entero ya "estaría" como entero en este punto 
// - es mayor o igual a cero -> esEnteroValido > 0 -> ?
// - no es NaN, ni Infinity 
  // -> usamos Number.isNaN(num) para descartar que sea NaN
  // -> usamos Numer.isFinite(num) para descartar que sea Infinity <-> 1/0
let esNumberValido = !Number.isNaN(num) && Number.isFinite(num) ? true : false;
// Verificamos las 3 condiciones:
  // opcional: String(num) == String(parseInt(num))
  // alternativa -> separar string usando el punto decimal y comparar parte entera y parte decimal (debe ser cero)
if(esNumberValido && num >= 0){
  esEnteroValido = String(input) == String(parseInt(input)) && esNumberValido ? true : false;
}
// Comprobaciones (debug):
// usad console.group("...") para dejarlo expandido
console.groupCollapsed("Información de debug");
  console.log("número (input):", num);
  console.log("número válido?", esNumberValido);
  console.log("es entero?", esEnteroValido);
  console.log("mayor o igual que cero?", num >= 0);
console.groupEnd();

// 2. Realizamos operaciones y bucles necesarios
let output = ""; 
if(esEnteroValido){
  // bucle for -> nos permite repetir instrucciones mientras una condición sea cierta
  // En este caso, mientras nos falten números por evaluar, añadimos algo al output:
  // 0,
  // 1, -> 0, 1,
  // 2, -> 0, 1, 2, ...
  // etc
  for(let i = 0; i <= num; i++){
    let debug = "iteración (i): " + i + " -> ";
    debug += "previo: " + output + " -> ";
    // iniciamos contados "i" en 0
    // condición: contador "i" menor o igual a num (cantidad de elementos)
    // step o salto -> incrementamos en 1 en cada paso o iteración
    
    /********* instrucciones del for ********/
    output += i; // -> instrucción para todos los pasos
    // puesto que la coma no la quiero en el último paso, pongo un bucle if:
    if(i < num){
      output += ", ";
    }
    // en el caso i = num -> no se añadirá coma al final (el último paso)
    /****************************************/
    debug += "posterior: " + output;
    console.log(debug);
  }
} else {
  output = "0"; // -> si no es input correcto, es NaN o Infinity...
}
// 3. Escribimos el resultado (output)
console.log("Salida:")
console.log(output);

// 4. Pruebas
// Probamos un número pequeño de iteraciones -> 3 
// Números no válidos -> output = "0"
// Números negativos
