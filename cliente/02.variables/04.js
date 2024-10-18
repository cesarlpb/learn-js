/*
En este ejercicio vas a pedir al usuario que teclee tres números enteros 
y el script mostrará como resultado el valor medio de los tres.

Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.
*/
// Pedimos los tres números:
let num1 = Number(prompt("Introduce primer número:"));
let num2 = Number(prompt("Introduce segundo número:"));
let num3 = Number(prompt("Introduce tercer número:"));
// Calculamos la media:
let media = (num1 + num2 + num3) / 3;
// Añadimos texto (append) con el valor de la variable media:
document.getElementById("media").innerText += media;