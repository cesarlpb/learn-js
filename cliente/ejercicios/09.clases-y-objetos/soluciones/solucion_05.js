// Ej 05

// Crea una clase Ficha, con su constructor, que se usará para almacenar el 
// número de kilómetros recorridos por una persona en cada sesión de ejercicios. 
// 
// Las propiedades de la clase serán

// nombre
// sesiones
// numSesiones
// El nombre es el de la persona, en los sesiones se almacenará el número de kilometros recorridos en cada sesión y numsesiones contiene el número de sesiones anotadas.

// Tiene dos métodos:

// anotar: anota los kilómetros
// calcularMedia: calcula la media de kilómetros recorridos
// Cada persona tendrá su ficha construída con esta clase.

// Si ejecuto anotar(8), anotar(10), anotar(6), en las sesiones se anotarán 8, 10, 6.

// Si escribo media() devolverá 8 ((8+10+6)/3).

// En la solución se usa el camino má primitivo posible: arrays y bucles básicos

/******************************************************************************/

// Pasos para resolver

class FichaEntrenamiento {
  constructor(_nombre){
    this.nombre = _nombre;
    
    // sesiones -> por defecto 0 km => no negativo
    
    // numSesiones -> número entero positivo de sesiones realizadas por la persona

    // ¿Cómo validamos que los datos sean correctos?

  }
  anotar(km){
    // añade los km entrenados en la sesión a sesiones => ¿renombrar propiedad?
  }
  calcularMedia(){
    // return this.sesiones / this.numSesiones;
    
    // hay que verificar que haya sesiones antes de calcular la división
  }
}

// 1. Declaramos variables necesarias (inputs)

// 2. Realizamos operaciones y bucles necesarios

// 3. Escribimos el resultado (output)
