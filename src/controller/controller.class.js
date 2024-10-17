import Books from "../model/books.class";
import Modules from "../model/modules.class";
import Users from "../model/users.class";
import View from "../view/view.class"

export default class Controller {
    constructor() {
        this.model = {
            modules: new Modules(),
            users: new Users(),
            books: new Books(),
        };
        this.view = new View();
    }

    async init(){
        this.view.setBookSubmitHandler(this.handleSubmitBook.bind(this));
        this.view.setBookRemoveHandler(this.handleRemoveBook.bind(this));
        try {
            await this.model.modules.populate()
            await this.model.users.populate()
            await this.model.books.populate()
            this.view.renderModulesOptions(this.model.modules.data)
            this.model.books.data.forEach(libro => {
                this.view.renderBook(libro);
            });
        } catch (err) {
            this.view.renderMessage(err);
        }
    }

    handleSubmitBook(payload){
        alert('form enviado')
        try {
            this.model.books.addBook(payload);
            console.log('Se ha añadido el libro con éxito');
        } catch(err) {
            this.view.renderMessage(err);
        }
    }

    handleRemoveBook(bookId){
        alert('form enviado')
        try {
            this.model.books.removeBook(bookId);
            this.view.removeBook(bookId);
            console.log('Se ha eliminado el libro con ID: ' + bookId);
        } catch(err) {
            this.view.renderMessage(err);
        }
    }

}