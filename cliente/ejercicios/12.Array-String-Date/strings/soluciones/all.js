// // Ej 00: Crea una función que reciba como argumento una cadena de caracteres y devuelva una cadena con todas las vocales y el número de veces que aparece cada una en la cadena argumento. Procura usar prioritariamente los métodos del objeto string. Ejemplo: cuentaVocales("Hola soy Pepe") deberá imprimir a:1, e:2, i:0, o:2, u:0
// // ********************************************************************************
// // Propuesta de solución:
// function cuentaVocales(cadena) {
//   let vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };
//   for (let char of cadena.toLowerCase()) {
//     if (vocales.hasOwnProperty(char)) {
//       vocales[char]++;
//     }
//   }
//   let resultado = "";
//   for (let v in vocales) {
//     resultado += `${v}:${vocales[v]}, `;
//   }
//   return resultado.slice(0, -2);
// }

// // Ej 01: En esta ocasión se trata de crear una función que reciba como argumento una frase con letras y números. La función debe devolver la suma de todos los dígitos contenidos en la frase. Al ejecutar cambiaCars("Estamos a 7 días de navidad y faltan 10 días para fin del año 2022"), deberá devolver el número 14 (7+1+0+2+0+2+2)
// // ********************************************************************************
// // Propuesta de solución:
// function sumaDigitos(frase) {
//   let suma = 0;
//   for (let char of frase) {
//     if (!isNaN(char) && char !== " ") {
//       suma += parseInt(char);
//     }
//   }
//   return suma;
// }

// // Ej 02: Crea una función javascript que reciba como argumento una frase y que devuelva el número de espacios, dígitos y letras contenidos en la frase. Puedes usar expresiones regulares. Si llamo a la función contarCars("Si, hoy es dia 10") debería devolver 2 dígitos, 4 espacios y 10 letras
// // ********************************************************************************
// // Propuesta de solución:
// function contarCars(frase) {
//   let espacios = (frase.match(/ /g) || []).length;
//   let digitos = (frase.match(/\d/g) || []).length;
//   let letras = (frase.match(/[a-zA-Z]/g) || []).length;
//   return { digitos, espacios, letras };
// }

// // Ej 03: Escribe una función recursiva que cuente el número de veces que un carácter dado aparece en una cadena. La función recibe como argumentos la cadena y el carácter buscado. Por ejemplo: contarLetra("Hoy es martes", 'e') devolverá 2 porque hay dos letras "e" en la cadena.
// // ********************************************************************************
// // Propuesta de solución:
// function contarLetra(cadena, letra) {
//   if (cadena.length === 0) return 0;
//   return (cadena[0] === letra ? 1 : 0) + contarLetra(cadena.slice(1), letra);
// }

// // Ej 04: Escribe una función que reciba como argumento una frase y devuelva la misma frase pero con la inicial de cada palabra en mayúsculas. Por ejemplo: cambInicial("pero no tengo hambre ") debería devolver la frase "Pero No Tengo Hambre"
// // ********************************************************************************
// // Propuesta de solución:
// function cambInicial(frase) {
//   return frase
//     .split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// // Ej 05: Se trata de crear una función que decodifique un código de producto. El código contiene tres partes separadas por un guión: 
// // Dos caracteres (CP: cliente particular, CE: empresa), dos dígitos (10 Local, 11 Autonómico, 12 Nacional, 20 Internacional) y una cifra que indica el número de años de antigüedad del cliente. Si el código es erróneo, la función deberá informar del tipo de error o errores. Por ejemplo: descifrar("CP-12-3") deberá devolver "Cliente particular nacional con 3 años de antigüedad"
// // ********************************************************************************
// // Propuesta de solución:
// function descifrar(codigo) {
//   let partes = codigo.split("-");
//   if (partes.length !== 3) return "Error: Formato incorrecto";
  
//   let [tipo, region, antiguedad] = partes;
//   let tipoMap = { CP: "Cliente particular", CE: "Empresa" };
//   let regionMap = { "10": "Local", "11": "Autonómico", "12": "Nacional", "20": "Internacional" };
  
//   if (!tipoMap[tipo]) return "Error: Tipo de cliente desconocido";
//   if (!regionMap[region]) return "Error: Código de región desconocido";
//   if (isNaN(antiguedad)) return "Error: Antigüedad no es un número";
  
//   return `${tipoMap[tipo]} ${regionMap[region]} con ${antiguedad} años de antigüedad`;
// }

// // Ej 06: Diseña una función que sea capaz de encontrar los caracteres comunes entre dos palabras. La función recibe como argumentos dos palabras o frases y devuelve una cadena con los caracteres que haya en común entre ambas, ordenados de menor a mayor. Se desechan los espacios en blanco y no se tiene en cuenta el caso (mayúsculas o minúsculas). Por ejemplo: comunes("Ciudad", "Cuidar") debería devolver "acdiu"
// // ********************************************************************************
// // Propuesta de solución:
// function comunes(palabra1, palabra2) {
//   let set1 = new Set(palabra1.toLowerCase().replace(/\s/g, ""));
//   let set2 = new Set(palabra2.toLowerCase().replace(/\s/g, ""));
//   let comunes = [...set1].filter(char => set2.has(char)).sort();
//   return comunes.join("");
// }

// // Ej 07: Escribe una función javascript que acepte como argumento una cadena de caracteres y reúna los espacios repetidos en un solo espacio. Resolverlo sin usar expresiones regulares ni arrays, solo el objeto string. Por ejemplo: unirEspacios("HTML       es      muy  fácil") deberá devolver "HTML es my fácil"
// // ********************************************************************************
// // Propuesta de solución:
// function unirEspacios(cadena) {
//   let resultado = "";
//   let ultimoEspacio = false;
//   for (let i = 0; i < cadena.length; i++) {
//     if (cadena[i] === " ") {
//       if (!ultimoEspacio) {
//         resultado += " ";
//         ultimoEspacio = true;
//       }
//     } else {
//       resultado += cadena[i];
//       ultimoEspacio = false;
//     }
//   }
//   return resultado;
// }

// // Ej 08: Crea una función que reciba como parámetro una lista de palabras separadas por coma. La función deberá agrupar las palabras que comienzan por la misma letra en objetos de la forma inicial: lista de palabras. No se debe distinguir entre mayúsculas y minúsculas, pero las palabras deben mantener su tipo de mayúsculas o minúsculas. Ejemplo: agrupar("Avion, avispa, tigre, leon, Tejón, lince, abeja, abejorro") debería devolver {a: "abeja, abejorro, Avion, avispa", l: "leon, lince", t: "Tejón, tigre"}
// // ********************************************************************************
// // Propuesta de solución:
// function agrupar(lista) {
//   let palabras = lista.split(",").map(p => p.trim());
//   let grupos = {};
//   palabras.forEach(p => {
//     let inicial = p[0].toLowerCase();
//     if (!grupos[inicial]) {
//       grupos[inicial] = [];
//     }
//     grupos[inicial].push(p);
//   });
//   for (let key in grupos) {
//     grupos[key] = grupos[key].join(", ");
//   }
//   return grupos;
// }

// // Ej 09: Esta función recibirá como argumento un texto con información. El texto es una cadena en la que aparecen pares de la forma "nombre dato: valor dato". La función debe convertir esta cadena en un objeto con campos identificados con "nombre dato" y valores dados por "valor dato". Ejemplo: leeDato("nombre: juan, apellidos: Perez Sanchez, edad: 10, nivel: base") deberá dar lugar al objeto {nombre: "juan", apellidos:"Perez Sanchez", edad: 10, nivel:"base"}
// // ********************************************************************************
// // Propuesta de solución:
// function leeDato(texto) {
//   let obj = {};
//   let pares = texto.split(",");
//   pares.forEach(par => {
//     let [clave, valor] = par.split(":").map(s => s.trim());
//     if (!isNaN(valor)) {
//       valor = Number(valor);
//     }
//     obj[clave] = valor;
//   });
//   return obj;
// }

// // Ej 10: Debes crear una función que reciba tres argumentos: una frase y dos palabras. La función insertará la segunda palabra detrás de la primera, separándolas con un espacio antes y después. Si la primera palabra no se encuentra en la frase, se devuelve la frase original. Por ejemplo: insertar("nombre:,edad 30:", "nombre", "Juan") deberá devolver "nombre: Juan, edad 30:"
// // ********************************************************************************
// // Propuesta de solución:
// function insertar(frase, palabra1, palabra2) {
//   let indice = frase.indexOf(palabra1);
//   if (indice === -1) return frase;
//   let posFinal = indice + palabra1.length;
//   return frase.slice(0, posFinal) + " " + palabra2 + " " + frase.slice(posFinal);
// }
