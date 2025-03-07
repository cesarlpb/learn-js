/*
En esta página existen tres bloques ocultos. Debes crear un evento de teclado para 
que actúe cuando el usuario pulsa una tecla. 

Si pulsa la tecla 1 se abre el bloque con id ficha1, 
si pulsa 2 se abre el bloque ficha2 y con 3 se abre el de ficha3.

08.html 

Los bloques no se ven hasta que se pulsa la tecla de cada uno. 
Solo hay un bloque visible cada vez. Puedes usar las clases definidas y el 
objeto classList.

*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)

/**
 * 
 * Eventos de teclado
 * - keydown:= cuando se presiona la tecla
 * - keyup:= cuando se libera la tecla
 * Más info: https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
 * 
 */

const div1 = document.getElementById("ficha1");
const div2 = document.getElementById("ficha2");
const div3 = document.getElementById("ficha3");

const fichas = [div1, div2, div3];

document.addEventListener("keydown", function(event){
  // comprobar si la tecla es 1
  const tecla = event.key; // "1", "2", "3"
  switch(tecla){
    case "1":
      activarFicha(div1);
      break;
    case "2":
      activarFicha(div2);
      break;
    case "3":
      activarFicha(div3);
      break;
  }
});

// toggle de la clase activo en ficha 1, 2, o 3
function activarFicha(elemento){
  // mostramos el div indicado:
  elemento.classList.replace("oculto", "visible")
  // Elegimos iterar con for of porque no es importante o necesario el índice
  for(const div of fichas){
    if(div != elemento){
      div.classList.remove("visible");
      div.classList.add("oculto");
    }
  }
}

// 2. Realizamos operaciones y bucles necesarios

// 3. Escribimos el resultado (output)
