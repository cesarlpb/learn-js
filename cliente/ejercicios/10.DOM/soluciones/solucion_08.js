/*

Escribe el código de una función nuevoBloque() que deberá crear un nuevo 
elemento div, con una class de nombre "destacar". 

El bloque contendrá, en  negrita, el texto "Página Modelo". 

Este bloque debe aparecer justo antes del bloque subtitulo es decir justo 
después del titular de la página. 

Se activará con el botón superior que contiene el texto Subtítulo

La función se llamara intercalar()

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
let contadorNodosIntercalados = 0;

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
// Ej 05: poner pies de foto
function ponerPie(fig){
  // console.log(fig) // debug
  const figure = fig; // es el elemento que llama a la fn
  /**
   * <figure>
   *  <img .. alt="">
   *  <figcaption>{{aqui va el texto que queremos mostrar}}</figcaption>
   * </figure>
   */
  // seleccionamos la imagen de dentro:
  const img = figure.querySelector("img"); // admite selectores de etiqueta, clase, id...
  const altText = img.alt; // leemos el valor del atributo alt de la etiqueta img
  const figcaption = figure.querySelector("figcaption");
  
  let figcaptionVacio = figcaption.textContent.length > 0 ? false : true;

  // si no hay contenido => colocamos el altText de la img
  // si hay contenido => vaciamos el figcaption => "se resetea al estado inicial"
  if(figcaptionVacio){
    figcaption.textContent = altText;
  } else {
    figcaption.textContent = "";
  }
}
// Ej 06: mostrar fuentes de imgs
function fuentesImg(){
  const div = document.getElementById("fuentes");
  let msj = "<h2>Fuentes de las imágenes de la página</h2>";
  // conseguir todas las etiquetas img
  const imgs = document.querySelectorAll("img");
  // iteramos el array y colocamos las fuentes en un string
  for(const img of imgs){
    msj += "<p>" + img.src + "</p>"; // creamos p como string concatenado
  }
  // añadimos el string en el div
  div.innerHTML = msj;
} 
// Ej 07: toggle de clase en titular
function toggleClase(){
  // seleccionamos el titular
  const h1 = document.getElementById("titular");
  // alternamos la clase "activo":
  const clasesTitular = h1.classList; // array con las clases en el elemento
  let activoEnLista = clasesTitular.contains("activo"); // usamos el método de array
  // contains para comprobar si la lista de clases "contiene" el valor "activo"
  if(activoEnLista){
    h1.classList.remove("activo"); // se quita la clase
  } else {
    h1.classList.add("activo"); // se añade la clase
  }
}
// Ejercicio 08: intercalar elemento entre otros elementos

// usamos el API de insertBefore() en JS, también se puede resolver usando
// el API más general insertAdjacentElement(), más info:
// insertBefore: https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
// insertAdjacentElement: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

// También se podría resolver este problema tomando como string todo el body, 
// buscando la posición de cierre del </h1> y colocando después el elemento...
// se puede añadir lo nuevo con innerHtml

function intercalar(){
  if(contadorNodosIntercalados < 1) {
  // seleccionamos el elemento de referencia que será el posterior al punto de 
  // inserción => el div#subtitulo
  const ref = document.getElementById("subtitulo");
  const parent = ref.parentElement; // conseguimos el elemento padre del div

  const nuevoDiv = document.createElement("div"); // creamos nuevo div
  nuevoDiv.classList.add("destacar"); // añadimos clase destacar
  const bold = document.createElement("b"); // etiqueta negritas
  bold.textContent = "Página Modelo"; // añadimos el texto
  nuevoDiv.appendChild(bold); // colocamos el bloque bold en el div
  // colocamos el div completo antes de div#subtitulo:
  parent.insertBefore(nuevoDiv, ref);
  } else {
    console.warn(`Se han creado los nodos máximos permitidos, 
      número de llamadas: ${contadorNodosIntercalados}`)
  }
  contadorNodosIntercalados++;
}
// 2. Realizamos operaciones y bucles necesarios
// la fn cambiar se llama desde el HTML haciendo click en botón
// 3. Escribimos el resultado (output)
// se coloca el texto en el mismo elemento
