/*

Necesitas una página web con dos bloques div:

El primer bloque contiene el texto  "Pasa por aqui" y el segundo  tiene: 
"Efectos del movimiento" 

con un atributo id="efecto". 

Cuando el ratón pase por el primer bloque se llamará a la función color() que 
cambia el fondo del segundo bloque a color verde 
(backgroundColo:  green")

- Recuerda que los nodos se pueden seleccionar con getElementById(). 
- Usa estilos en linea (style)
*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
const div1 = document.getElementById("boton-1");
const div2 = document.getElementById("efecto");
let estaEnVerde = false;

function color(){
  div2.style.backgroundColor = "green";
  estaEnVerde = true;
}
function cambiarColor(event) {
  if(!estaEnVerde){
    // console.log(event) // objeto MouseEvent con información del evento
    color();
  }
}

// Nota: nos pueden valer estos eventos de ratón:
// mouseenter := cuando el cursor entra en el elemento
// mouseover  := cuando el cursor está encima del elemento
// mousemove  := cuando el cursor se desplaza en el elemento => hace muchas llamadas

div1.addEventListener("mouseenter", cambiarColor, false);

// div1.removeEventListener("mouseenter", cambiarColor, false);
// también se puede borrar el listener una vez se haya utilizado y ya no se necesite

// 2. Realizamos operaciones y bucles necesarios

// 3. Escribimos el resultado (output)
