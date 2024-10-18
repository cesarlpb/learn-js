/*
Un poco de interactividad. En este ejercicio debes escribir un programa 
que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.

Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"
*/

// Pedimos el nombre del usuario:
let nombre = prompt("Introduce tu nombre:");
// Creamos el mensaje para saludar:
let mensaje = "Hola, " + nombre;
// Usamos alert para presentar el mensaje:
// alert(mensaje);
// Actualizamos el dato en la página en un <p>:
document.getElementById("saludo").innerText = mensaje;