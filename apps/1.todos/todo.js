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
        // Leer del localStorage
        // return del array
        return JSON.parse(localStorage.getItem("todos"));
    }
    static getOne(id){
        // return de un elemento si existe por id
        return JSON.parse(localStorage.getItem("todos")).
        filter(todo => todo.id == id);
    }
    static editOne(id, title, description, date){
        // CHALLENGE
    }
    static deleteOne(id){
        const currentTodos = Todo.getAll();
        const updatedTodos = currentTodos.filter(todo => todo.id != id)
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
}