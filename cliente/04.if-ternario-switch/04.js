// En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua

/*
    Menú

    carne
        vino tinto
    pescado
        vino blanco
    verdura
        agua
    else
        opciones: elija carne, pescado o verdura

*/

// Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.

// inputs
let plato = prompt("Indique el plato (carne, pescado o verdura):");
let mensaje = "";

// if - else if - else
    // if (plato == "carne"){
    //     mensaje = "Vino tinto";
    // } else if (plato == "pescado"){
    //     mensaje = "Vino blanco";
    // } else if (plato == "verdura"){
    //     mensaje = "Agua";
    // } else {
    //     mensaje = "Debes elegir carne, pescado o verdura";
    // }
    
// switch
    // switch(plato){
    //     case "carne":
    //         mensaje = "Acompáñalo con vino tinto";
    //         break;
    //     case "pescado":
    //         mensaje = "Acompáñalo con vino blanco";
    //         break;
    //     case "verdura":
    //         mensaje = "Acompáñalo con agua";
    //         break;
    //     default:
    //         mensaje = "Debes elegir carne, pescado o verdura";
    // }

// ternario

    plato == "carne" 
        ? mensaje = "Bebida: vino tinto" 
        : plato == "pescado" 
            ? mensaje = "Bebida: vino blanco" 
            : plato == "verdura" 
                ? mensaje = "Bebida: agua" 
                : mensaje = "Debes elegir carne, pescado o verdura";

// outputs
alert(mensaje);