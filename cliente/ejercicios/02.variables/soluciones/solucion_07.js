/*
En este script debes pedir al usuario un número de dos dígitos y debes devolver 
el número de unidades y de decenas, o sea, cada dígito del número. 

Usa solo operaciones aritméticas.

Recuerda si divides un número entre 10 el cociente entero es
el número de decenas y el resto es el número de unidades.

input:  número de dos dígitos entre 10 y 99 -> entero -> number
output: decenas, unidades -> enteros -> numbers

Ejemplo:

54
d = 5 -> 54 / 10 -> parte entera de 5.4 es 5
54 - 5 * 10 = 4
decenas -> 5
unidades -> 4

*************
Alternativa:

Si sabes que son SOLO dos unidades
se puede devolver el primer dígito como decenas
y el segundo como unidades

Es una solución que solo tiene sentido si los números
van del 00 al 99

*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let num = prompt("Introduce un número de dos dígitos:");
num = Number(num);
let decenas = 0;
let unidades = 0;

// 2. Realizamos operaciones necesarias
decenas = Number.parseInt(num / 10); // nos quedamos con la parte entera
/* Alternativa: Math.floor(num / 10) redondea el número a la baja */
unidades = num - decenas * 10; // calculamos las unidades

// 3. Escribimos el resultado (output)
console.log(`El número ${num} tiene ${decenas} decenas y ${unidades} unidades`)
