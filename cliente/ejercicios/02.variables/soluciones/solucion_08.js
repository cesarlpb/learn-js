/* 
Una tortilla de patatas lleva 200 gramos de patatas por persona. 
Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. 

Escribe un script que dado el número de comensales calcule las cantidades de 
ingredientes necesarias.

input:   comensales -> number
outputs: ingredientes -> gramosPatatas, gramosCebolla, huevos -> numbers

2 comensales

2 * 200 gramos = 400 gramos de patatas
kgPatatas = gramosPatatas / 1000 -> float -> number

huevos = kgPatatas * 5 -> int -> number
Podemos usar Math.ceil() o round para redondear a entero el número de huevos
0.4 * 5 = 2

gramosCebollas = 300 * kgPatatas
300 * 0.4 = 120 g

2 => 400, 2, 120

*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let comensales = prompt("¿Cuántas personas comerán tortilla?");
comensales = Number.parseInt(comensales); // nos aseguramos de que es un entero

let gramosPatatas = 0, gramosCebolla = 0, huevos = 0;
let kgPatatas = 0;

/* Constantes: */
// Ventaja: si necesitases cambiar las proporciones en el futuro lo puedes hacer
// editando SOLO estas constantes:

const MIL = 1_000;
const GRAMOS_PATATAS_POR_COMENSAL = 200;
const GRAMOS_CEBOLLA_KG_PATATA    = 300;
const HUEVOS_POR_KG_PATATA        = 5; 

// 2. Realizamos operaciones necesarias
gramosPatatas = GRAMOS_PATATAS_POR_COMENSAL * comensales;
kgPatatas     = gramosPatatas / MIL;
huevos        = Math.ceil(kgPatatas * HUEVOS_POR_KG_PATATA);
gramosCebolla = GRAMOS_CEBOLLA_KG_PATATA * kgPatatas;
// 3. Escribimos el resultado (output)
console.log(`
  Receta de tortilla:
  Comensales: ${comensales}
  - Patatas (g): ${gramosPatatas}
  - Huevos: ${huevos}
  - Cebolla (g): ${gramosCebolla}
  `);