// Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado. Luego deberá sacar esa lista con un alert. Los números se separarán por comas.  

// inputs
    // declaramos las variables que necesitamos

let int = 0, list = ""; // entero y string para el mensaje de salida
int = parseInt(prompt("Introduce un número entero:"));

// bucle while
let contador = 0; // casi siempre (99.99%) es int
while(contador <= int){
    list += `${contador}, `;
    contador = contador + 1;
}

// outputs
    // cortamos los últimos dos caracteres para no acabar la lista con ", "
alert(list.slice(0, list.length - 2))