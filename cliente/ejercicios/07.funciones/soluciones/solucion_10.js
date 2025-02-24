// Ej 10

// Escribe una función que devuelva el siglo al que correponde un año que se la 
// pasa como argumento. 
// 
// El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200....

// 103 -> II
// 1   -> I

// Por ejemplo si le pido siglo(1910) me dirá siglo 20

// function siglo(año){...}
// function convertirEnRomano(decimal){...}

// ¿output en números decimales o romanos?

/******************************************************************************/

// Pasos para resolver

// 1. Declaramos variables y constantes necesarias para el programa e inputs
let input = 0;
// 2. Definimos las funciones necesarias para el programa

// Simplificación: suponemos que nos pasan número de año válido
function calcularSiglo(año){
  // Idea: dividimos el año entre 100 y redondeamos al alza
  return Math.ceil(año / 100);
}
function convertirEnRomano(siglo){
  // I, ..., XXI ->  del 1 al 21
  
  // 1 I
  // 2 II
  // 3 III

  // 4 IV
  // 5 V
  // VI VII VIII 

  // 9 IX y 10 X
  
  // 11 XI
  // ... 19 XIX y 20 XX

  // ... 21 XXI

  if(siglo <= 10){
    // Idea: colocar bucles for para agrupar 1-3 y/o 5-8
    switch(siglo){
      case 1:
        return "I"
      case 2:
        return "II"
      case 3:
        return "III"
      case 4:
        return "IV"
      case 5:
        return "V"
      case 6: 
        return "VI"
      case 7:
        return "VII"
      case 8:
        return "VIII"
      case 9:
        return "IX"
      case 10:
        return "X"
    }
  }else if(siglo > 10 && siglo <= 20){
      // lo mismo que antes pero añdimos X delante
      // sabemos que los números son mayores a 10
      let unidades = siglo - 10;
      return "X" + convertirEnRomano(unidades);
  } else if (siglo > 20 && siglo <= 21){
      let unidades = siglo - 20;
      return "XX" + convertirEnRomano(unidades);
  }
}
function main(){
  input = Number.parseInt(prompt("Introduce el año para calcular siglo:"));
  let outputDecimal = calcularSiglo(input);
  let outputRomano = convertirEnRomano(outputDecimal)
  console.log(`El año ${input} pertenece al siglo ${outputDecimal} (${outputRomano})`);
}
// 3. Realizamos operaciones y bucles necesarios -> usando las funciones
main();
// 4. Escribimos el resultado (output) -> usando las funciones
// en main
// 5. Pruebas o casos conocidos de resultados correctos
// TODO