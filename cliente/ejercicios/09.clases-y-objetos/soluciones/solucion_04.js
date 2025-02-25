// Ej 04 - Cuenta de Banco con objetos

// Construye una clase usando class para implementar una cuenta de efectivo.

// Poseerá dos propiedades: nombre del titular y saldo. 
// Además debe tener dos métodos: ingresar() y retirar(). 

// El primero incrementa el saldo en la cantidad indicada en el argumento y el 
// segundo lo reduce. 
// No se puede sacar más de lo que exista en el saldo.

// A los métodos los invocaremos con las llamadas ingresar(1000) o retirar(100) 
// Tras ingresar el saldo será 1000 y tras retirar el saldo será 900.

/******************************************************************************/

// Pasos para resolver

class CuentaBancaria {
  constructor(
    _saldoInicial,      // number -> por defecto será 0
    _nombreTitular,     // string -> no puede estar en blanco
    _apellidosTitular,  // string -> no puede estar en blanco
    _documentoId,       // string -> no puede estar en blanco
    _paisOrigen         // string -> opcional
  ){
    this.saldo = _saldoInicial;
    // los demás -> ¿cómo validamos las restricciones?
  }
  ingresar(cantidadIngreso){
    // números positivos o 0 (no se hace nada)

  }
  retirar(cantidadRetiro){
    // no vale un número negativo 
    
    // si recibimos 0 no se hace nada
    
    // no se puede retirar más de lo que haya en saldo de la cuenta
  }
  // Otros métodos
  imprimirSaldo(){
    // Formateamos información de la cuenta de forma similar a como 
    // se vería en un cajero (simplificado)
    
  }
}

// 1. Declaramos variables necesarias (inputs)

// 2. Realizamos operaciones y bucles necesarios

// 3. Escribimos el resultado (output)
