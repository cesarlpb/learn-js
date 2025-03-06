/*

En esta página tienes dos bloques div a modo de botones, como ves en este código 
HTML de abajo. 

Debes escribir una única función Javascript (llamada pulsar() ) para 
manejar los eventos click de ambos botones. 

Cuando pulses con el ratón en cualquier botón deberá aparecer una ventana alert 
indicando el id del botón donde se ha pulsado.

05.html

Debes usar el objeto event para este ejercicio. Coloca el script al final de la 
página.
*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)

// Seleccionamos los elementos:
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
// Colocamos los listeners de click:
boton1.addEventListener("click", pulsar);
boton2.addEventListener("click", pulsar);
// Definimos la fn pulsar que recibe el parámetro "comodín" event que tiene
// información del evento que se ha registrado
function pulsar(event) {
  alert(event.target.id); // dentro de target hay información del elemento del 
                          // DOM que genera el evento
}
// 2. Realizamos operaciones y bucles necesarios

// 3. Escribimos el resultado (output)
