// Este script usará un bucle do while para determinar si un número es primo o no. El numero tecleado deberá estar entre 0 y 100. Si es primo lo mostrará en una ventana alert.

// Número primo: solo es divisible entre sí mismo o la unidad
// Ejemplo: 2 -> divisores: 1, 2
// 7 -> divisores: 1, 7
// 10 no es primo -> 1, 2, 5, 10

// inputs
let num = 0;
num = parseInt(prompt("Introduce un número del 1 al 100 para ver si es primo:"))
// verificar si el número está en rango
let elNumEstaEnRango = false;
// evaluamos la condición para ver si el num está entre 1 y 100 incluyendo extremos:
elNumEstaEnRango = num >= 1 && num <= 100; // true o false

let esPrimo = true;
let contador = 2;

// en caso de que esté en rango, ejecutamos el programa
if (num == 1 || num == 2){
    alert(num + " es primo")
}
else if(elNumEstaEnRango){
    // do while
    do {
        let resto = num % contador // división es exacta => no es primo

        console.group("iteración:")
            console.log("contador:", contador);
            console.log("resto:", resto);
        console.groupEnd();

        if (resto == 0){
            esPrimo = false;
            break;
        }
        contador = contador + 1;
    } while (contador < num);
} else {
    alert("El número no está en rango")
}
// outputs
if(esPrimo && contador == num){
    alert(num + " es primo")
}