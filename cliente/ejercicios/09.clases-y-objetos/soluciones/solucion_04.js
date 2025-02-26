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
    // los demás -> ¿cómo validamos las restricciones?
    
    if(this.validarSaldo(_saldoInicial)){
      this.saldo     = _saldoInicial;
    } else {
      // this.saldo     = 0;
      console.error(`❌ El saldo ${_saldoInicial} no es válido.`);
      return;
    }
  
    if(this.validarStringNoVacio(_nombreTitular)){
      this.nombre    = _nombreTitular;
    } else {
      console.error(`❌ El nombre ${_nombreTitular} no es válido.`);
      return;
    }
    if(this.validarStringNoVacio(_apellidosTitular)){
      this.apellidos = _apellidosTitular;
    } else {
      console.error(`❌ El apellido ${_apellidosTitular} no es válido.`);
      return;
    }
    // mismas reglas que nombre y apellido
    if(this.validarStringNoVacio(_documentoId)){
      this.documentoId = _documentoId;
    } else {
      console.error(`❌ El documento ${_documentoId} no es válido.`);
      return;
    }
    
    // opcional asi que no validamos:
    this.paisOrigen  = _paisOrigen; // normalmente, se usa una lista de países 
                                    // válidos para validar si es valor correcto
                                    // Tip: se puede hacer con un array
  }
  ingresar(cantidadIngreso){
    // números positivos o 0 (no se hace nada)
    if(this.validarSaldo(cantidadIngreso)){
      this.saldo += cantidadIngreso;
    }
  }
  retirar(cantidadRetiro){
    // si recibimos 0 no se hace nada
    if(cantidadRetiro == 0){
      return;
    }
    // no vale un número negativo 
    let esCantidadRetiroValida = this.validarSaldo(cantidadRetiro) 
                                 && 
                                 cantidadRetiro <= this.saldo;
    // no se puede retirar más de lo que haya en saldo de la cuenta
    if(esCantidadRetiroValida){
      this.saldo -= cantidadRetiro;
    }
  }
  // Otros métodos
  imprimirSaldo(){
    // Formateamos información de la cuenta de forma similar a como 
    // se vería en un cajero (simplificado)
    let fechaHora        = new Date().toLocaleString(); 
    let extractoBancario = `
      Fecha y hora:    ${fechaHora}
      ---------------------------
      Titular:         ${this.nombre}, ${this.apellidos}
      País de Origen:  ${this.paisOrigen}
      Documento:       ${this.documentoId}
      ---------------------------
      Saldo en cuenta: ${this.saldo.toFixed(2)} €
    `;
    console.log(extractoBancario);
  }
  // Funciones auxiliares
  validarSaldo(saldo){
    // no vale NaN, Infinity: 
    let esNaNoInfinity = Number.isNaN(saldo) || !Number.isFinite(saldo);
    // -> true si es NaN o es Inf

    // debe ser número no negativo (se admite cero):
    let esPositivo = Number(saldo) >= 0;

    return !esNaNoInfinity && esPositivo;
  }
  validarStringNoVacio(str){
    // no puede estar vacíos: "" o " " no son válidos
    // usamos trim() para quitar espacios al principio y al final:
    return str.trim().length >= 3; // nombre corto: Ana, etc.
  }
}

// 1. Declaramos variables necesarias (inputs)
// podemos pedir los datos iniciales por prompt
// 2. Realizamos operaciones y bucles necesarios
let cuenta = new CuentaBancaria(1, "Ana", "Martínez", "123", "España")
cuenta.imprimirSaldo(); // 1 €
cuenta.ingresar(99);
cuenta.imprimirSaldo(); // 100 €
cuenta.retirar(50); 
cuenta.imprimirSaldo(); // 50 €
cuenta.retirar(51); // no hace nada
cuenta.retirar(50);
cuenta.imprimirSaldo(); // 0 €
// 3. Escribimos el resultado (output)
// console.log() en imprimirSaldo()