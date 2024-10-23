// Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. 

// Se acepta que solo se usarán números válidos.

/**
 * Determina si el número es par
 * @param {Number} num 
 * @returns {Boolean | NaN} true si es par, false si es impar. NaN si no se recibe Number
 */
function esPar(num){
    if(typeof(num) != 'number'){
        console.error("El num no es number:", typeof(num));
        return NaN;
    }
    return num % 2 == 0;
}

// Casos de uso: 
esPar(1)    // false
esPar(2)    // true
esPar('1')  // NaN