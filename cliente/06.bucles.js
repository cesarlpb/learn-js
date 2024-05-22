// Bucles
// Ejercicios de https://www.aulascript.com/evaluar/
// resueltos en https://github.com/cesarlpb/IFCT0609-CDM/tree/main/2.Modulo_2/JS

/* 
  Los bucles son instrucciones del lenguaje de programación que permiten ejecutar código bajo ciertas condiciones: true/false o mientras la cond sea true o un número N de veces
*/

// Aún no validamos el tipo de dato que nos pasan por prompt

// Comprobamos si una edad es mayor, menor o igual que 18
let edad = parseInt(prompt("Ingresa tu edad:"));

// Solo if
// No es necesario poner else
if(edad < 18){
  console.log("No puedes pasar");
}
// if + else
// else es el caso de false de la condición
if (edad < 18) {
  // solo aparece si es menor estricto:
  console.log("Eres menor de edad");
} else {
  // = o mayor
  console.log("Eres mayor de edad o tienes al menos 18")
}

// if + else if + else
// se pueden poner muchas condiciones adicionales con else if
if(edad < 18){
  console.log("Tienes menos de 18 años");
} else if (edad == 18){
  console.log("Tienes 18 años!!");
} else {
  console.log("Tienes más de 18 años!!");
}

// Varios else if:
let dia = prompt("Ingresa el día de la semana:");
if (dia == 'lunes'){
  console.log("Es lunes!");
} else if (dia == 'martes'){
  console.log("Es martes!");
} else if (dia == 'miércoles'){
  console.log("Es miércoles ._.");
} else if (dia == 'jueves'){
  console.log("Es jueves!");
} else if (dia == 'viernes'){
  console.log("Es viernes!!!");
} else {
  console.log("Es sábado o domingo")
}

// switch
// Sirve validar casos, sobre todo cuando los valores son conocidos
switch(dia.toLowerCase()){
  case 'lunes':
    console.log("Es lunes!");
    break;
  case 'martes':
    console.log("Es martes!");
    break;
  case 'miércoles':
    console.log("Es miércoles!");
    break;
  case 'jueves':
    console.log("Es jueves!");
    break;
  case 'viernes':
    console.log("Es viernes!");
    break;
  default:
    console.log("Es fin de semana");
}
// validamos el día pasado a minúsculas para maximizar compatibilidad con el input

// for y variantes

// for
// Se usa para repetir acciones un número de veces
// Normalmente, el número de veces es conocido

// for

// bucle que se repite 10 veces
for (let i = 0; i < 10; i++) {
  console.log("Iteración:", i)
}
// colocamos <=
for (let i = 0; i <= 10; i++) {
  console.log("Iteración:", i)
}
// cuenta atrás
for (let i = 10; i > 0; i--) {
  console.log("Iteración:", i)
}
// incluimos el 0:
for (let i = 10; i >= 0; i--) {
  console.log("Iteración:", i)
}
// Suma los 100 primeros enteros:
// Empezamos en el 0 y acabamos en el 100 (incluido)
let suma = 0;
for (let x = 0; x <= 100; x++){
  suma += x; // suma = suma + x;
}
console.log("Suma:", suma) // 5050
// Usando variables para el inicio y el final de la secuencia:
let inicio = 10;
let final = 20;
suma = 0; // declarar otra variable o resetear a 0
for (let x = inicio; x <= final; x++){
  suma += x;
}
console.log("Suma:", suma) // ??

// for in -> Object
let coche = {
  // key : value
  "matricula": "123",
  "dato random": "Hola",
  "año": 2099
}
for(let key in coche){
  // key value
  console.log(key, coche[key])
}
// Otra forma de sacar los keys y values:
const keys = Object.keys(coche);
const values = Object.values(coche);
for (let i = 0; i < keys.length; i++ ){
  console.log(keys[i], values[i])
}

// for of -> iterable o Array
for (let item of keys){
  console.log("key:", item)
}

// ¿Cuándo cada uno?
// Para objetos -> for in -> iteran todos los elementos
// Para arrays  -> for of -> iteran todos los elementos
// Para todo lo demás: for

// while y do while
// Mientras la condición sea true, el bucle continua
let i = 0;
while (i < 10) {
  console.log("Iteración:", i);
  i++; // i = i + 1;
}
// Cuenta atrás:
i = 10;
while (i >= 0) {
  console.log("Iteración:", i);
  i--; // i = i - 1;
}
// do while
// El while podría no ejecutarse:
i = 10;
while (i < 10) {
  console.log(i, new Date().toLocaleTimeString());
  i++;
}
// El do while me permite ASEGURAR una iteración:
i = 10;
do {
  console.log(i, new Date().toLocaleTimeString());
  i++;
} while(i < 10);



