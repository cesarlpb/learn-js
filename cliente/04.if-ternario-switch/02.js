// El usuario debe entrar un número y su cuadrado. Si es correcto el script enviará un mensaje de acierto, en caso contrario, dirá que se produjo un error.

// ejemplo: 
// a = 3 y b = 9

// Se trata de usar el if resumido (cond?true:false)

// inputs
let numero = Number(prompt("Introduce un número:"));
let cuadrado = Number(prompt("Introduce el cuadrado del número anterior:"));
// main

    // if-else
    let cuadradoCorrecto = numero ** 2;
    if (cuadrado === cuadradoCorrecto){
        alert("Es correcto!")
    } else {
        alert("No es correcto :(")
    }

    // ternario

// output