/*

En una variable tienes el lado de un cuadrado, 
debes escribir un programa que te calcule el 
área y el perímetro del cuadrado.

lado      -> área = lado * lado
perímetro -> P = lado + lado + lado +lado = 4 * lado

- El área la calculas como lado multiplicado por lado. 
- El perímetro es la suma de los cuatro lados.

inputs  -> numbers
outputs -> numbers

Ej: 

Lado: 10
Área: 10*10 = 100
Perímetro: 4*10 = 40

*/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let lado = 10;
console.log(lado); // -> comprobamos que el dato es correcto
// 2. Realizamos operaciones necesarias
let area      = lado * lado
let perimetro = 4 * lado
// 3. Escribimos el resultado (output)
console.log(area, perimetro) // -> escribimos resultado en consola
