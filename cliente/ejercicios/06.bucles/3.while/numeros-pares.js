// Mostrados los x primeros números enteros pares con bucle for y bucle while

// Ejemplo:

// input: 5
// 2 4 6 8 10

let num = Number.parseInt(prompt("Introduce un número mayor que cero:"));

// Bucle for:

console.log("For");
for(let i=2; i <= 2*num; i+=2){
  console.log(i);
}

// Bucle while:

console.log("While:");

let contador = 2;
while(contador <= 2*num){
  console.log(contador);
  contador = contador + 2;
}

console.log("Final del programa"); // evitamos que salga contador al final