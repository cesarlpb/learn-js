// En una sala de juegos existen cuatro salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.

let salas = ["Consolas", "Juegos 2D", "Juegos 3D", "Realidad Virtual"]
let creditos = parseInt(prompt("Introduce tus créditos:"));
let mensaje = "";

switch(creditos){
    case 4:
        mensaje = "todas las salas"
        break;
    case 3:
        mensaje = "Consolas, Juegos 2D, Juegos 3D"
        break;
    case 2:
        mensaje = "Consolas, Juegos 2D"
        break;
    case 1:
        mensaje = "Consolas"
        break;
}

alert("Puedes entrar en: " + mensaje)
