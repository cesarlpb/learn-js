// Crea una función que tenga dos argumentos: num1, num2, y que devuelva como resultado la suma de ambos números. 

// Se supone que se usarán solo números válidos, no letras o símbolos.

/**
 * Calcula la suma de dos números
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns {Number} el resultado de la suma 
 */
function sumar(num1, num2){
    if(typeof(num1) != 'number' || typeof(num2) != 'number'){
        // Existen niveles para el console: debug < info o log < warn < error
        console.error("Alguno de los params no es Number")
        return NaN
    }
    return num1 + num2;
}

// Casos de uso:
sumar(1, true)  // error
sumar(1, 'a')   // error
sumar(1, 2)     // 3 ----- ok