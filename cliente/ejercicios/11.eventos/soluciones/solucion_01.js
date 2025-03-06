/*
En una página web vas a colocar un elemento tipo div con un atributo onclick()

-> vamos a colocar el event listener desde JS

para que al pulsar sobre el bloque se abra una ventana alert con el mensaje 
"Pulsaste sobre el botón". 

El bloque div deberá tener como texto "Pulsa aquí".

Al pulsar el ratón sobre el bloque saltará la ventana alert. 
El bloque div puede ser un bloque simple, o puedes aplicarle estilos CSS para 
que quede como un botón.
*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)

// seleccionamos el botón por id:
const boton = document.getElementById("mi-boton");
// añadimos el listener (oyente) de eventos:
boton.addEventListener("click", function() {
  alert("Pulsaste sobre el botón");
});
// -> function(){} sin nombre es fn anónima y se usa para definir fn donde 
// se necesita

// 2. Realizamos operaciones y bucles necesarios

// 3. Escribimos el resultado (output)
