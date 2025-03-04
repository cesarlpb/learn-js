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
const MAX_DIVS_PERMITIDOS = 6;
let contadorDivs = 0;

// Ejercicios 01 y 02
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
// Ejercicio 03
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
    // console.log(nuevoDiv); // debug
    contenedor.appendChild(nuevoDiv);

    // colocamos un id a cada nuevo div:
    nuevoDiv.id = `div-${contadorDivs}`
    
    // Podemos añadir un botón para borrar este elemento
    // usamos otro div o un span... para hacer un botón dentro del div
    // <div id=`boton-borrado-${id}` onclick="borrar(this)">🗑️ Borrar</div>
    // usando this, podemos pasar el mismo obj por referencia a la fn de borrado
    // TODO 05.03.2025

    contadorDivs++;
  }
}
// Ejercicio 04 
function borrarDiv(){
  // seleccionamos el elementos a borrar
  let elemento = document.getElementById("subtitulo"); // me devuelve el elemento o null
  //
  // borramos el elemento solo si no es null para evitar el error 
  // Uncaught TypeError: Cannot read properties of null (reading 'remove')
  //
  if(elemento){
    // este bloque se ejecuta SI (:= si y solo si) el elemento está en el DOM
    elemento.remove(); // borra el elemento del DOM  
  }
}
// ¿Cómo podemos borrar los bloques dinámicos del ejercicio 03?

// Añadimos un id a cada div desde la fn crearDiv()
function borrarDivPorId(){
  // pedimos el id por prompt
  let id = prompt("Indica el id del div a borrar:");
  // buscamos el div en el DOM
  let el = document.getElementById(id);
  // si encontramos el div, borramos el elemento:
  if(el){
    el.remove();
  } else {
    console.error(`❌ El id ${id} no es correcto.`);
  }
}

// 2. Realizamos operaciones y bucles necesarios
// la fn cambiar se llama desde el HTML haciendo click en botón
// 3. Escribimos el resultado (output)
// se coloca el texto en el mismo elemento
