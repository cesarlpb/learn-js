// En este script vas a crear un menu con tres opciones: escribir, leer, salir. El usuario elegirá una opción y en un alert se le indicará la opción elegida. El programa vuelve a mostrar el menu y se repite el proceso. El script acabará cuando se pulse la opción de salir.

let opcion = "";

do {
    opcion = prompt("Elige una opción:\n-escribir\n-leer\n-salir");
} while(opcion != "salir")

alert("Fin del programa");