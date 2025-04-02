// Variable global para el contador
let counter = 0;
const display = document.getElementById("display");
// Añadimos event listener a cada botón
// Seleccionamos los botones:
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
// Hacemos las funciones para incrementar y decrementar
incrementBtn.addEventListener("click", increment)
decrementBtn.addEventListener("click", decrement)
// Colocamos las fn en los listeners
function increment(){
    counter += 1;
    display.textContent = `${counter}`;
}
function decrement(){
    counter -= 1;
    display.textContent = `${counter}`;
}
document.getElementById("reset-btn").addEventListener("click",() => window.location.reload())