// Cambiar el comportamiento por defecto del form 
// (envía los datos a una ruta y recarga la página)
const form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(e){
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    console.log(title, description, date);
})

// console.log de los datos