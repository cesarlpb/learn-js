/**
 * En este caso, también usando el operador ternario o if reducido, un visitante 
 * a la página deberá teclear su edad, si es igual o mayor de 18 recibirá el 
 * mensaje de "Entra" en caso contario deberá decirle los años que tiene que 
 * esperar para entrar
 */

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let edad = Number.parseInt(prompt("¿Cuántos años tienes?"));
// 2. Realizamos operaciones y bucles necesarios
// Método 1: if-else
let msj = "";
if(edad >= 18){
  msj = "✅ Enhorabuena, puedes entrar.";
} else {
  msj = "❌ No puedes entrar. Reinicia.";
}
// 3. Escribimos el resultado (output)
// Método 1:
console.log(msj);
// Método 2:
console.log(edad >= 18 ? "🎉 Puedes pasar" : "☹️ No puedes pasar");

// 4. Pruebas
// edad > 18
// edad = 18
// edad < 18