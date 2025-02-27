// Ej 08

/**
 * Para implementar un grupo de alumnos de un curso se crea una lista de objetos 
 * alumno. Cada objeto alumno se caracteriza por el nombre del alumno, su número
 *  de matrícula y su calificacion.

- El objeto tiene un método para poner la calificación: calificar(nota).

- Crea el script para implementar  un grupo de 4 alumnos.

Ejemplos: 
Por ejemplo un alumno de nombre 

"Juan", número de matrícula 124 y su nota la pondríamos como alumno.calificar(5) para ponerle un 5.
x4

 */
/******************************************************************************/

// Pasos para resolver

class Alumno{
  constructor(_nombre, _matricula){
    // asignar
    // sin validaciones
    this.nombre = _nombre;
    this.matricula = _matricula;
    this.nota = 0;
    this.calificacion = "";
  }
  // pasamos la nota numérica a calificación en string
  calificar(nota){
    let calificacion = "";
    if(nota >= 0 && nota < 5){
      // suspenso
      calificacion = "Suspenso";
    } else if(nota >= 5 && nota < 7){
      // Aprobado
      calificacion = "Aprobado";
    } else if(nota >= 7 && nota < 9){
      // notable
      calificacion = "Notable";
    } else if(nota >= 9 && nota <= 10){
      // sobresaliente
      calificacion = "Sobresaliente";
    } else {
      // no válida
      calificacion = "Esta nota no es válida";
    }
    this.nota = nota;
    this.calificacion = calificacion;
  }
  imprimirNota(){
    console.log(`${this.nombre} tiene ${this.nota} (${this.calificacion}).`)
  }
}

// 1. Declaramos variables necesarias (inputs)
const alumnos = [];
const alumno1 = new Alumno("Juan", "1234");
const alumno2 = new Alumno("María", "12345");
const alumno3 = new Alumno("Pepe", "123456");
const alumno4 = new Alumno("Mario", "1234567");
// 2. Realizamos operaciones y bucles necesarios
alumnos.push(alumno1); // push() añade el elemento al array en última posición
alumnos.push(alumno2);
alumnos.push(alumno3);
alumnos.push(alumno4);
// Calficamos:
alumno1.calificar(5);
alumno2.calificar(7.5);
alumno3.calificar(6);
alumno4.calificar(9);
// 3. Escribimos el resultado (output)
for(let i = 0; i < alumnos.length; i++){
  let alumno = alumnos[i]; // 0, 1, 2, 3
  alumno.imprimirNota();
}

// Equivale a:
// alumno1.imprimirNota() ...