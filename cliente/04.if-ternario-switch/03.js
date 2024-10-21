// En este caso, también usando el operador ternario o if reducido, un visitante a la página deberá teclear su edad, si es igual o mayor de 18 recibirá el mensaje de "Entra" en caso contario deberá decirle los años que tiene que esperar para entrar

// inputs
let edad = parseInt(prompt("Introduce tu edad:")); // parseInt redondea hacia abajo
let mensaje = "Mensaje por defecto"; // iniciamos con un valor 

// ternario

    // ? :
    edad >= 18 
        ? mensaje = "Puedes pasar" 
        : mensaje = `Debes esperar ${18 - edad} año(s)` // string interpolado

// outputs

alert(mensaje);