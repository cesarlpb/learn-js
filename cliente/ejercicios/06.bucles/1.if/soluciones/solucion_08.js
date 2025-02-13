/*
En un tramo de un rally los conductores no deben ir ni demasiado rápido ni 
demasiado lentos. 

Este ejercicio debe tomar la longitud del tramo en kilómetros 
y el tiempo empleado, si la velocidad está entre 40 y 60 km/h el conductor pasa 
la prueba en caso contrario es descalificado.
*/

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables necesarias (inputs)
let longitud = Number(prompt("Introduce la longitud del tramo (km):"));
let tiempo   = Number(prompt("Introduce el tiempo empleado en el tramo (h):"));
let velocidad= longitud / tiempo; // km / h -> velocidad = longitud (km) / tiempo (h)
// 2. Realizamos operaciones y bucles necesarios
console.log(velocidad, "km / h")
if( velocidad < 40 || velocidad > 60 ){
  console.log("❌ Estás descalificado");
} else {
  console.log("✅ Pasas la prueba");
}
// 3. Escribimos el resultado (output)
// --

// 4. Pruebas
// Probamos combinaciones de longitud y tiempo dentro y fuera del intervalo de
// velocidad 40 - 60 km / 