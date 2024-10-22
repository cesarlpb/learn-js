// Vamos a sumar los 100 primeros números enteros

// suma = 1 + 2 + ... + 100 = 5050

// for

let suma = 0;

// declaramos variable contador e iniciamos a 0
// condición de parada / fin
// incremento: ++ suma 1 y el -- resta 1
for(let i = 0; i <= 100; i++){
    suma = suma + i;
}
console.log(suma);

// Modificación: vamos a sumar solo los números pares
// 0 vale como par

suma = 0; // reseteo la variable

// cambiamos el incremento a 2 unidades
for(let i = 0; i <= 100; i += 2){
    suma = suma + i;
}
console.log(suma);

// alternativa con if

suma = 0; // reseteo la variable

// cambiamos el incremento a 2 unidades
for(let i = 0; i <= 100; i++){
    if (i % 2 == 0){
        // i es par
        suma = suma + i;
    }
    // si es impar, no se suma
    // no se coloca else
}
console.log(suma);