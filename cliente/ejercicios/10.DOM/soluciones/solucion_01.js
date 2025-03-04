/*
En la página web modelo ves que tienes un titular Hola Mundo. 

Se trata de añadir una función javascript para que al pulsar el botón cambiar 
este título se convierta en "Hola Mundo con Javascript". 

El único cambio necesario es el bloque con el texto cambiar y completar la 
función cambiar() que aparece en el código de la página.

Debe cambiar de Hola Mundo a Hola Mundo con Javascript
*/

/******************************************************************************/

// Pasos para resolver


// 1. Declaramos variables necesarias (inputs)
const MAX_LLAMADAS_PERMITIDAS = 1;
let contadorClicks = 0;

function cambiar(){
  
  if(contadorClicks < MAX_LLAMADAS_PERMITIDAS){
    const h1 = document.getElementById("titular");
    // append con += -> añadir al final el texto nuevo:
    h1.textContent += " con Javascript";
  }

  contadorClicks++;
}
// 2. Realizamos operaciones y bucles necesarios
// la fn cambiar se llama desde el HTML haciendo click en botón
// 3. Escribimos el resultado (output)
// se coloca el texto en el mismo h1
