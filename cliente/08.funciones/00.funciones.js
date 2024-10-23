// Una función en Javascript es un bloque de código que se guarda en memoria y se puede ejecutar cuando lo necesitemos

// En cierta forma, son como variables con la capacidad de gestionar otras variables y memoria para la ejecución

// Hay varias ventajas al usar funciones:

// - Evitamos repetir código => cuando haya un error tienes un solo lugar para revisar

// - Las funciones tienen su propio ámbito, así no usamos solo el ámbito global (scope)

// - Hay un paradigma de programación que se basa en esto: programación funcional

/**
 * Fn saludar 
 * No tiene inputs / params
 * No devuelve nada => no hay return
 */
function saludar(){
    alert("Hola, ¿qué tal?");
}

/**
 * Fn que retorna el mensaje de saludo
 * @returns mensaje
 */
function saludarConReturn(){
    let mensaje = "Hola, ¿qué tal?";
    return mensaje;
}

/**
 * Fn que recibe un mensaje y hace alert
 * @param {String} mensaje para alert
 */
function saludarConInput(mensaje){
    alert(mensaje)
}

/**
 * Fn que recibe nombre de usuario para saludar
 * @param {String} usuario es solo el nombre
 * @returns saludo
 */
function saludarConInputOutput(usuario){
    return "Hola, " + usuario
}