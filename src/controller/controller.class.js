import Books from "../model/books.class"
import Modules from "../model/modules.class"
import Users from "../model/users.class"
import View from "../view/view.class"

export default class Controller {
    constructor() {
        this.model = {
            modules: new Modules(),
            users: new Users(),
            books: new Books(),
        }
        this.view = new View()
    }

    async init(){
        this.view.setBookSubmitHandler(this.handleSubmitBook.bind(this))
        this.view.setBookButtonHandler(this.handleBookButton.bind(this))
        //this.view.setBookRemoveHandler(this.handleRemoveBook.bind(this))
        try {
            await this.model.modules.populate()
            await this.model.users.populate()
            await this.model.books.populate()
            this.view.renderModulesOptions(this.model.modules.data)
            this.model.books.data.forEach(libro => {
                this.view.renderBook(libro)
            })
        } catch (err) {
            this.view.renderMessage(err, 'fail')
        }
    }

    async handleSubmitBook(payload){
        try {
            let libro = await this.model.books.addBook(payload)
            this.view.renderBook(libro)
            this.view.renderMessage('Se ha añadido el libro con éxito', 'success')
        } catch(err) {
            this.view.renderMessage(err, 'fail')
        }
    }

    async handleRemoveBook(bookId){
        try {
            let libro = this.model.books.getBookById(bookId);
            let respuesta = confirm("¿Estás seguro que deseas borrar el libro con ID: " + bookId + " y módulo: " + libro.moduleCode)
            if(respuesta === true) {
                await this.model.books.removeBook(bookId)
                this.view.removeBook(bookId)
                this.view.renderMessage('Se ha eliminado el libro con ID: ' + bookId, 'success')
            }
        } catch(err) {
            this.view.renderMessage(err, 'fail')
        }
    }

    handleBookButton(type, id) {
        switch (type) {
            case 'remove':
                this.handleRemoveBook(id)
                break
            case 'edit':
                this.handleEditBook(id)
            case 'addCart':
                this.handleAddCartBook(id)
        }
    }
}