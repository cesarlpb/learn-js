// Hacemos una cuentra atrás con bucle for y while

// Contamos desde 10 hasta 0:

// Bucle for

console.log("⏰ Cuenta atrás de 10 a 0 con bucle for:");

for(let i=10; i>=0; i--){
  console.log("contador for: ", i);
}
// Bucle while 

console.log("⏰ Cuenta atrás de 10 a 0 con bucle while:");

let contador = 10;
while(contador >= 0){
  console.log("contador while: ", contador);
  contador = contador - 1;
  // Alternativas:
  // contador--
  // contador -= 1
}