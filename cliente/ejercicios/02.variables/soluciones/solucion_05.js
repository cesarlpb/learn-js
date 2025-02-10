/*

Escribe un programa que solicite al usuario ingresar el número de kilómetros 
recorridos por su coche y el número de litros consumidos. 
El script debe mostrar el consumo de combustible por kilómetro.

Un problema matemático """muy simple""" número de litros dividido 
por número de kilómetros.

inputs: km, litros        => numbers
output: consumo en L / km => number
*/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let km, litros; // undefined
km = prompt("¿Cuántos km has recorrido?");
litros = prompt("¿Cuántos L has gastado?");
// 2. Realizamos operaciones necesarias
km = Number(km);
litros = Number(litros);
consumo = litros / km;
console.log(km, litros, consumo);
// 3. Escribimos el resultado (output)
alert("Se han consumido: " + consumo + " L / km");
