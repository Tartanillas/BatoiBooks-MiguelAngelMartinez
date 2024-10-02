export default class Books {
    constructor() {
        this.data = [];
    }
    populate(datos) {
        this.data = datos;
    }
    addBook(libro) {
        this.data.push(libro);
    }
}