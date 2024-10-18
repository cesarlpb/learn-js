/*
Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche y el número de litros consumidos. 

El script debe mostrar el consumo de combustible por kilómetro.

Un problema matemático muy simple numero de litros dividido por número de kilómetros.
*/

// Pedimos los datos iniciales:
let km = Number(prompt("Introduce km:"));
let litros = Number(prompt("Introduce litros consumidos:"));
// Realizamos el cálculo del consumo:
let consumo = litros / km;
// Escribimos el resultado en el elemento consumo:
document.getElementById("consumo").innerText += consumo + " L / km";