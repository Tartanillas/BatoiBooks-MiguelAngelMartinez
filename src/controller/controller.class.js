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
        await this.model.modules.populate()
        this.model.users.populate()
        this.model.books.populate()
        this.view.renderModulesOptions(this.model.modules.data)
    }

    handleSubmitBook(payload){
        alert('form enviado')
        console.log(payload);
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