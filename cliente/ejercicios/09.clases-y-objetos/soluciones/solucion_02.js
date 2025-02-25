// Ej 02

// Define un objeto, mediante una expresión, que tenga dos propiedades: 

// precio -> number
// descuento -> number
// un método calcularNeto() => number

// El método calculará el precio con el descuento 
// aplicado. => el precio "final" o "neto"
// 
// Los valores se pedirán por teclado
// Por ejemplo objeto vestido, precio 400 y descuento 10. 
// 
// El método devolverá 
// como resultado 360.00 € (400 - 10*400/100).

/******************************************************************************/

// Pasos para resolver

// input: precio y descuento
// output: precio final o neto (precio base menos descuento)

// 1. Declaramos variables necesarias (inputs)
let producto = {
  "precio":    0, // euros
  "descuento": 0, // %
  "calcularNeto": function (precioBase, descuento){
    let descuentoEuros = precioBase * descuento / 100;
    return precioBase - descuentoEuros; // euros
  },
  // "actualizarPrecio": function(){...}
  // "actualizarDescuento": function(){...}
  "imprimirPrecioNeto": function (precioBase, descuento, precioNeto){
    console.log(`
      Ticket 001
      -----------------
      Descripción
      -----------------
      Precio base:  ${precioBase.toFixed(2)} €
      Descuento:    ${descuento.toFixed(2)} €
      =================
      Precio final: ${precioNeto.toFixed(2)} €
      `)
  }
}
// 2. Realizamos operaciones y bucles necesarios
let precio = Number(prompt("Introduce el precio del artículo:"));
let descuento = Number(prompt("Introduce el descuento a aplicar:"));

// sobre el objeto producto
function actualizarPrecio (nuevoPrecio) {
  if(nuevoPrecio >= 0){
    producto.precio = nuevoPrecio;
  }  
}
actualizarPrecio(precio); // 100 -> producto.precio = 100

// lo mismo para el descuento:
function actualizarDescuento(nuevoDescuento){
  if(nuevoDescuento >= 0 && nuevoDescuento <= 100){
    producto.descuento = nuevoDescuento;
  }
}
actualizarDescuento(descuento); // 15 -> producto.descuento = 15 // %
// 3. Escribimos el resultado (output)

let precioBaseEuros   = producto.precio;
let descuentoAplicado = producto.descuento;
let precioNeto        = producto.calcularNeto(precioBaseEuros, descuentoAplicado);

producto.imprimirPrecioNeto(precioBaseEuros, descuentoAplicado, precioNeto);

// Ejemplo de ejecución con precio = 100 y descuento = 10
// solucion_02_pythontutor.png
// https://pythontutor.com/render.html#mode=display -> Javascript ES6