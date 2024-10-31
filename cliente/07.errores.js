class TypeError extends Error {
    // clase de error custom para errores de tipo
    constructor(message){
        super(message);
        this.message = message;
    }
}

// class ValidationError...
