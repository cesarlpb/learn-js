// Ej 03

// En esta propuesta debes crear una clase de nombre piedra (con class o con 
// function) con dos propiedades: masa, volumen y un método calcularDensidad() 
// que calcule este valor (masa/volumen). 
// 
// Luego instancia al menos un objeto de esta clase, 
// dale un valor a su masa y a su volumen y ejecuta el método calcularDensidad().
// 
// Por ejemplo objeto oro, masa de la muestra 194 g y volumen 10 cc. 
// 
// Densidad deberá devolver 19,4 g / cc.

/******************************************************************************/

// Pasos para resolver

// Clase := plantilla para hacer objetos -> permite crear (instanciar) objetos de la clase
// ej: hacemos una clase (plantilla Piedra) => vamos a crear objetos piedra

// constructor => método especial que se ejecuta al crear objeto (o instanciar) de la clase

// this := keyword que referencia a la instancia del objeto actual

class Piedra {
  constructor(_masa, _volumen){
    // Las propiedades son "masa" y "volumen":
    this.masa    = _masa;
    this.volumen = _volumen;

    console.log(`Se ha creado el objeto con valores: ${this.masa} g y ${this.volumen} cc`);
  }
  // Métodos
  calcularDensidad(){
    let densidad = this.masa / this.volumen; 
    return densidad;
  }
  imprimirDensidad(){
    let densidad = this.calcularDensidad();
    console.log(`Para la piedra con ${this.masa} g y ${this.volumen} cc 
se tiene una densidad de ${densidad.toFixed(4)} g / cc`)
  }
}

// 1. Declaramos variables necesarias (inputs)
let masa = Number(prompt("Introduce la masa en gramos:"));
let volumen = Number(prompt("Introduce el volumen en cc:"));
// 2. Realizamos operaciones y bucles necesarios
let piedra = new Piedra(masa, volumen);
// 3. Escribimos el resultado (output)
piedra.imprimirDensidad();