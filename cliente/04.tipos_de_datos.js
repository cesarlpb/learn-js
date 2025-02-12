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

// 1. String -> texto

// Se definen por '' o "" o `` (string interpolado)
  // En el caso de `` podemos colocar variables con ${} -> `${2+2}` o `Hola, ${miVar}`
  // También, `` permite saltar línea:
  /**
   * let texto = `Hola
   *              mundo
   *              `
   */

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
console.log("textoFinal:", textoFinal);
// Si se hacen operaciones numéricas, se transforma a string el resultado:
console.log("suma 2 + '2' =", 2 + '2'); // el resultado es String -> '22'
// typeof me permite comprobar si una variable es de tipo String -> 'string'
console.log("El tipo de dato es string?", typeof("Texto") == 'string'); // true

// 2. Number -> número

// Agrupo los enteros (int) y número con decimales (float) 
// Por defecto son de 64 bits -> 1 => 0...1 ocupa 64 bits
// Si quiero declarar un número sin decimales, no los coloco

let int = 2;     // int <> número entero sin decimales
// Si quiero número con decimales los coloco
let float = 2.5; // float <> número con decimales
// Ambos son number:
console.log("int es number?", typeof(int) == 'number');     // true
console.log("float es number?", typeof(float) == 'number'); // true
// Los números se pueden usar en operaciones aritméticas:
let suma = int + float; // devuelve number con decimales -> float -> number

// Se pueden usar en operaciones de la librería matemática:
let num = 9;
let raiz = Math.sqrt(num); // 3
console.log(`La raíz cuadrada de ${num} es ${raiz}`);

// 3. Bigint -> números enteros más grandes

const MULTIPLICADOR = 123456789;

let maximoInt = Number.MAX_SAFE_INTEGER; // usando Number
let bigInt = BigInt(maximoInt);          // número que excede el máximo "seguro" de Number
console.log("Máximo entero:", maximoInt, "prod:", maximoInt * MULTIPLICADOR);
// También podemos hacer que el Number sea BigInt colocanco n final:
console.log("Usando BigInt:", bigInt, "prod:", bigInt * BigInt(MULTIPLICADOR));

// 1.1119998978735158e+24 con number
// 1111999897873515775537899n con BigInt -> no perdemos precisión

// 5. Boolean -> true o false -> 1 bit

// Se usa para guardar el resultado de condiciones (comparaciones), estados, etc. que se puedan representar como verdadero o falso.

let esJsDivertido = true;

// Podemos usar booleano para operaciones lógicas:
let a = false, b = false;
/* 
Tabla de verdad de AND
0 0 0
0 1 0
1 0 0
1 1 1
*/
console.log("a   ", "b   ", "a && b")
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

// 5. Undefined 

// Valor por defecto si no asignamos a una variable

let x;   // x es undefined
typeof x // undefined

// También es el valor por defecto de un array sin dato en un índice

let arr = [1, 2, 3]
arr[3]; // undefined

// Si agregamos valores a un array saltando índices (que tiene valor undefines)
// al hacer console.log() del array aparecerá "empty" en esas posiciones
// PERO los valores (en caso de accederlos) son undefined

// No podemos hacer operaciones con undefined

// Si nos olvidamos de asignar valor a una variable e intentamos realizar una 
// operación... puede arrojar error debido a que es undefined

// Se puede evitar inicializando variables con el tipo de dato esperado:
let numero = 0;
let string = "";
// líneas de código
console.log(1 + numero); // 1 + 0 -> 0 es un number que puedes seguir usando
                         // con un undefined saldía NaN -> no puedes usarlo más
console.log("Hola" + string) // "Hola" -> string
                             // con undefined saldría "Holaundefined"

// 6. null 
// valor es "nulo" o no conocido pero no es que este indefinido

// En un formulario, hay campos required (obligatorios) y campos opcionales:
let email = null; // es raro no tener el email en un form como obligatorio
let phone = null; 
let zipCode = null; // etc.

// Imagina que el usuario no te da su email y se lo pides después 
// ==> el email se guardaría como null

// Además, null es un tipo de dato bugeado oficialmente porque 
typeof(null) // 'object' y debería devolver null
// Explicación en inglés: https://alexanderell.is/posts/typeof-null/
// No se puede arreglar por retrocompatibilidad con navegadores
// así que hasta nuevo aviso... typeof null no es fiable
// es lo que hay...

// ¿Cómo comprobamos que una variable es null?
// comparador de valor / tipo:
let algoNull = null;

console.log("Esto es null?", algoNull == null);  // solo verifica valor, no tipo
console.log("Esto es null?", algoNull === null); // verifica valor y tipo
// por si no nos fiamos de JS...
console.log("Esto es null???", algoNull === null && String(algoNull) === 'null');

// 7. Symbol 
// permite crear identificadores únicos

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

// 8. Object 
// todos son obj en JS :)

// Objeto := es la abstracción en nuestro programa de alguna entidad del mundo 
// real / virtual

// Ejemplos: si vamos a hacer una página de coches tiene sentido que tengamos objetos
// de tipo Coche

let coche = {
  "matricula": 'ABC 123',
  "año": 2030,
  "marca": "Musk"
}

// Visualizar el objeto coche:
console.log(coche);
// También podemos usar console.table:
console.table(coche)

// ✅ const y let:
// ❌ var no lo usamos => permite redeclarar y solo serviría por motivos de retrocompatibilidad

// constantes -> const
// Las verdaderas constantes cuyo valor no cambia en la ejecución del programa
const PI = 3.1415;
const G = 6.67e-11;
const saludo = "Hola, ¿qué tal?";

const estaciones = Object.freeze(["verano", "otoño", "invierno", "primavera"]);
const objFijo = Object.freeze({
  "nombre": "Pepe",
  "apellido": "Rana"
});
// etc...

// Nota: objFijo.nombre = "otro valor" no arroja error pero JS no cambia el dato

// const para evitar reasignación

// Se usa mucho cuando se hacen funciones:
const sumar = function(a, b) {
  return a + b;
}
// De esta forma, no se puede "redefinir" la función sumar durante la ejecución
// Funciones siempre con const

// let para definir variables
// Si no es un valor constante y necesitamos reasignar valor -> let
let miVar = 1;
miVar += 1;
console.log(miVar); // 2

// Dentro de los objetos se puede guardar distintos tipos de datos:
const usuario = {
  "id": 123,
  "username": "pepito"
}
const datos = {
  "usuario": usuario,
  "lista": [1, 2, 3],
  "fecha_actual": new Date().toLocaleDateString()
}
// este objeto tiene otro objeto dentro (usuario), una lista y una fecha.
// Puedo obtener las llaves del objeto de esta forma:
const keys = Object.keys(datos);
// También podemos obtener los valores del objeto:
const values = Object.values(datos);