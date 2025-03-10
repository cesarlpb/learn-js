// Ejercicios de Métodos de String

// Ej 00: Crea una función que reciba como argumento una cadena de caracteres y devuelva una cadena con todas las vocales y el número de veces que aparece cada una en la cadena argumento. Procura usar prioritariamente los métodos del objeto string. Ejemplo: cuentaVocales("Hola soy Pepe") deberá imprimir a:1, e:2, i:0, o:2, u:0
// ********************************************************************************

 // Ej 01: En esta ocasión se trata de crear una función que reciba como argumento una frase con letras y números. La función debe devolver la suma de todos los dígitos contenidos en la frase. Al ejecutar cambiaCars("Estamos a 7 días de navidad y faltan 10 días para fin del año 2022"), deberá devolver el número 14 (7+1+0+2+0+2+2)
// ********************************************************************************

 // Ej 02: Crea una función javascript que reciba como argumento una frase y que devuelva el número de espacios, dígitos y letras contenidos en la frase. Puedes usar expresiones regulares. Si llamo a la función contarCars("Si, hoy es dia 10") debería devolver 2 dígitos, 4 espacios y 10 letras
// ********************************************************************************

 // Ej 03: Escribe una función recursiva que cuente el número de veces que un carácter dado aparece en una cadena. La función recibe como argumentos la cadena y el carácter buscado. Por ejemplo: contarLetra("Hoy es martes", 'e') devolverá 2 porque hay dos letras "e" en la cadena.
// ********************************************************************************

 // Ej 04: Escribe una función que reciba como argumento una frase y devuelva la misma frase pero con la inicial de cada palabra en mayúsculas. Por ejemplo: cambInicial("pero no tengo hambre ") debería devolver la frase "Pero No Tengo Hambre"
// ********************************************************************************

 // Ej 05: Se trata de crear una función que decodifique un código de producto. El código contiene tres partes separadas por un guión: Dos caracteres (CP: cliente particular, CE: empresa), dos dígitos (10 Local, 11 Autonómico, 12 Nacional, 20 Internacional) y una cifra que indica el número de años de antigüedad del cliente. Si el código es erróneo, la función deberá informar del tipo de error o errores. Por ejemplo: descifrar("CP-12-3") deberá devolver "Cliente particular nacional con 3 años de antigüedad"
// ********************************************************************************

 // Ej 06: Diseña una función que sea capaz de encontrar los caracteres comunes entre dos palabras. La función recibe como argumentos dos palabras o frases y devuelve una cadena con los caracteres que haya en común entre ambas, ordenados de menor a mayor. Se desechan los espacios en blanco y no se tiene en cuenta el caso (mayúsculas o minúsculas). Por ejemplo: comunes("Ciudad", "Cuidar") debería devolver "acdiu"
// ********************************************************************************

 // Ej 07: Escribe una función javascript que acepte como argumento una cadena de caracteres y reúna los espacios repetidos en un solo espacio. Resolverlo sin usar expresiones regulares ni arrays, solo el objeto string. Por ejemplo: unirEspacios("HTML       es      muy  fácil") deberá devolver "HTML es my fácil"
// ********************************************************************************

 // Ej 08: Crea una función que reciba como parámetro una lista de palabras separadas por coma. La función deberá agrupar las palabras que comienzan por la misma letra en objetos de la forma inicial: lista de palabras. No se debe distinguir entre mayúsculas y minúsculas, pero las palabras deben mantener su tipo de mayúsculas o minúsculas. Ejemplo: agrupar("Avion, avispa, tigre, leon, Tejón, lince, abeja, abejorro") debería devolver {a: "abeja, abejorro, Avion, avispa", l: "leon, lince", t: "Tejón, tigre"}
// ********************************************************************************

 // Ej 09: Esta función recibirá como argumento un texto con información. El texto es una cadena en la que aparecen pares de la forma "nombre dato: valor dato". La función debe convertir esta cadena en un objeto con campos identificados con "nombre dato" y valores dados por "valor dato". Ejemplo: leeDato("nombre: juan, apellidos: Perez Sanchez, edad: 10, nivel: base") deberá dar lugar al objeto {nombre: "juan", apellidos:"Perez Sanchez", edad: 10, nivel:"base"}
// ********************************************************************************

 // Ej 10: Debes crear una función que reciba tres argumentos: una frase y dos palabras. La función insertará la segunda palabra detrás de la primera, separándolas con un espacio antes y después. Si la primera palabra no se encuentra en la frase, se devuelve la frase original. Por ejemplo: insertar("nombre:,edad 30:", "nombre", "Juan") deberá devolver "nombre: Juan, edad 30:"
