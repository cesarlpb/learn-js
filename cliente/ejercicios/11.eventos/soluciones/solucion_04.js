/*
Crea un script para que se active cuando la página se haya cargado completamente 
(evento load de window). 

Una vez cargada la página el script asignará un evento al bloque de manera que 
al entrar el ratón su fondo pase a rojo y al salir vuelva al blanco.

El script se colocará en la sección <head> de la página.

04.html

Si el script se coloca en head solo se debe ejecutar cuando el documento se haya 
cargado, por eso el  evento onload.
*/

/******************************************************************************/

let horaUnix1, horaUnix2;
let div;

// Pasos para resolver
window.addEventListener("load", function(){
  horaUnix1 = new Date().getTime();
  console.log("La página ha cargado!", "Hora Unix:", horaUnix1)
  // actualizamos aquí la diferencia porque el evento load sucede después del de 
  // DOM:
  console.log(`Hay una diferencia de: ${Math.abs(horaUnix1 - horaUnix2)} ms`);
  /*****************************************************************************/
  // Ej 04 aquí:
  div = document.getElementById("cuadro");
  div.addEventListener("mouseenter", cambiarBackgroundRojo);
  div.addEventListener("mouseleave", cambiarBackgroundBlanco);
});
window.addEventListener("DOMContentLoaded", function(){
  horaUnix2 = new Date().getTime();
  console.log("El DOM ha cargado!", "Hora Unix:", horaUnix2)
});
// También se pueden usar dos funciones anónimas en vez de definir estas dos:
function cambiarBackgroundRojo(){
  div.style.backgroundColor = "red";
}
function cambiarBackgroundBlanco(){
  div.style.backgroundColor = "white";
}
// 1. Declaramos variables necesarias (inputs)

// 2. Realizamos operaciones y bucles necesarios

// 3. Escribimos el resultado (output)
