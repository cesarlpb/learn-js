/*

Escribe un script de nombre creaDiv() que crea un nuevo bloque div en la página 
modelo. 

El bloque se creará al pulsar el botón con texto Crear, sus colores serán texto 
blanco con fondo rojo y el texto quedará centrado. 

Este texto consiste en la cadena: "Javascript permite crear páginas dinámicas".
El botón ya existe solo es necesario escribir la función, procurando usar los 
métodos de document para crear nodos.

*/

/******************************************************************************/

// Pasos para resolver


// 1. Declaramos variables necesarias (inputs)
const MAX_LLAMADAS_PERMITIDAS = 1;
let contadorClicks = 0;
const MAX_DIVS_PERMITIDOS = 6;
let contadorDivs = 0;

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
function crearDiv(){
  if(contadorDivs < MAX_DIVS_PERMITIDOS){
      // crear obj div
    const contenedor = document.getElementById("contenedor");
    contenedor.style.display = "flex";
    contenedor.style.flexDirection = "column";
    contenedor.style.justifyContent = "center";
    contenedor.style.alignItems = "center";
    contenedor.style.flexWrap = "wrap";
    contenedor.style.maxHeight = "80vh";
    // tomar objeto parent para insertar div
    const nuevoDiv = document.createElement("div"); // crea nuevo div como obj
    // texto:
    const nuevoP = document.createElement("p"); // párrafo para el texto
    nuevoP.textContent = `Tarjeta ${contadorDivs}: Javascript permite crear páginas dinámicas 🧑🏽‍🚀`;
    nuevoDiv.appendChild(nuevoP);
    // estilos:
    nuevoDiv.style.color = "white";
    nuevoDiv.style.backgroundColor = "tomato"; // variante de rojo
    nuevoDiv.style.textAlign = "center";
    
    nuevoDiv.style.width = "250px";
    nuevoDiv.style.minHeight = "10rem";
    nuevoDiv.style.borderRadius = "10px";
    nuevoDiv.style.marginBottom = "0.5em";

    nuevoDiv.style.display = "flex";
    nuevoDiv.style.justifyContent = "center";
    nuevoDiv.style.alignItems = "center";

    // insertar el div creado en parent
    console.log(nuevoDiv);
    contenedor.appendChild(nuevoDiv);

    contadorDivs++;
  }
}
// 2. Realizamos operaciones y bucles necesarios
// la fn cambiar se llama desde el HTML haciendo click en botón
// 3. Escribimos el resultado (output)
// se coloca el texto en el mismo elemento
