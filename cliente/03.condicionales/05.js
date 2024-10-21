// En este ejemplo el usuario tecleará dos números. 

// Debe devolver la diferencia entre el mayor y el menor

let a = Number(prompt("Introduce el primer número:"));
let b = Number(prompt("Introduce el segundo número:"));

// Incluimos el caso de igual en la primera condición (simplificación)

// Modificación: añadimos condición para el igual
if(a == b){
    alert("Los números son iguales")
} else if (a > b){
    let diferencia = a - b;
    alert("Diferencia: " + diferencia);
} else {
    let diferencia = b - a;
    alert("Diferencia: " + diferencia);
}
// TODO: validar que no nos pasan datos no numéricos
// En caso de que no sean números presentamos mensaje de error o no se ejecuta el programa