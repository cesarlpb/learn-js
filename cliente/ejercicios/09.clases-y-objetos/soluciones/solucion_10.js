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
    console.error("constructor no implementado");
  }
  hacerSonido(){
    // perro -> "guau"
    // gato  -> "miau"
    // etc
  }
}
class Perro{
  // ¿cómo evitamos repetir los mismos campos que en Animal
  // y solamente añadimos cosas nuevas o específicas de Perro?
  hacerSonido(){
    console.log("guau");
  }
}
// 1. Declaramos variables necesarias (inputs)

// 2. Realizamos operaciones y bucles necesarios

// 3. Escribimos el resultado (output)
