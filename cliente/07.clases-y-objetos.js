// class := plantilla para crear objetos
class Car {
    // constructor := método que se llama primero cuando 
    // creas (instancias la clase) un objeto
    // se usa para inicializar el objeto con valores necesarios
    constructor(_name, _year) {
        this.name = _name;
        // Modificación: validamos que year es número o convertible a número y lo guardamos como entero
        let yearEntero = parseInt(_year);
        if(Number.isNaN(yearEntero)){
            throw new TypeError("El campo year debe ser entero, se recibió: " + typeof(_year))
        }
        this.year = yearEntero; // no se crea el objeto si se arroja error

        // Lógica: al crearlo no está en marcha o arrancado por defecto:
        this.cocheArrancado = false;

        // Lógica: ubicación por defecto es casa
        this.ubicacion = "casa";
        
        console.log("Se ha creado el objeto con valores:", _name, _year);
    }

    // Métodos := funciones dentro de una clase que se pueden ejecutar a partir 
    // de los objetos creados o a partir de la clase
    arrancar(){
        this.cocheArrancado = true;
        alert(`Coche ${this.name} arrancado!!! 🚗`);
    }

    mover(destino){
        if(!this.cocheArrancado){
            alert("Tienes que arrancar el coche...");
        } else {
            this.ubicacion = destino;
            alert("El coche se ha desplazado a " + destino)
        }
    }

    aparcar(){
        this.cocheArrancado = false;
        this.ubicacion = "parking";
        alert("El coche se ha aparcado en " + this.ubicacion);
    }
  }

// Este objeto no se llega a crear:
// let coche = new Car() // name y year son undefined
// Estos objetos sí se crean:
let coche2 = new Car("Ford", 2024)      // valores iniciales
let coche3 = new Car("Mazda", "2015")   // no hay control de tipos :)

// append de obj a string en automático:
$("p1").innerText += " " + coche2;
$("p2").innerText += " " + JSON.stringify(coche2);
$("p3").innerText += " " + JSON.stringify(coche2, null, 4);

// Ejecutamos métodos:
// arrancamos:
coche2.arrancar();
// coche3.arrancar();
// movemos:
coche2.mover("Mercadona");
coche2.ubicacion;
// aparcar:
coche2.aparcar();
coche2.ubicacion;
coche2.cocheArrancado;

// Funciones:

// buena idea: hacer una función para formatear esta representación del objeto
let str = "";
let keys = Object.keys(coche2);
for(let item of keys){
    str += `\n${item}: ${coche2[item]}`;
}
$("p4").innerText += str;

/**
 * Imprime objeto como key: value
 * @param {Object} obj 
 * @returns {String}
 */
function imprimir(obj){
    let str = "";
    let keys = Object.keys(obj);
    for(let item of keys){
        str += `\n${item}: ${obj[item]}`;
    }
    return str;
}

function $(id){
    return document.getElementById(id);
}