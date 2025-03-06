/*
En esta página web debes agregar un script para asignar un manejador de eventos
(event listener) al botón button. 

Este script deberá escribir en el campo total el valor de multiplicar los otros 
dos campos.

Formulario en 03.html

La página mostrará el formulario, si se escribe 5 y 8 al pulsar sobre el botón 
de calcular  aparecerá 40 en el campo total. Coloca el script al final del body.
*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
const botonEnviar = document.getElementById("enviar");
botonEnviar.addEventListener("click", function(){
  // seleccionamos los elementos input y nos quedamos con sus valores como Number:
  const precio = document.getElementById("precio").valueAsNumber;
  const cantidad = document.getElementById("cantidad").valueAsNumber;
  // calculamos el importe total:
  const importeTotal = precio * cantidad;
  // seleccionamos el elmento donde colocamos el resultado y lo actualizamos ahí:
  const importeTotalEl = document.getElementById("total");
  importeTotalEl.value = importeTotal.toFixed(2) + " €";
  // Se puede añadir descuentos, IVA...
})

// 2. Realizamos operaciones y bucles necesarios

// 3. Escribimos el resultado (output)
