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
  constructor(_capacidad, _conductor){
    // capacidad, pasajeros, conductor
    if(this.validarPositivo(_capacidad) && _capacidad > 0){
      this.capacidad = _capacidad;
    } else {
      console.error(`❌ El valor ${_capacidad} no es una capacidad (aforo) válido.`);
      return;
    }
    // iniciamos esta propiedad a cero:
    this.pasajeros = 0;
    // asignamos conductor:
    if(_conductor instanceof Conductor){
      this.conductor = _conductor;
    } else {
      console.error(`❌ El conductor ${_conductor} no es una Conductor válido.`);
      return;
    }
    // console.error("constructor no implementado");
    // Tip: se puede hacer un método asignarConductor() para verificar el conductor
    // sobre todo en caso de que necesitemos hacer más validaciones sobre este objeto
  }
  subirPasajeros(_pasajeros){
    if(_pasajeros == 0){
      return;
    }
    if(this.validarPositivo(_pasajeros) && _pasajeros <= this.capacidad - this.pasajeros){
      this.pasajeros += _pasajeros;
      console.log(`✅ Ha(n) subido ${_pasajeros} pasajero(s) al bus.`)
    } else {
      console.error(`❌ La cantidad: ${_pasajeros} > ${this.capacidad - this.pasajeros} de pasajeros no pueden subir a la vez.`);
    }
  }
  // Si se llama con más pasajeros que el aforo o el aforo (capacidad) => se bajan todos
  // Si no, se bajan los que se piden
  bajarPasajeros(_pasajeros){
    if(_pasajeros >= this.capacidad){
      this.pasajeros = 0;
      console.log(`✅ Se han bajado todos los pasajeros del bus.`)
      return;
    }
    if(this.validarPositivo(_pasajeros) && _pasajeros > 0 && _pasajeros < this.capacidad){
      this.pasajeros -= _pasajeros;
      console.log(`✅ Se han bajado ${_pasajeros} pasajeros del bus.`)
    }
  }
  asignarConductor(conductor){
    // TODO
    console.error("Método no implementado");
  }
  // Funciones auxiliares
  validarPositivo(num){
    // no vale NaN, Infinity: 
    let esNaNoInfinity = Number.isNaN(num) || !Number.isFinite(num);
    // -> true si es NaN o es Inf

    // debe ser número no negativo (se admite cero):
    let esPositivo = Number(num) >= 0;

    return !esNaNoInfinity && esPositivo;
  }
  validarStringNoVacio(str){
    // no puede estar vacíos: "" o " " no son válidos
    // usamos trim() para quitar espacios al principio y al final:
    return str.trim().length >= 3; // nombre corto: Ana, etc.
  }
  imprimirDatos(){
    console.log(`
      Bus 001
      Conductor: ${this.conductor.nombre}
      -----------------------------------
      Pasajeros:    ${this.pasajeros}
      Aforo máximo: ${this.capacidad} 
      `)
  }
  test = () => {
    return `El bus tiene una capacidad de ${this.capacidad} pasajeros, actualmente hay ${this.pasajeros} pasajeros y el conductor es ${this.conductor.nombre}`;
  };
}
class Conductor{
  constructor(_nombre, _licencia){
    // asignar a propiedades
    // nombre, licencia
    if(this.validarStringNoVacio(_nombre)){
      this.nombre = _nombre;
    } else {
      console.error(`❌ El nombre ${_nombre} no es un nombre válido`);
      return;
    }

    if(this.validarStringNoVacio(_licencia)){
      this.licencia = _licencia;
    } else {
      console.error(`❌ La licencia ${_licencia} no es una licenci válida`);
      return;
    }
  }
  validarStringNoVacio(str){
    // no puede estar vacíos: "" o " " no son válidos
    // usamos trim() para quitar espacios al principio y al final:
    return str.trim().length >= 3; // nombre corto: Ana, etc.
  }
}
// 1. Declaramos variables necesarias (inputs)
const conductor = new Conductor("Pepe", "12345 ABC");
const bus = new Bus(50, conductor);
// 2. Realizamos operaciones y bucles necesarios
bus.imprimirDatos();    // 0 pasajeros
bus.subirPasajeros(25);
bus.imprimirDatos();    // 25 pasajeros
bus.bajarPasajeros(10); //
bus.imprimirDatos();    // 15 pasajeros 
// 3. Escribimos el resultado (output)
// console.log() en objetos
