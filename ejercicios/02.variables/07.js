/*
En este script debes pedir al usuario un número de dos dígitos 
y debes devolver el número de unidades y de decenas, o sea, 
cada dígito del número. 

Usa solo operationes aritméticas

Recuerda si divides un número entre 10 el cociente entero 
es el número de decenas y el resto es el número de unidades

input: número de dos dígitos
outputs: decenas, unidades

Ejemplo:

input: 78 

decenas -> 78 / 10 -> parte entera -> parseInt(7.8) => 7
unidades -> 78 - decenas * 10 = 8

outputs:

decenas = 7
unidades = 8

*/

console.log("--- Ejercicio 07 ---");

// Usamos parseInt() para que el número sea entero (sin decimales):
let num = Number.parseInt(prompt("Introduce un número entre 10 y 99:"));
// Redondear a entero las decenas antes de calcular unidades:
let decenas = Number.parseInt(num / 10);
let unidades = num - 10 * decenas;

console.log(num, decenas, unidades);

// Colocamos los datos en elementos del documento HTML:
document.getElementById("ej-7-input").innerText = `Número: ${num}`;
document.getElementById("ej-7-outputs").innerText = `Decenas: ${decenas}, unidades: ${unidades}`;
