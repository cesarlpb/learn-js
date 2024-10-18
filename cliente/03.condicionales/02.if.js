// Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo

// Pedimos el número:
let num = Number(prompt("Introduce un número:"));
// TODO: habría que comprobar que efectivamente recibimos un número en el paso anterior y en caso de que no, podemos devolver un mensaje o acabar el programa

// Comprobamos si el número es positivo o negativo:
if(num >= 0){
    alert("Es positivo")
} else {
    alert("Es negativo")
}