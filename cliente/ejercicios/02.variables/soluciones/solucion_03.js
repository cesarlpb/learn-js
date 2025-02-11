/*

Un poco de interactividad. En este ejercicio debes escribir 
un programa que lea el nombre del usuario y salude con un 
"Hola" seguido del nombre del usuario.

Para leer el nombre usa un prompt() con un texto indicativo 
como "Escribe tu nombre"

input:  nombre -> "Pepe"        -> string
output: mensaje -> "Hola, Pepe" -> string

*/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)

/* 
 * prompt() es una función que viene disponible en Javascript en el navegador
 * Sirve para recibir datos del usuario en formato texto -> es posible que debamos 
 * convertir el input a otro formato (ej: number) en algunos casos 
*/
let nombre = prompt("¿Cómo te llamas?"); // usamos prompt del navegador
// 2. Realizamos operaciones necesarias
let saludo = "Hola, " + nombre;
// 3. Escribimos el resultado (output)

/*
 * alert() es otra función en Javascript disponible en el navegador
 * Muestra una caja con el mensaje que le pasemos y hay un botón para cerrar la caja 
 */
alert(saludo); // -> imprime el saludo en una caja en el navegador
