/*

Tienes la página web modelo que debe cambiar el color del titular del negro 
actual a rojo y además debe quedar centrado. El único cambio será en el bloque 
cambiar y el código de función cambiar()

El bloque cambiar acepta el click, el color del titular cambia a rojo y queda 
centrado

*/

/******************************************************************************/

// Pasos para resolver


// 1. Declaramos variables necesarias (inputs)
const MAX_LLAMADAS_PERMITIDAS = 1;
let contadorClicks = 0;

function cambiar(){
  
  // solo se puede ejecutar una vez:
  if(contadorClicks < MAX_LLAMADAS_PERMITIDAS){
    
    /************* solución 01 ******************/
    const h1 = document.getElementById("titular");
    // append con += -> añadir al final el texto nuevo:
    h1.textContent += " con Javascript";

    /************* solución 02 ******************/
    // cambiar estilo del h1 a color rojo:
    h1.style.color = "red";
    // cambiar estilo del h1 a text-align: 'center':
    h1.style.textAlign = "center";
  }

  contadorClicks++;
}
// 2. Realizamos operaciones y bucles necesarios
// la fn cambiar se llama desde el HTML haciendo click en botón
// 3. Escribimos el resultado (output)
// se coloca el texto en el mismo h1
