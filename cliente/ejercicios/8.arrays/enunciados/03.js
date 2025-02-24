// Ej 03

// Sin usar métodos del objeto array, diseña una función llamada sumarLista() 
// capaz de sumar todos los números que forman el array que se le pase como 
// argumento.

// Si ejecuto sumarLista([2,4,5,1,2]) deberá devolver como resultado 14
// sumaLista([]) => 0
// sumaLista([1,1]) => 2

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let input1 = [2, 4, 5, 1, 2];
let input2 = [];
let input3 = [1, 1]
// 2. Realizamos operaciones y bucles necesarios
function sumarLista(arr){
  let suma = 0;
  for(let i = 0; i < arr.length; i++){
    // console.log(i, arr[i]) // debug
    suma += arr[i];
  }
  return suma;
}
// 3. Escribimos el resultado (output)
console.log(`sumarLista([${input1}]): ${sumarLista(input1)}`);
console.log(`sumarLista([${input2}]): ${sumarLista(input2)}`);
console.log(`sumarLista([${input3}]): ${sumarLista(input3)}`);