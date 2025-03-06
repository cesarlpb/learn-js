/*

La página descrita con este código HTML posee dos bloques div cuyos atributos 
id son cX, cY. 

Debes escribir un manejador para el evento de movimiento del 
ratón por el documento. 

Este script deberá anotar en los cuadros cX y cY las 
coordenadas donde se encuentra el puntero del ratón mientras se mueve por todo 
el documento.

06.html

A medida que se mueve el ratón en los cuadros aparecerá la posición x e y del 
ratón medidas respeto a la pantalla (screen) del navegador, o sea, cX distancia 
horizontal a la esquina superior izquierda y cY distancia vertical a la esquina 
superio derecha

*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
const cX = document.getElementById("cX");
const cY = document.getElementById("cY");

document.addEventListener("mousemove", actualizarCoordenadas);
function actualizarCoordenadas(event){
  // console.log("X:", event.clientX, "px");
  // console.log("Y:", event.clientY, "px");
  cX.value = event.clientX;
  cY.value = event.clientY;
}
// 2. Realizamos operaciones y bucles necesarios

// 3. Escribimos el resultado (output)
