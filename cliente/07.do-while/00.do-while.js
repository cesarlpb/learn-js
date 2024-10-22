// do while

// Te garantiza 1 iteración

// aparte de eso, similar al while

let num = -1; 
do {
    console.log("do while:", num); 
} while(num > 0); // false

// Solo una iteración o al menos una
do {
    console.log("Hago esto una sola vez en la vida"); 
} while(false);

// No te garantiza una ejecución´
    // Evalua la condición primero y como es false no ejecuta el bloque
while(false) {
    console.log("No hago esto una sola vez en la vida"); 
}

// caso similar al while:
num = 10;
do {
    console.log("Cuentra atrás:", num)
    num = num - 1;
} while(num > 0)