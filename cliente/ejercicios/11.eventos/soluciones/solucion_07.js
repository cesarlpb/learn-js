/*

En la página que puedes construir con este código HTML tienes tres bloques: uno 
de color rojo otro de color blanco y otro de color azul. 

- Crea un script para que cuando el ratón se mueva desde el bloque rojo al central 
éste se pongo rojo. 

- Si se mueve desde el azul al central, éste se pondrá azul. 

- Si entra en el bloque desde otro sitio el bloque recuperará el color blanco.

07.html

- Usa el objeto evento pasado como argumento. 
- Lee y pon los colores usando style.background. 
- El script lo que hace es que al entrar en el bloque central arrastra el color 
del bloque por el que pasa.
*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
const div1 = document.getElementById("c1");
const div2 = document.getElementById("c2");
const div3 = document.getElementById("c3");
const body = document.getElementsByTagName("body")[0];

div2.addEventListener("mouseenter", function(event){
  // Existen dos campos importantes en event:
  // currentTarget -> el elemento actual o target => el actual
  // relatedTarget -> el elemento con el que se ha interactuado anteriormente
  const origenId = event.relatedTarget.id;
  
  // el cursor viene del div rojo:
  if(origenId == "c1"){ 
    div2.style.backgroundColor = "red"; 
  }
  // el cursor viene del div azul:
  else if(origenId == "c3"){ 
    div2.style.backgroundColor = "blue"; 
  }
  // no viene del rojo ni del azul => viene del body:
  else { 
    div2.style.backgroundColor = "white"; 
  }
  
});

// 2. Realizamos operaciones y bucles necesarios

// 3. Escribimos el resultado (output)
