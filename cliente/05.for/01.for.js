// Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.  

// inputs
// declaramos las variables que necesitamos

let int = 0, list = ""; // entero y string para el mensaje de salida
int = parseInt(prompt("Introduce un número entero:"));

// bucle for
for(let contador = 0; contador <= int; contador++){
    list += `${contador}, `;
}

// variante: se puede colocar un if para evitar añadir los caractes ", " en la última iteración así nos ahorraríamos el slice o podrías ahorrarte el if haciendo append después del bucle

// outputs
    // cortamos los últimos dos caracteres para no acabar la lista con ", "
alert(list.slice(0, list.length - 2));