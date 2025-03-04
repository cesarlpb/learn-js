// Ej 10

/**
 * 
 * Vamos a crear una clase Animal y a partir de esta clase
 * vamos a crear clases específicas de animales: Perro, Gato, etc.
 * 
 * Además, vamos a heredar propiedades de la clase Animal en las clases derivadas
 * y vamos a sobreescribir (override) al menos un método de la clase Animal en las 
 * clases heredades Perro, Gato, etc.
 * 
 */
/******************************************************************************/

// Pasos para resolver
class Animal{
  constructor(_nombre, _especie){
    // asignar
    // sin validar
    this.nombre  = _nombre;
    this.especie = _especie;
  }
  hacerSonido(){
    // perro -> "guau"
    // gato  -> "miau"
    // etc
    console.log("Sonido de animal:", this.especie);
    switch(this.especie){
      case "perro":
        console.log("guau");
        break;
      case "gato": 
        console.log("miau");
        break
      default:
        console.log("No hay sonido de este animal");
    }
  }
}

// Herencia
class Perro extends Animal {
  // ¿cómo evitamos repetir los mismos campos que en Animal
  // y solamente añadimos cosas nuevas o específicas de Perro?
  constructor(nombre, especie, _raza){
    super(nombre, especie);
    this.raza = _raza;
  }
  hacerSonido(){
    console.log(this.nombre, this.especie, this.raza);
    console.log("El perro hace: guau");
  }
}
// 1. Declaramos variables necesarias (inputs)
let animal = new Animal("Pepe", "elefante");
animal.hacerSonido();
let perro  = new Perro("Doggy", "perro", "caniche");
perro.hacerSonido();
// 2. Realizamos operaciones y bucles necesarios
// -> hacer ejemplode Mc Donalds con hamburguesas <-
// 3. Escribimos el resultado (output)
