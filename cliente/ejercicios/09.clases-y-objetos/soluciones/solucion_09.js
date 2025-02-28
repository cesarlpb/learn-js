// Ej 09

/*
En esta ocasión tienes una lista de clientes, cada cliente es un objeto con 
atributos: nombre, email, telefono.

Se quiere crear una clase Factura para gestionar las facturas emitidas a los 
clientes. Las propiedades de esta clase son:

- idCliente: número de cliente (su lugar en la lista de clientes)
- total: número con el importe total de la factura
- estado: pagada o pendiente

Los métodos serán

- cobrar(): pone el estado en pagada.
- imprimir(): imprime los datos de la factura

Ejemplos: 

- Para probar crea tres clientes y al menos una factura.

Podemos tener los siguientes clientes

- Juan, juan#mail.com, 3456718
- Marisa, marisa@mail.com, 5556123
- Luis, luis@mail.com, 2354322

- Factura: Emitimos una factura al cliente 1, o sea, a Juan. el importe es 300 euros. Si se imprime factura.estado saldrá "pendiente".
--> "pendiente"

Después de hacer factura.pagar() al imprimir factura.estado saldrá "pagada".
--> "pagada"

*/ 

/******************************************************************************/

// Pasos para resolver

class Cliente{
  // static := keyword para crear propiedades o métodos de la clase
  // el id se accede como Cliente.id y se actualiza cada vez que se crea un 
  // objeto de clase Cliente
  static id = 0; // -> público => se pude leer desde fuera de la clase Cliente
  // método que se puede ejecutar sin crear objeto de la clase, usando
  // Cliente.asignarId()
  // al colocar el # delante del nombre del método, se hace privado, es decir, 
  // solo se puede ejecutar desde DENTRO de la clase Cliente => constructor()
  static #asignarId(){
    let nuevoId = Cliente.id + 1;
    Cliente.id = nuevoId;
    return nuevoId;
  }
  constructor(_nombre, _email, _telefono){
    // asignar
    // sin validaciones
    this.idCliente = Cliente.#asignarId();
    this.email     = _email;
    this.telefono  = _telefono;
    this.facturas  = [];
  }
  verFacturas(){
    // imprime con console.log() las facturas y su estado
    if(this.facturas.length == 0){
      console.log("No hay facturas asignadas a este cliente.");
      return;
    }
    let msj = `
    Indice:  | Importe total: | Estado:
    -----------------------------------`;
    for(let i = 0; i < this.facturas.length; i++){
      let factura = this.facturas[i];
      msj += `
      ${i}      |  ${factura.importeTotal.toFixed(2)} €      |  ${factura.estado.toUpperCase()}
      `;
    }
    console.log(msj);
  }
  asignarFactura(_factura){
    if(!_factura instanceof Factura){
      console.error(`❌ El argumento ${_factura} no es de clase Factura.`);
      return;
    }
    // usamos el método push() para añadir la factura al array de factura:
    this.facturas.push(_factura);
    // verificar que el idCliente sea correcto?
  }
}
class Factura{
  // "constantes" que vamos a usar para la propiedad estado en los objetos Factura:
  static PAGADO    = "PAGADO";
  static PENDIENTE = "PENDIENTE";

  // añadir un contador de facturas static como en Cliente ?
  constructor(_idCliente, _importeTotal){
    // asignar
    // sin validar
    this.idCliente    = _idCliente;
    this.importeTotal = _importeTotal;
    this.estado       = Factura.PENDIENTE;
  }
  cobrar(){
    // suponiendo que el cobro es correcto
    this.estado = Factura.PAGADO;
  }
  imprimir(){
    let datosFactura = `${this.importeTotal.toFixed(2)} €  |  ${this.estado.toUpperCase()}`;
    console.log(datosFactura);
  }
}
// 1. Declaramos variables necesarias (inputs)
let cliente  = new Cliente("Pepe", "email", "123");
let cliente2 = new Cliente("Pepe 2", "email 2", "1234")

let factura1 = new Factura(cliente.idCliente, 100.00);
let factura2 = new Factura(cliente.idCliente, 50.00);
let factura3 = new Factura(cliente2.idCliente, 200.00);
// 2. Realizamos operaciones y bucles necesarios
cliente.asignarFactura(factura1);
cliente.asignarFactura(factura2);
cliente2.asignarFactura(factura3);

console.log("Facturas de cliente:");
cliente.verFacturas();
console.log("Factura #1:");
factura1.imprimir();
console.log("Facturas del cliente 2:");
cliente2.verFacturas();
// 3. Escribimos el resultado (output)
