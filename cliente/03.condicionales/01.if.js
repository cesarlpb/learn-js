/*
Se trata de escribir un script que diga si un número es par o es impar.

Recordemos que un número es par si al dividirlo por 2 da como resto 0.
*/
// Pedimos número y redondeamos a entero:
let num = parseInt(prompt("Introduce un número:"));
// Determinamos si el número es par o impar
// Si el operador módulo me devuelve 0 -> división exacta -> es par
let resto = num % 2;
if(resto == 0){
    alert("Es paaaaar")
}
// En caso contrario, es impar
else {
    alert("Es impar")
}