// Crea una función que tenga dos argumentos: num1, num2, y que devuelva como resultado la suma de ambos números. 

// Se supone que se usarán solo números válidos, no letras o símbolos.

/**
 * Calcula la suma de dos números
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns {Number} el resultado de la suma 
 */
function sumar(num1, num2){
    // Existen niveles para el console: debug < info o log < warn < error
    let mensaje = "";

    if(typeof(num1) != 'number'){
        mensaje += "num1 no es number, es de tipo: " + typeof(num1);
    }
    if(typeof(num2) != 'number'){
        mensaje += "\nnum2 no es number, es de tipo:" + typeof(num2);
    }

    if (mensaje){
        console.error(mensaje);
        return NaN;
    }

    return num1 + num2;
}

// Casos de uso:
sumar(1, true)  // error
sumar('a', 1)   // error
sumar("1", "2") // ambos params incorrectos
sumar(1, 2)     // 3 ----- ok