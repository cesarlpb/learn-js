// Se trata de pedir al usuario que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número

// inputs
let input = 0; // entrada por teclado
input = parseInt(prompt("Introduce un número entero entre 1 y 5:"));
// bucle while
while(input < 1 || input > 5){
    input = parseInt(prompt("Debes introducir un número entero entre 1 y 5:"));
}

// outputs
alert("Número introducido por teclado: " + input)