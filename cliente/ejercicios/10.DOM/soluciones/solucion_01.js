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

/******************************************************************************/

// Añadir interactividad en el documento HTML:

// 1. En el .html > añadir los elementos necesarios para la interactividad 
// (botones, elementos, contenedores, etc.)

// 1.5. (opcional) En el .html o en el .css > añadir estilos para identificar 
// fácilmente los elementos editados con JS a continuación 

// 2. En el script o .js > crear las funciones necesarias y conectarlas con eventos
// o con atributos de evento como "onclick()" -> probar que los eventos hacen 
// trigger (funcionan) -> Ej: si necesitamos hacer click en un botón y que llame
// a una fn, ponemos un console.log("...") para verificar

// 3. Creamos la funcionalidad que necesitamos implementar => probamos que 
// funciona siempre que sea posible

/******************************************************************************/

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
