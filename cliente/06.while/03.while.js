// Un script que preguntará al usuario si desea continuar con el programa. Si el usuario pulsa una letra n (mayúscula o minúscula), el programa finalizará. Cualquier otra entrada repetirá la pregunta

// inputs
let letra = ""; // variable para guardar la letra que introduce el usuario
letra = prompt("¿Quieres continuar el programa (S | N)?")

// bucle while

    // posibles mejoras: usar un array para los valores a comprobar
    // const valoresAceptados = ["n", "N"];
    // condicion: valoresAceptados.includes(letra)

while(letra != "n" && letra != "N"){
    letra = prompt("¿Quieres continuar el programa (S | N)?")
}
// outputs
alert("El programa ha finalizado");