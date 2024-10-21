// Este script pide al usuario que teclee una letra entre A, B, C, D. 

// Si pulsa la letra A en mayúscula o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó.

// Guardamos la letra en una variable:
let letra = prompt("Introduce una letra:");

// Validamos si es A o a la letra introducida:
// Escribimos el mensaje en cada caso
if(letra == "A" || letra == "a"){
    alert("Has acertado!")
} else {
    alert("Has fallado!")
}