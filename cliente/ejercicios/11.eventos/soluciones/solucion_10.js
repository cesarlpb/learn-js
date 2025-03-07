/*
En este input no se deben aceptar valores que sean numéricos. Todo lo que esté 
entre 0 y 9 no se deben aceptar. Diseña un manejador de eventos para evitar que 
en el control se anoten números.

10.html 

Al pulsar una tecla numérica debe interrumpirse el flujo normal predefinido del 
input para no admitir la tecla pulsada.
*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let prev = ""
const input = document.addEventListener("input", function(event){
  let valorActual = event.target.value;
  if(!prev){
    prev = valorActual;
  } 
  
  let nuevoChar = valorActual[valorActual.length - 1];
  if(!Number.isNaN(Number(nuevoChar))){
    event.target.value = prev;
  }

  console.log(prev, valorActual)
  prev = event.target.value;
});

// ¿Cómo se puede extender para una lista de caracteres que no permitimos en el 
// input? ( Usando un array de caracteres no permitidos )

// 2. Realizamos operaciones y bucles necesarios

// 3. Escribimos el resultado (output)
