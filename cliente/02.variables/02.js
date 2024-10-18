/*
En una variable tienes el lado de un cuadrado, 
debes escribir un programa que te calcule el área y el perímetro del cuadrado.

El area la calculas como lado multiplicado por lado. 
El perímetro es la suma de los cuatro lados.
*/

// Pedimos un dato al usuario y convertimos el dato en number:
let lado = Number(prompt("Introduce el lado del cuadrado:"));
// Calculamos el área y el perímetro:
let area = lado * lado;
let perimetro = 4 * lado;
// Escribimos los resultados:
console.log("El área es: " + area);
console.log("El perímetro es: " + perimetro);