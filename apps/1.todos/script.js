// 
// clase Todo en todo.js
// 

// Cambiar el comportamiento por defecto del form 
// (envía los datos a una ruta y recarga la página)
const form = document.getElementsByTagName("form")[0];

// Solo tenemos formulario en /
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const date = document.getElementById("date").value;
        // console.log de los datos
        console.log(title, description, date); // debug
        const newTodo = new Todo(title, description, date) // autosave en localStorage
        /* para que se actualice la lista podemos añadir lógica aquí o 
        "simplemente" recargar la web para que se carguen los todos en cards y 
        se borren los campos del form */
        window.location.reload();
    });

    // Cards
    // Necesitamos la lista de todos:
    const todos = Todo.getAll()
    // Conseguimos el div para colocar la lista de cards:
    const container = document.querySelector("#lista");
    if (todos?.length > 0) {
        // Quitamos el texto por defecto:
        container.innerHTML = "";
        // Bucle para añadir cards:
        todos.forEach(({ id, title, description, date }) => {
            // const { id, title, description, date } = el
            const html = `
            <article class="card" data-id="${id}">
                <div>
                    <button onclick="editCard(this)">✏️ Editar</button>
                    <button onclick="borrarCard(this)">Borrar 🗙</button>
                </div>
                <a href="todos.html?id=${id}">
                    <h3 class="card-title"><span>${id}</span> - ${title}</h3>
                </a>
                <p class="card-description">${description}</p>
                <p class="card-date">${date}</p>
            </article>
            `;
            container.innerHTML += html;
        });
    }
}

function borrarCard(elemento) {
    const id = elemento.parentNode.parentNode.getAttribute("data-id");
    console.log(elemento.parentNode.parentNode, id);
    Todo.deleteOne(id);
    window.location.reload()
}

function editCard(elemento){
    // CHALLENGE
}
