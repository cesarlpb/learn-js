// El bucle do while te asegura al menos una iteración de tu programa

// En el bucle while -> si la condición es falsa, no se itera
// En el bucle for   -> se repita una iteración un número de veces

// Caso de uso: cuando sea importante esa iteración

let esFalso = false;

while(esFalso){
  console.log("Esto no va a aparecer en consola.");
}

do{
  console.log("Esta es la única iteración en el do while");
} while(esFalso);

// Si paramos un programa cuando se introduce 0 y queremos pedir el dato
// al menos una vez, un do while puede venir bien

/*
  // Basado en el problema 07 de while: 

  let num ... prompt
  while(num != 0){
    // instrucciones
    num = prompt...
  }
  // salida
*/

let num; // variable global

do{
  num = Number.parseInt(prompt("Introduce un número o 0 para parar:"));
  // condiciones ...
  console.log("Has introducido ", num);
} while( num != 0 );

