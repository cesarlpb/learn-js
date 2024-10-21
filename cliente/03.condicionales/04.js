// Este script pide al usuario que teclee una letra entre A, B, C, D. 

// Si pulsa la letra A en mayúscula o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó.

// Guardamos la letra en una variable:
let letra = prompt("Introduce una letra:");

// Validamos si es A o a la letra introducida:
// Escribimos el mensaje en cada caso

// Modificación: vamos a permitir solamente ciertas letras: A, B, C, D
const letrasPermitidas = ["A", "B", "C", "D", "a", "b", "c", "d"];

if(letrasPermitidas.includes(letra)){
    // Ejecutamos nuestro programa
    if(letra == "A" || letra == "a"){
        alert("Has acertado!")
    } else {
        alert("Has fallado!")
    }
} else {
    // Mostramos un error
    alert("Ese caracter no es válido...")
}
