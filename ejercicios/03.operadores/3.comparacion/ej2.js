// Ejercicio 02

// Pedimos edad por prompt:
let edad = Number(prompt("Ingrese su edad: ")); // Convertimos a número
// Comprobamos si es mayor de 18 años:
console.log("¿Es mayor de 18?", edad > 18);
// Comprobamos si es menor de 18 años:
console.log("¿Es menor de 18?", edad < 18);
// Usamos un AND (&&) para comprobar si es la está entre 25 y 35 años:
console.log("¿Está entre 25 y 35 años?", edad >= 25 && edad <= 35);
// Comparamos si es mayor de 65 y colocamos un NOT (!) para negar el resultado:
console.log("¿No es mayor de 65 años?", !(edad > 65));
// Comprobamos si tiene entre 13 y 24 años:
console.log("¿Tiene entre 13 y 24 años?", edad >= 13 && edad <= 24);

// Conclusión: a veces, se puede elegir entre cambiar el sentido de la comparación o negar el resultado de la comparación como en el caso de los 65 años. Elegid la forma más sencilla pero comprobad que funcion bien.
