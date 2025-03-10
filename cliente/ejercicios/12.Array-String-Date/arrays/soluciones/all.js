/**
 * Ej 01
 * 
 * Este ejercicio solo te pide que crees un array de nombre diasSemana para contener 7 elementos. 
 * 
 * Luego rellena el array con los nombres de los días comenzando por Lunes hasta Domingo.
* 
Muestra el array en la consola del inspector de código (F12) con 

console.table(diasSemana)

// Solución 01:

let dias = [
  "Domingo", "Lunes", "Martes",
  "Miércoles", "Jueves", "Viernes",
  "Sábado"
]
let indice = Number(prompt("Introduce un número del 0 a 6:"))
alert(dias[indice])

// TODO: no hemos incluído validaciones...

//******************************************************************************
* Ej 02

* Crea un objeto Array con los días laborables de la semana (Lunes a Viernes) y utiliza un método del objeto para recorrer el array y convertir cada elemento de ese array a mayúsculas. 

Usa console.table para ver el resultado.

No se trata de usar un bucle, debes usar un método del objeto Array.

No debes copiar el array en otro nuevo.

Los objetos string tienen el método toUpperCase() para cambiar a mayúsculas

// Solución 02:


let arr = ["falso", "verdadero"]
let num = parseInt(prompt("Introduce un número entero:"))
if(num >= 0 && num <= 9){
  alert("El número está en el rango: " + arr[1])
}else{
  alert("El número está en el rango: " + arr[0])
}


//******************************************************************************

* Ej 03

Crea un array para albergar al menos 10 números enteros cualesquiera, 
luego rellena el array (o créalo ya con los valores). 

El ejercicio trata de crear a partir de este array otros dos uno con los números 
pares y otro con los impares. 

- No debes usar bucles, usa el método del array qe creas más apropiado.
- No debes usar bucles, mira el método más apropiado para crear un array a partir de otro.

- Un número es par si al dividirlo por 2 el resto es 0 (num%2 es 0)

// Solución 03

// /**
// * Función para sumar los valores de un arr si son números
// * @param {Array} arr 
// * @returns {Number} valor de la suma
// * /

// function sumaLista(arr){
//   let suma = 0
//   for(let i = 0; i<arr.length; i++){
//     // En caso de que el elemento del arr no sea número, lo ignora en la suma
//     if(!isNaN(arr[i]))
//     {
//       suma += arr[i]
//     }
//   }
//   return suma
// }

//******************************************************************************
* Ej 04

Crea un array de al menos 10 elementos para guardar números enteros. 

Usa un método para obtener la suma de los números pares y la de los números impares.

Se trata de reducir el array a un número obtenido como suma de los pares en un caso y delos impares en el otro.

// Solución 04

let num, arr = [], pares = 0, impares = 0;
do{
  num = parseInt(prompt("Introduce un número entero:"))
  if(!isNaN(num) && num != 0){
    if(num % 2 == 0){ pares++ }
    else { impares++ }
    arr.push(num)
  }
}while(num != 0)
alert(`
  ${arr}
  pares: ${pares}
  impares: ${impares}
`)

//******************************************************************************
* Ej 05

Crea un array bidimensional para almacenar nombre y calificación de un grupo de asistentes a un curso. Una vez creado rellénalo con al menos 4 elementos y luego ordénalos por orden crecientes de las calificaciones. 
Por ejemplo: Juan 5,Luisa 7, Ana 4, Pedro 3. al ordenarlo debe quedar: Luisa 7, Juan 7, Ana 4, Pedro 3.  

// Solución 05

// Opción 1 con métodos de array:

// /**
//  * Función que calcula el mínimo en valor o índice de un array
//  * @param {Array} arr 
//  * @param {String} param param puede ser "v" o "i"
//  * @returns {Number} valor mínimo si param es "v" o índice del mínimo si param es "i"
//  * /
// function min(arr, param){
//   if(param == "v"){
//     return Math.min(...arr)
//   }else if(param == "i"){
//     let valor = Math.min(...arr)
//     return arr.indexOf(valor)
//   }else{
//     // el param es incorrecto
//     return NaN
//   }
// }

// // Opción 2 - diversión con bucles:
// function min2(arr, param){
//   let min = Infinity, indice = -Infinity
//   if(param == "v"){
//     for(let i = 0; i<arr.length; i++){
//       let num = arr[i]
//       if(num < min){
//         min = num 
//       }
//     }
//     return min
//   }
//   if(param == "i"){
//     for(let i = 0; i<arr.length; i++){
//       let num = arr[i]
//       if(num < min){
//         min = num 
//         indice = i
//       }
//     }
//     return indice
//   }
//   if(param != "v" || param != "i"){
//     return NaN
//   }
// }

//******************************************************************************
* Ej 06

En este ejercicio debes crear dos arrays para representar dos equipos de trabajo. Al primer array le llamaremos ocupados y al segundo libres. Ambos están llenos con 5 nombres.

Debes crear una función rotar(lst1, lst2) que pase el primer nombre de la lista lst1 a l final de lst2, y luego el primero de la lst2 a l final de lst1.

Para ver que funciona escribe los arrays antes y después de usar esta función.

Por ejemplo: Inicialmente tenemos ocupados: Pedro, Luisa, Juan, Ana y libres Marina, Jose, Alba, Felipe.
Tras llamar a la función de ocupados sale Pedro y entra Marina. Y de libres sale Marina y entra Pedro.
Quedarán en ocupados Luisa, Juan, Ana , Marina y en libres Jose, Alba, Felipe, Pedro.

// Solución 06

function verificarLetra(letra, arr){
  for(let i = 0; i<arr.length; i++){
    if(arr[i] == letra){
      return true
    }
  }
  return false
}
let letra = "a"
let arr = ["a", "b", "c"]
console.log(letra, arr, "letra en arr?" + verificarLetra(letra, arr)) // true
letra = "z"
console.log(letra, arr, "letra en arr? " + verificarLetra(letra, arr)) // false

//******************************************************************************
* Ej 07

Tenemos dos listas de asistentes a dos cursos: html y css. Queremos obtener una lsita de los asistentes a ambos cursos. La lista estará ordenada.
Por ejemplo html = ['Pedro','Juan','Ana'], y css=['Luis','Juan', 'Ana','María'] la lista obtenida sería ['Juan', 'Ana'].

// Solución 07:

// Parte 1
function separarPorGuiones(arr){
  let str = ""
  for(let i = 0; i<arr.length; i++){
    str += arr[i] + "-"
  }
  return str.slice(0,-1) // Quitamos el último guión que me coloca el bucle
}
let arr = [1, 2, 3]
let str = separarPorGuiones(arr)
console.log(str)

// Parte 2
function esVocal(letra){
  const vocales = ["a", "e", "i", "o", "u"]
  if(vocales.includes(letra.toLowerCase())){
    return true
  }
  return false
}
let letra = "a"
console.log(letra, "Es vocal? " + esVocal(letra)) // true
letra = "z"
console.log(letra, "Es vocal? " + esVocal(letra)) // false
letra = "E"
console.log(letra, "Es vocal? " + esVocal(letra)) // true

//******************************************************************************
* Ej 08

Tienes que crear un script que gestione una lista de la compra. Para ello tienes dos listas de artículos: compra, pendiente. Cada elemento de la lista compra es un objeto con dos propiedades: nombre del artículo y estado. Estado es un booleano true si el artículo se compró, false en caso contrario. Pendiente es una lista con los nombres de los artículos que faltan por comprar. La función que debes crear recibe como argumento la lista de compra y devuelve la lista de pendientes.
Por ejemplo tienes la lista compra con Naranjas: false, Manzanas:true, Peras:false, Plátanos: true. La lista pendientes contendrá Naranjas y Peras.

function separarPorGuiones2(arr, char = "-"){
  let str = ""
  for(let i = 0; i<arr.length; i++){
    if(i!=arr.length-1){
      str += arr[i] + char
    }else{
      str += arr[i]
    }
  }
  return str // Quitamos el último guión que me coloca el bucle
}
let arr = [1, 2, 3]
let str = separarPorGuiones2(arr) // -
console.log(str)
arr = [1, 2, 3]
str = separarPorGuiones2(arr, "-o-") // -
console.log(str)

//******************************************************************************
* Ej 09

En este ejercicio partimos de dos arrays: artículos que contiene nombres de artículos y precios que contiene lo precios correspondientes de cada artículo. Se trata de crear una función precio(art) que lleva como argumento el nombre de un artículo y devuelve el precio correspondiente. si el artículo no existe devolverá -1.
Una lista podría ser Naranjas, Peras, Bananas y la de precios sería 10, 12, 15. La llamada precios('Peras') deberá devolver 12 para el precio de las peras..

Solución 09:

const horarios = [
  ["lunes", "María"], 
  ["martes", "Luis"], 
  ["miércoles", "Antonia"], 
  ["jueves", "Pedro"], 
  ["viernes", "Marisa"]
]

function buscarEncargado(diaSemana){
  for(let i = 0; i<horarios.length; i++){
    let [dia, encargado] = horarios[i]
    if(dia == diaSemana.toLowerCase()){
      return encargado
    }
  }
  return "No hay servicio"
}
let dia = "martes"
console.log(buscarEncargado(dia)) // Luis
dia = "sábado"
console.log(buscarEncargado(dia)) // No hay servicio

//******************************************************************************
* Ej 10

Tienes una lista de objetos con los nombres de los miembros de una familia. Este script debe devolver dos objetos con los datos (nombre y edad) del miembro de mayor edad y del de menor edad.
Por ejemplo si la familia está compeusta por Juan: 34, Pepa: 40, Ana: 12 y Luis: 14, lel script dirá "Miembro mayor Pepa de 40  añños y Miembro más joven Ana 12 años.

Solución 10:

const datos = [
  ["monitor LG", 125],
  ["teclado gaming", 50],
  ["ratón Corsair", 19.99]
]

function buscarPrecio(producto){
  for(let i = 0; i<datos.length; i++){
    let dato = datos[i] // arr -> 0 es el nombre del producto, 1 -> precio
    let nombreProducto = dato[0]
    if(nombreProducto.includes(producto)){
      return dato[1] // precio
    }else{
      return NaN
    }
  }
}
let producto = "monitor LG"
let precio = buscarPrecio(producto)
console.log(producto, precio) // 125
producto = "monitor"
precio = buscarPrecio(producto)
console.log(producto, precio) // 125
producto = "monitor$"
precio = buscarPrecio(producto)
console.log(producto, precio) // NaN

*/

