// Ej 01

// Usando un bucle while escribir un script que pida un valor entero y cree una 
// lista con los números desde el 0 al valor tecleado. Luego deberá sacar esa 
// lista con un alert o console.log(). 
// 
// Los números se separarán por comas.  

// Si le doy el número 5 pues deberá contar 0,1,2,3,4,5

/******************************************************************************/

// Pasos para resolver

// Pedimos un número de entrada 
// Validamos el número (opcional)
// Creamos la salida (bucle while o for) y la escribimos 

// 1. Declaramos variables necesarias (inputs)
let num = Number.parseInt(prompt("Introduce un número positivo:"));

const SEPARADOR = ", "; // controlamos separación de números con esta constante
// 2. Realizamos operaciones y bucles necesarios

// bucle for
let output_for = "";
for(let i = 0; i <= num; i++){
  output_for += i;
  if(i < num){
    output_for += SEPARADOR;
  }
}

// bucle while
// El bucle while ejecuta instrucciones mientras una condición sea verdadera
let iteracion = 0; // <- valor inicial
let output_while = "";
console.log("antes del bucle while, iteración: ", iteracion);

console.groupCollapsed("Bucle while:");
console.log("iteración:")
while(iteracion <= num){
  // debug
  let debug = `valor inicial: ${iteracion}, `;
  
  /********* instrucciones del while ********/
  // intrucciones mientras la condición sea true
  output_while += iteracion;
  if(iteracion < num){
    output_while += SEPARADOR;
  }
  iteracion += 1; // incrementamos contador de iteraciones para llegar al límite después de num pasos
  /******************************************/
  
  // debug
  debug += `valor final: ${iteracion}`;
  console.log(debug)
}
console.groupEnd();

console.log("-- Final del bucle while --");
console.log("después del bucle while, iteración: ", iteracion); // num + 1 <- valor final

// Nota: tened en cuenta que iteración no es cero en este punto

// 3. Escribimos el resultado (output)
console.log("Salida for:");
console.log(output_for);

console.log("Salida while:");
console.log(output_while);