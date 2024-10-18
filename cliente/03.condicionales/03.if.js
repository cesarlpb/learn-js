// En este ejercicio debes pedir dos números enteros y devolver el cociente de dividir el primero entre el segundo, pero si este es cero no debe hacer la división, sino lanzar un mensaje de error

let num1 = Number(prompt("Introduce el primer número:"));
let num2 = Number(prompt("Introduce el segundo número:"));
// Vamos a calcular num1 / num2
// Para que la operación esté definida num2 no puede ser cero
if(num2 != 0){
    alert("El cociente es: " + num1 / num2 );
} else {
    alert("El segundo número no puede ser cero 😿")
}
