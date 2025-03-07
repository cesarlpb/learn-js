// Ej 02

/* Crea un objeto Array con los días laborables de la semana (Lunes a Viernes) y utiliza un método del objeto para recorrer el array y convertir cada elemento de ese array a mayúsculas. 

- Usa console.table() para ver el resultado.

- No se trata de usar un bucle, debes usar un método del objeto Array.

- No debes copiar el array en otro nuevo.

Los objetos string tienen el método toUpperCase() para cambiar a mayúsculas
*/

// Alternativas:
// - podríamos hacer otro arr donde colocamos cada dato en mayúsculas
// - podemos usar un bucle for o while
// - podemos usar un método de Array: 
//   - forEach() (similar a bucle) o 
//   - el map() (aplicar una fn a cada elemento del arr)

const diasLaborables = [
  "lunes", "martes", "miércoles", "jueves", "viernes"
]

// usando un bucle
console.log("Usando bucle for:")
for(let i = 0; i < diasLaborables.length; i++){
  // cada elemento lo cambiamos por si mismo en mayúsculas:
  diasLaborables[i] = diasLaborables[i].toUpperCase();
}
console.table(diasLaborables);
// sin usar bucle

  // forEach
  console.log("Usando forEach:")
  const diasLaborables2 = [
    "lunes", "martes", "miércoles", "jueves", "viernes"
  ]
  diasLaborables.forEach(function(dia, i){
    // console.log(dia.toUpperCase()) // debug
    
    // guardamos en este arr la transformación:
    // output2.push(dia.toUpperCase());

    // sin crear otro array, modificamos el arr original:
    diasLaborables2[i] = diasLaborables2[i].toUpperCase();
  });
  console.table(diasLaborables2);
  
  // map
  console.log("Usando map:")
  let diasLaborables3 = [
    "lunes", "martes", "miércoles", "jueves", "viernes"
  ]
  diasLaborables3 = diasLaborables3.map(function(dia){
    return dia.toUpperCase()
  });
  console.table(diasLaborables3);

// Mi punto de vista...

// lo más simple de pensar o entender, puede ser hacer un bucle y modificar
// cada elemento por índice

// -- una vez que eso está claro --
// podemos apreciar la ventaja de forEach, map...