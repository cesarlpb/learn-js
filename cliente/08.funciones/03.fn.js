// Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto múltiplo del segundo argumento.

/**
 * Determina si los números son múltiplo y divisor
 * @param {Number} multiplo 
 * @param {Number} divisor 
 * @returns {Boolean | Number} true si división exacta, false en caso contrario. NaN si algún param no es Number
 */
function esMultiplo(multiplo, divisor){
    let mensaje = "";

    if(typeof(multiplo) != 'number'){
        mensaje += "multiplo no es number, es de tipo: " + typeof(multiplo);
    }
    if(typeof(divisor) != 'number'){
        mensaje += "\ndivisor no es number, es de tipo:" + typeof(divisor);
    }

    if(mensaje){
        console.error(mensaje);
        return NaN; // no se puede realizar la operación
    }

    return multiplo % divisor == 0
}

// 10 2 -> true
esMultiplo(10, 2) // true
// 10 3 -> false
esMultiplo(10, 3) // false
// errores:
esMultiplo(10, '3') // error
