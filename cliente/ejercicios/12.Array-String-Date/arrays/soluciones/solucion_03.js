// * Ej 03

// Crea un array para albergar al menos 10 números enteros cualesquiera, 
// luego rellena el array (o créalo ya con los valores). 

// El ejercicio trata de crear a partir de este array otros dos uno con los números 
// pares y otro con los impares. 

// - No debes usar bucles, usa el método del array qe creas más apropiado.
// - No debes usar bucles, mira el método más apropiado para crear un array a partir de otro.

// - Un número es par si al dividirlo por 2 el resto es 0 (num%2 es 0)

// sin bucles: map()

// con bucle:
const arrNumeros = [];
const N = 10;
for(let i = 0; i < N; i++){
  arrNumeros.push(i)
}
console.table(arrNumeros);

// sin bucle:
console.log("pares:")
const pares = [];
let contador = 0;
arrNumeros.forEach(function(){
  pares.push(contador);
  contador += 2;
});
console.table(pares);

const impares = [];
contador = 1;
arrNumeros.forEach(function(){
  impares.push(contador);
  contador += 2;
});
console.log("impares:")
console.table(impares);

// Hay que evitar usar Array(N) para iniciar arrays
// a menos que queramos usar un iterator con arr.keys()...
// para evitar esto, podemos hacer un bucle para iniciar el array
// con cualquier valor y después lo editamos -> Number -> 0, String -> ""