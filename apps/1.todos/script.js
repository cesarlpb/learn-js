// Creamos una clase para hacer objetos Todo:
class Todo {

    // static := propiedad o método que pertenece
    // a la clase => se puede acceder o llamar SIN
    // crear (instanciar) un objeto de la clase
    
    constructor(_title, _description, _date){
        let localStorageCount = JSON.parse(localStorage.getItem("todos"))?.length || 0
        this.id = ++localStorageCount
        this.title = _title
        this.description = _description
        this.date = _date

        // Lo guardamos en el localStorage para
        // tener persistencia => si se actualiza la
        // página, el todo no se borra (de localStorage)
        const todos = localStorage.getItem("todos");
        if(todos){
            const todosArr = JSON.parse(todos);
            todosArr.push(
                {
                    id: this.id,
                    title: this.title,
                    description: this.description,
                    date: this.date
                }
            )
            localStorage.setItem("todos", JSON.stringify(todosArr));
        } else {
            // No hay todos => null
            const str = JSON.stringify([{
                id: this.id,
                title: this.title,
                description: this.description,
                date: this.date
            }])
            localStorage.setItem("todos", str)
        }

    }
    static getAll(){

    }
    static getOne(id){

    }
}
// Cambiar el comportamiento por defecto del form 
// (envía los datos a una ruta y recarga la página)
const form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(e){
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    // console.log de los datos
    console.log(title, description, date);
})

