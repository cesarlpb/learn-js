// Ej 01

// Para comenzar vamos a crear un objeto sencillo que se usa para guardar 
// información sobre las calificaciones de un alumno.

//  El curso contiene tres materias: 
// Inglés, Programación y HTML, 
// 
// y el objeto contendrá el nombre del alumno y 
// la calificación en cada una de ellas. 
// 
// El script imprimirá el nombre y la media de sus calificaciones
// Por ejemplo, guardar las calificaciones de un alumno de 
// 
// nombre Juan, Inglés: 9, programacion: 8, HTML: 7. 
// Sacará Nota media de Juan 8

/******************************************************************************/

// Pasos para resolver

// creamos un objeto Alumno para guardar tanto los datos del alumno como sus notas

let alumno = {
  "nombre"  : "Pepe",
  "apellido": "Martínez",
  "ingles"  : 9,
  "programacion": 8,
  "html"    : 7
}
// 1. Declaramos variables necesarias (inputs)
let nombreAlumno   = alumno.nombre;
let apellidoAlumno = alumno.apellido;
let nombreCompleto = nombreAlumno + " " + apellidoAlumno;
// array de notas:
let notas = [
  alumno.ingles,        // 9
  alumno.programacion,  // 8
  alumno.html           // 7
];
function calcularMedia(arr){
  let suma = 0;
  for(let i = 0; i < arr.length; i++){
    suma += arr[i];
  }
  return suma / arr.length;
}
// 2. Realizamos operaciones y bucles necesarios
let media = calcularMedia(notas);
let output   = `
  Resumen de alumno
  --------------------
  Nombre Completo: ${nombreCompleto}

  Notas:
  - Inglés:       ${alumno.ingles.toFixed(2)}
  - Programación: ${alumno.programacion.toFixed(2)}
  - HTML:         ${alumno.html.toFixed(2)}
  --------------------
  Media:          ${media.toFixed(2)}
`;
// 3. Escribimos el resultado (output)
console.log(output);