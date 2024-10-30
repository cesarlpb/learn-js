// Definir una función que cree una cadena de letras repetidas tantas veces como le digamos. La función recibe dos argumentos: la letra y el número de repeticiones.

/**
 * Calcula texto repitiendo caracter
 * @param {String} char 
 * @param {Number} repeticiones 
 * @returns {String} Texto generado a partir de char repetido. String vacío si un dato es incorrecto
 */
function repetirChar(char, repeticiones){
    let mensaje = "";

    if(typeof(char) != 'string'){
        mensaje += "char no es string, es de tipo: " + typeof(char);
    }
    if(typeof(repeticiones) != 'number'){
        mensaje += "\nrepeticiones no es number, es de tipo:" + typeof(repeticiones);
    }

    if(mensaje){
        console.error(mensaje);
        return "";
    }

    // Método 1: bucle for
    for(let i = 0; i < repeticiones; i++){
        mensaje += char;
    }
    
    return mensaje;
}

// String Number -> String

// 'a' 1 -> 'a'
repetirChar('a', 1)
// 'a' 0 -> ''
repetirChar('a', 0)
// 'a' 2 -> 'aa'
repetirChar('a', 2)
// 'a' -1 error?
repetirChar('a', -1)
