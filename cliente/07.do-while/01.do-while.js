// Realiza un script que le pida al usuario que teclee la letra A (en mayúscula) y mientras no lo haga se lo vuelva a pedir. Usa un bucle do..while y la ventana alert para los mensajes

let letra = "";
do {
    letra = prompt("Dame una letra:");
} while(letra != "A");

alert("Fin del programa");