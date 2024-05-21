// Tipos de datos:

/**
 * 1. String
 * 2. Number
 * 3. Bigint
 * 4. Boolean
 * 5. Undefined
 * 6. Null
 * 7. Symbol
 * 8. Object
 */

// String -> texto

// Se definen por '' o "" o `` 
  // En el caso de `` podemos colocar variables con ${} -> `${2+2}` o `Hola, ${miVar}`
  // También, `` permite saltar línea

let miString = "Hola, mundo";
let str = 'Texto 1';
// Se introduce un salto de línea antes del string:
let str2 = `
  Texto 2 
  con suma: 
  ${2+2}`;
// Las variables String se pueden concatenar con +
let textoFinal = miString + "\n" + str + "\n" + str2;
console.log(textoFinal);
// Si se hacen operaciones numéricas, se transforma a string el resultado:
console.log(2 + '2'); // el resultado es String
// typeof me permite comprobar si una variable es de tipo String -> 'string'
console.log(typeof("Texto") == 'string'); // true

// Number -> número

// Agrupo los enteros (int) y número con decimales (float) 
// Por defecto son de 64 bits -> 1 => 0...1 ocupa 64 bits
// Si quiero declarar un número sin decimales, no los coloco
let int = 2;
// Si quiero número con decimales los coloco
let float = 2.5;
// Ambos son number:
console.log(typeof(int) == 'number');   // true
console.log(typeof(float) == 'number'); // true
// Los números se pueden usar en operaciones aritméticas:
let suma = int + float; // devuelve number con decimales
// Se pueden usar en operaciones de la librería matemática:
let num = 9;
let raiz = Math.sqrt(num); // 3
console.log(`La raíz cuadrada de ${num} es ${raiz}`);

// Bigint -> números enteros más grandes

const MULTIPLICADOR = 123456789;

let maximoInt = Number.MAX_SAFE_INTEGER; // usando Number
let bigInt = BigInt(maximoInt);      // número que excede el máximo "seguro" de Number
console.log("Máximo entero:", maximoInt, "x2:", maximoInt * MULTIPLICADOR);
// También podemos hacer que el Number sea BigInt colocanco n final:
console.log("Usando BigInt:", bigInt, "x2:", bigInt * BigInt(MULTIPLICADOR));