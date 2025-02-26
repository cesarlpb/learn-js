/**
 * 
 * 
 * Crea una clase que llamaremos Bus. Sus atributos serán:

- capacidad: número máximo de pasajeros
- pasajeros: número de pasajeros (inicialmente 0)
- conductor: objeto de clase Conductor

Sus métodos

- subirPasajeros(pasajeros): aumenta el numero de pasajeros
- bajarPasajeros(pasajeros): disminuye el número de pasajeros
- asignarConductor(_conductor): asigna un objeto conductor.

El objeto conductor es de una clase (Conductor) cuyos atributos son:

- nombre: nombre del conductor
- licencia: un número que identifica al conductor.

- Al crear el objeto Bus se asigna también el Conductor

Restricciones: 

- No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.

Ejemplo:

El autobús "linea 1" puede llevar 40 pasajeros y su conductor se llama José su licencia es la 1234.

- Si se pide subir(25) , el atributo pasajeros valdrá 25.
- Si a continuación se pide subir(35) solo subirán 15, (2 + 15 son los 40 de máximo)
- Si pedimos bajar 45, el autobús se queda vacío.

- Si teniendo 35 pasajeros se pide que bajen 40 el autobús se queda vacío.

 */
/******************************************************************************/

// Pasos para resolver
class Bus{
  constructor(_capacidad, _pasajeros, _conductor){
    // asignación
    // capacidad, pasajeros, conductor
    console.error("constructor no implementado");
    // asignarConductor()
  }
  subirPasajeros(pasajeros){
    console.error("Método no implementado");
  }
  bajarPasajeros(pasajeros){
    console.error("Método no implementado");
  }
  asignarConductor(conductor){
    console.error("Método no implementado");
  }
}
class Conductor{
  constructor(_nombre, _licencia){
    // asignar a propiedades
    // nombre, licencia
    console.error("constructor no implementado");
  }
}
// 1. Declaramos variables necesarias (inputs)

// 2. Realizamos operaciones y bucles necesarios

// 3. Escribimos el resultado (output)
