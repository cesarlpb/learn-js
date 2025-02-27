// Ej 07

/**
 * 
 * 
 * Un artículo tiene un nombre, un proveedor y un precio. 
 * Y un proveedor tiene un nombre, email y telefono. 
 * Se pide definir una clase (Proveedor) para implementar el objeto proveedor 
 * y otra (Articulo) para el objeto artículo. 
 * 
 * Este objeto tiene los siguientes atributos o propiedades:

- proveedor: un objeto proveedor, a quien se compra el artículo
- nombre: una cadena, nombre del artículo
- precio: un número, precio del artículo

Y métodos:

- imprimirTelefono(): devuelve un objeto con el nombre y teléfono del proveedor

Por su parte el objeto proveedor tiene como propiedades

- nombre: cadena de texto, nombre del proveedor
- email: un email, correo del proveedor
- teléfono: una cadena de dígitos, teléfono del proveedor

Puedes implementarlo con class

Ejemplos: 

- Por ejemplo podríamos tener un artículo monitor que vale 200€ 
-- y el proveedor es TecnoShop, con email: tcn@tecno.com y telefono 1234567.

Si hacemos articulo.imprimirTelefono() nos dará  nombre y teléfono del 
proveedor: Teléfono de TecnoShop es 1234567

 */
/******************************************************************************/

// Pasos para resolver

class Articulo{
  constructor(_precio, _nombre, _proveedor){
    // asignar propiedades
    // sin validaciones -> TODO
    this.precio = _precio;       // validar que es número positivo
    this.nombre = _nombre;       // validar que es nombre válido
    this.proveedor = _proveedor; // validar que es Proveedor válido
  }
  imprimirTelefono(){
    console.log(`El teléfono de ${this.proveedor.nombre} es: ${this.proveedor.telefono}.`);
  }
}
class Proveedor{
  constructor(_nombre, _email, _telefono){
    // asignar
    // TODO: validaciones
    this.nombre = _nombre;    // validar que es nombre válido
    this.email = _email;      // validar email válido
    this.telefono = _telefono;// validar teléfono -> España
  }
}
// 1. Declaramos variables necesarias (inputs)
let proveedor = new Proveedor("TecnoShop", "tcn@tecno.com", "1234567");
let articulo  = new Articulo(200, "monitor LG", proveedor);
// 2. Realizamos operaciones y bucles necesarios
articulo.imprimirTelefono();
// 3. Escribimos el resultado (output)
