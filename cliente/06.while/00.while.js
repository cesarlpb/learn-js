// while -> mientras

// se evalua una condición y mientras sea verdadera (true) se repite la ejecución del bloque de código

// Advertencia: si la condición nunca da false -> el programa no termina (podría ser lo que quieras hacer, o no)

// bucle while

// bucle infinito:
while(true){
    console.log("Esto ocupará toda la memoria de tu navegador"); 
}

// contador hasta 10:
let num = 0; // variable que nos hace de contador
while(num < 10){
    console.log("Contador:", num);
    num = num + 1; // num vale 10 al final del bucle
}
console.log("num al final:", num) // num sigue valiendo 10
