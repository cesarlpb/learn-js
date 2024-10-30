// class := plantilla para crear objetos
class Car {
    // constructor := método que se llama primero cuando 
    // creas (instancias la clase) un objeto
    // se usa para inicializar el objeto con valores necesarios
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

let coche = new Car() // name y year son undefined
let coche2 = new Car("Ford", 2024)      // valores iniciales
let coche3 = new Car("Mazda", "2015")   // no hay control de tipos :)

// append de obj a string en automático:
$("p1").innerText += " " + coche2;
$("p2").innerText += " " + JSON.stringify(coche2);
$("p3").innerText += " " + JSON.stringify(coche2, null, 4);

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