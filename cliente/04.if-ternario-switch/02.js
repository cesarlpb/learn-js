// El usuario debe entrar un número y su cuadrado. Si es correcto el script enviará un mensaje de acierto, en caso contrario, dirá que se produjo un error.

// ejemplo: 
// a = 3 y b = 9

// Se trata de usar el if resumido (cond?true:false)

// inputs
let numero = Number(prompt("Introduce un número:"));
let cuadrado = Number(prompt("Introduce el cuadrado del número anterior:"));
let cuadradoCorrecto = numero ** 2;
let mensaje = "";
// main

    // if-else
    // if (cuadrado === cuadradoCorrecto){
    //     mensaje = "Es correcto!";
    // } else {
    //     mensaje = "No es correcto :(";
    // }

    // ternario
    cuadrado === cuadradoCorrecto 
        ? mensaje = "Es correcto" 
        : mensaje = "No es correcto"
        
// output
alert(mensaje);