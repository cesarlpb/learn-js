/*
Cambio de unidades. En este ejercicio debes convertir a segundos 
una medida de tiempo dada en horas y minutos.

Recuerda una hora son 60 minutos y cada minuto son 60 segundos.

1 hora = 60*60 = 3600 s
1 min  = 60 s

inputs: hora, minutos => numbers
output: segundos      => number

Ejemplo:
1h 45min

1 * 3600 = 3600
45 * 60  = 2700
segundos = 6300 s

*/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)

/*
 * siempre que podamos, declaramos variables con valores iniciales del tipo
 * de dato que vayamos a usa en cada variable: 
 * 'number' -> 0 o 0.0
 * 'string' -> ""
 * 'boolean'-> true o false (preferido)
 * 
 * Al final, como el valor se puede cambiar, "da igual" el dato inicial
 * a menos que lo necesitemos usar antes de actualizar el valor de la variable
 */

let horas    = 0; // input
let minutos  = 0; // input
let segundos = 0; // output

console.log(horas, minutos); // 0 0

// Pedimos los datos al usuario:
/**
 * Convertimos lo que nos llega del prompt() en tipo numérico inmediatamente:
 */
horas   = Number(prompt("Introduce el número de horas:"));
minutos = Number(prompt("Introduce el número de minutos:"));

console.log(horas, minutos); // sale NaN si los datos no son números válidos

// 2. Realizamos operaciones necesarias
segundos = 3_600 * horas + 60 * minutos;
// 3. Escribimos el resultado (output)
console.log(segundos, "segundos");
