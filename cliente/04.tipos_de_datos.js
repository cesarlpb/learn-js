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

