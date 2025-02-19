// 1. Planteamiento

// 2. Lógica

// 3. Sintaxis 

/**
 * function dividir(a, b){
 *    return a / b;
 * }
 */

/**
 * Calcula la división de dos números
 * @param {number} dividendo 
 * @param {number} divisor 
 * @returns dividendo entre divisor
 */
console.log("Antes de la función")
  function dividir(dividendo, divisor){
    // No se puede dividir por cero -> no está definido
    if(divisor != 0){
      let cociente = dividendo / divisor;
      return cociente; // final de la función
      console.log("esta línea no se imprime");
    }
    console.error("No se puede dividir por cero");
    return Number.NaN; // como no hay operación -> not a number
  }
console.log("Después de la función")

let c1 = dividir(1, 2);
console.log(`El resultado de la división de 1 / 2 es ${c1}`);

let c2 = dividir(1, 0);
console.log(`El resultado de la división de 1 / 0 es ${c2}`);