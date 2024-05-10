/*
Cambio de unidades. 
En este ejercicio debes convertir a segundos 
una medida de tiempo dada en horas y minutos.

Recuerda una hora son 60 minutos y cada minuto son 60 segundos.

inputs: horas, minutos
output: segundos

Ejemplo:

hh mm -> 1 45
1 * 3600 + 45 * 60
segundos

*/

console.log("--- Ejercicio 06 ---");

// Pedimos datos al usuario:
let horas = Number(prompt("Introduce el número de horas a convertir:"));
let minutos = Number(prompt("Introduce los minutos a convertir:"));

// Comprobamos que los números los recibimos bien:
// console.log(horas, minutos);

let segundos = horas * 3600 + minutos * 60;
alert("Los segundos son: " + segundos);

console.log("La respuesta sale por alert()");