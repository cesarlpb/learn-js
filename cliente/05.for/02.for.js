// Se trata de que dado un número entero el script muestre una cuenta atrás, es decir, una lista de numeros separados por comas desde el número tecleado hasta el 0.

// inputs
// declaramos las variables que necesitamos

let int = 0, list = ""; // entero y string para el mensaje de salida
int = parseInt(prompt("Introduce un número entero:"));

// bucle for
for(let contador = int; contador >= 0; contador--){
    list += `${contador}, `;
}

// variante: se puede colocar un if para evitar añadir los caractes ", " en la última iteración así nos ahorraríamos el slice o podrías ahorrarte el if haciendo append después del bucle

// TODO: verificar que el número sea positivo, sino la lógica anterior no funciona

// outputs
    // cortamos los últimos dos caracteres para no acabar la lista con ", "
alert(list.slice(0, list.length - 2));