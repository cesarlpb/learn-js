/**
 * Un programa que pida un número y diga si es positivo o negativo. 
 * 
 * El cero se considera positivo ?
 * 
 * Ejemplo:
 * 
 * 1  -> positivo
 * -1 -> negativo
 * 
 * 'a' -> error
 * [], {} -> error
 * 
 */

// Esta vez validamos el tipo de dato:

function main(){
  let num = Number(prompt("Ingresa un número:"));
  let mensaje = "";
  if (Number.isNaN(num) || typeof(num) != 'number'){
    // A veces, se añade esta condición: num == null
    console.error("El dato no es un número");
  } else {
    // si he recibido número
    if (num >= 0){
      mensaje = "El número es positivo o cero";
      console.log(`%c ${mensaje} `, 'background: #000; color: #bada55');
    } else {
      mensaje = "El número es negativo";
      console.log(`%c ${mensaje} ` , 'background: #000; color: #ff0000');
    }
    
    // Seleccionamos el <p> por id y lo guardamos en una variable:
    const el = document.getElementById("ej02"); // <p>
    el ? el.innerText = mensaje : alert(mensaje); 

  }
  // console.log con colores 👀
}