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
let str2 = 
`Texto 2 
algo
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
console.log("Máximo entero:", maximoInt, "prod:", maximoInt * MULTIPLICADOR);
// También podemos hacer que el Number sea BigInt colocanco n final:
console.log("Usando BigInt:", bigInt, "prod:", bigInt * BigInt(MULTIPLICADOR));

// Boolean -> true o false -> 1 bit

// Se usa para guardar el resultado de condiciones (comparaciones), estados, etc. que se puedan representar como verdadero o falso.

let esJsDivertido = true;
// Podemos usar booleano para operaciones lógicas:
let a = false, b = false;
/* AND
0 0 0
0 1 0
1 0 0
1 1 1
*/
console.log(a, b, a && b);
b = true;
console.log(a, b, a && b);
a = true; b = false;
console.log(a, b, a && b);
b = true;
console.log(a, b, a && b);
// Otros operadores lógicos son ||, !, etc.
// Para hacer las tablas podría ser más sencillo hacer una función:
function NAND(a, b){
  // definición
}

// undefined -> valor por defecto si no asignamos a una variable
let x; // x es undefined
// También es el valor por defecto de un array sin dato en un índice
let arr = [1, 2, 3]
arr[3]; // undefined

// No podemos hacer operaciones con undefined
// Si nos olvidamos de asignar valor a una variable e intentamos realizar una operación... puede arrojar error debido a que es undefined

// null -> valor es "nulo" o no conocido pero no es que este indefinido
let email = null;
// Imagina que el usuario no te da su email y se lo pides después ==> el email se guardaría como null

// Además, null es un tipo de dato bugeado porque 
typeof(null) // 'object' y debería devolver null
// es lo que hay...

// Symbol -> único

// Se usan para colocar keys únicos o privados en objetos
// Son útiles cuando tengamos que asegurar que dos datos no puedan ser iguales

let sym = Symbol("dato");
let sym2 = Symbol("dato");
// A pesar de ser iguales en definición:
console.log(sym == sym2)  // false
console.log(sym === sym2) // false
// Esto sucede porque cada Symbol es "único".
// También podemos usar Symbol para guardar un dato oculto en un objeto:
let sym3 = Symbol("Supersafe");
let obj = {};
obj[sym3] = "dato secreto";
console.log(obj); // sale el Symbol...
JSON.stringify(obj) // '{}' -> no sale el Symbol
