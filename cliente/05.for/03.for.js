// Se quiere un bucle que genere una lista con todos los números pares positivos por debajo del número tecleado por el usuario. Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n')

// inputs
// declaramos las variables que necesitamos

let int = 0, list = ""; // entero y string para el mensaje de salida
int = parseInt(prompt("Introduce un número entero:"));

// bucle for
for(let contador = 0; contador <= int; contador+=2){
    list += `${contador}\n`;
}

// variante: se puede colocar un if para evitar añadir los caractes ", " en la última iteración así nos ahorraríamos el slice o podrías ahorrarte el if haciendo append después del bucle

// outputs
alert(list);