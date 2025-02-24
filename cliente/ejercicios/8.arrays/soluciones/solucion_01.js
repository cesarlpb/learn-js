// Ej 01 

// En este script deberás crear un array para guardar los nombres de los días de 
// la semana, empezando por 0 para el domingo. 

// Para comprobar el funcionamiento 
// pide al usuario un número entre 0 y 6 y devuelve el nombre del día. 

// Se supone que el dato tecleado estará entre 0 y 6

// Si tecleo el número 4 me deberá decir que "El día de la semana es jueves"
// Si se sale del rango (0 - 6) el valor sería undefined => devolverá "día no válido"

/******************************************************************************/

// Pasos para resolver

// input: índice del array
// output: el día de la semana

// 1. Declaramos variables necesarias (inputs)
let diasSemana = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado"
]

let input  = prompt("Indica el número de día que quieres ver del (0 al 6)");
let indice = Number.parseInt(input);
let diaSemana = diasSemana[indice];
let msj    = "";
// 2. Realizamos operaciones y bucles necesarios
// assertive clause:
if(indice < 0 || indice > diasSemana.length - 1){
  msj = `El número ${indice} no es un día de la semana válido, debe estar entre 
  0 y 6 (incluidos)`;
} else {
  msj = `El día de la semana es ${diaSemana}`;
} 
// 3. Escribimos el resultado (output)
alert(msj);