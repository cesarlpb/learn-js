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
    this.nombre      = _nombre;
    // sesiones -> por defecto 0 km => no negativo
    this.sesiones    = 0;
    // numSesiones -> número entero positivo de sesiones realizadas por la persona
    this.numSesiones = 0;
    // ¿Cómo validamos que los datos sean correctos?
  }
  anotar(km){
    // añade los km entrenados en la sesión a sesiones => ¿renombrar propiedad?
    // si km no es válido, no añadimos km a sesiones
    if(!Number.isNaN(km) && Number.isFinite(km) && Number(km) > 0){
      this.sesiones += Number(km);
      this.numSesiones++;
    }
  }
  calcularMedia(){
    // return this.sesiones / this.numSesiones;
    if(this.numSesiones == 0){
      console.log("No hay sesiones registradas");
    } else {
      // hay que verificar que haya sesiones antes de calcular la división
      console.log("La media de las sesiones es: ", (this.sesiones / this.numSesiones).toFixed(2), " km");
    }
    
  }
}

// 1. Declaramos variables necesarias (inputs)
// podriamos recibir los datos por prompt
// 2. Realizamos operaciones y bucles necesarios
let ficha = new FichaEntrenamiento("Pepe"); // sesiones y numSesiones = 0
ficha.anotar(5);
ficha.calcularMedia() // 5 km
ficha.anotar(10);
ficha.calcularMedia() // 7.5 km
// 3. Escribimos el resultado (output)
// console.log() en métodos