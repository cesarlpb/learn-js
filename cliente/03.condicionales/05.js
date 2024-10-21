// En este ejemplo el usuario tecleará dos números. 

// Debe devolver la diferencia entre el mayor y el menor

let a = Number(prompt("Introduce el primer número:"));
let b = Number(prompt("Introduce el segundo número:"));

// Incluimos el caso de igual en la primera condición (simplificación)
if (a >= b){
    let diferencia = a - b;
    alert("Diferencia: " + diferencia);
} else {
    let diferencia = b - a;
    alert("Diferencia: " + diferencia);
}