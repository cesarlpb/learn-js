// Ej 05

/*
Usa el algoritmo de Euclides para diseñar una función que determine el máximo 
común divisor de dos números. Para calcular el MCD de A y B:

- Si A = 0 entonces MCD(A,B) = B, ya que el MCD(0,B) = B, y podemos detenernos.  
- Si B = 0 entonces MCD(A,B) = A, ya que el MCD(A,0) = A, y podemos detenernos.  
- En caso de que ninguno sea 0:
  - Calcula el resto de A/B
  - Asigna a A el valor de B
  - Asigna a B el resto
  - Repite hasta que A o B sean 0.
*/

// Ejemplos

// Si me piden el MCD(10, 5) tendré 5 como solución 
// y el MCD( 24, 9) será 3 
// y el MCD(12,20) será 4

// MCD(10,5)  // 5
// MCD(24,9)  // 3
// MCD(7,5)   // 1
// MCD(12,20) // 4

// MCD(24,9) => 3
// divisores de 24: 1, 2, 3, 4, 6, 8,   12, 24
// divisores de 9 : 1,    3,          9 

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables y constantes necesarias para el programa e inputs
let input1 = "", input2 = ""; // strings -> se validan -> number (enteros)
// 2. Definimos las funciones necesarias para el programa
function mcd(a, b){
  // Esta función recibe numbers y además son enteros
  // ¿Suponemos que a es el mayor? -> al parecer, funciona bien si b > a

  if(a === 0){ return b; }
  else if (b === 0){ return a; }
  else {
    // ninguno de los dos es cero
    // repetimos hasta que uno de los dos sea cero:
    while(a !== 0 && b !== 0){
      let resto = a % b; // Calculamos el resto
      a = b;             // -> Asignamos el valor de b en a
      b = resto;
    }
    // en este punto, a o b (al menos uno) es cero
    if(a === 0){ return b; }
    else if(b === 0){ return a; }
  }
}
function verificarEntero(str){
  let esEntero = Number.parseInt(str) == Number(str);
  let esNaN    = Number.isNaN(Number(str));
  let esNumeroFinito = Number.isFinite(Number(str)); // no es Infinity
  // TODO: añadir condición de que - además - sean no negativos (0, 1, 2...)
  return esEntero && !esNaN && esNumeroFinito;
}
function validarNumerosEnteros(str1, str2){
  // Esta función determina si los dos strings recibidos son enteros -> boolean
  let esEntero1 = verificarEntero(str1);
  let esEntero2 = verificarEntero(str2);
  return esEntero1 && esEntero2;
}
function main(){
  // El cálculo del MCD solo tiene sentido para números enteros:
  input1 = prompt("Introduce el primer número:");   // string
  input2 = prompt("Introduce el segundo número:");  // string
  // Comprobamos si los números son enteros y paramos programa en caso de que no:
  let sonEnterosValidos = validarNumerosEnteros(input1, input2);
  // Estrategia: descartamos el caso no válido inmediatamente
  if(!sonEnterosValidos){
    console.error("Es necesario que ambos números sean enteros para calcular MCD.");
    return; // salimos de main()
  }

  // En caso de que sean enteros:
  let int1 = Number.parseInt(input1);
  let int2 = Number.parseInt(input2);
  let output = mcd(int1, int2);

  // Salida:
  console.log(`El MCD de ${int1}, ${int2} es ${output}`);
}
// 3. Realizamos operaciones y bucles necesarios -> usando las funciones
main();
// 4. Escribimos el resultado (output) -> usando las funciones

// 5. Pruebas o casos conocidos de resultados correctos

function hacerTests(){
  let i1 = 1, i2 = 0, e1 = 1; // e1 es el valor esperado (correcto)
  let c1 = mcd(i1, i2);

  let i3 = 0, i4 = 1, e2 = 1;
  let c2 = mcd(i3, i4);

  let i5 = 24, i6 = 9, e3 = 3;
  let c3 = mcd(i5, i6);

  let esCorrecto1 = c1 === e1,
      esCorrecto2 = c2 === e2,
      esCorrecto3 = c3 === e3;
      
  return esCorrecto1 && esCorrecto2 && esCorrecto3;
}
console.log("Los test son correctos?", esTestCorrecto ? "✅ Sí" : "❌ No");

// la operación es simétrica (no importa el orden de los números):
// MCD(5,10) = MCD(10,5) -> 5

// MCD(4,4)  // 4
// MCD(10,5)  // 5
// MCD(24,9)  // 3
// MCD(9,24)  // 3
// MCD(7,5)   // 1
// MCD(12,20) // 4

// Casos especiales:
// MCD(0,1) // 1
// MCD(1,0) // 1
// MCD(0,0) // 0 <- definición conveniente :)