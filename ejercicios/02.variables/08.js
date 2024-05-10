/*
Una tortilla de patatas lleva 200 gramos de patatas por persona.
Por cada kilo de patatas se necesitan 5 huevos y 
300 gramos de cebolla. 

Escribe un script que dado el número de comensales calcule 
las cantidades de ingredientes necesarias

input: comensales (número de personas)
output: ingrediente -> gramosPatatas, huevos, gramosCebolla

Ejemplo:

1 comensal

g Patatas => 200
huevos    => 200 / 1000 = 0.2 => 0.2 * 5 = 1
g cebolla => 200 / 1000 = 0.2 => 0.2 * 300 = 60

*/

console.log("--- Ejercicio 08 ---");

const GRAMOS_PATATAS_PERSONA = 200;
const HUEVOS_KG_PATATAS = 5;
const GRAMOS_CEBOLLA_KG_PATATA = 300;

let comensales = Number.parseInt(prompt("Introduce el número de comensales:"));
console.log("Comensales:", comensales);

let gramosPatatas = GRAMOS_PATATAS_PERSONA * comensales; // gramos de patatas
let kgPatatas = gramosPatatas / 1000; // es un número que si puede tener decimales

console.log("gramos y kg de patatas:", gramosPatatas, kgPatatas)

let huevos = kgPatatas * HUEVOS_KG_PATATAS;
let gramosCebolla = kgPatatas * GRAMOS_CEBOLLA_KG_PATATA;

console.log(gramosPatatas, huevos, gramosCebolla)

// Definimos los strings (cadenas de texto) con variables que sustituye JS
// que vamos a colocar en el documento HTML:
let input = `Para ${comensales} comensales se necesitan:`;
let output = `<ul>
                <li>${gramosPatatas} g de patatas</li>
                <li>${huevos} huevos</li>
                <li>${gramosCebolla} g de cebolla</li>
              </ul>`;

// Introducimos los valores de esos strings en los elementos del documento HTML:
document.getElementById("ej-8-input").innerText = input;
document.getElementById("ej-8-output").innerHTML = output;