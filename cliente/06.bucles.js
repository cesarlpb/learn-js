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

// for y variantes

// while y do while






