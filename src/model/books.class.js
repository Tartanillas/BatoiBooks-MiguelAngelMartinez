import Book from './book.class';
const NOTES = "Apunts";
import { getDBBooks, addDBBook, removeDBBook, changeDBBook } from '../services/books.api';
export default class Books {
    constructor() {
        this.data = [];
    }
    async populate() {
        let arrayDatos = await getDBBooks();
        this.data = arrayDatos.map(item => new Book(item));
    }
    async addBook(book) {
        let libro = await addDBBook(book);
        let libroNuevo = new Book(libro);
        this.data.push(libroNuevo);
        return libroNuevo;
    }
    
    async removeBook(id) {
        await removeDBBook(id);
        let posicionLibro = this.getBookIndexById(id);
        this.data.splice(posicionLibro, 1);
    }

    async changeBook(libro) {
        await changeDBBook(libro);
        let indiceLibroAModificar = this.getBookIndexById(libro.id);
        let nuevoLibro = new Book(libro);
        this.data.splice(indiceLibroAModificar, 1, nuevoLibro);
        return nuevoLibro;
    }

    toString() {
        let cadena = "";
        this.data.forEach(element => {
            cadena += element.toString();
        });
        return cadena;
    }

    getBookById(number) {
        let libro = this.data.find((libro) => libro.id === number);
        if (!libro) {
            throw "No existe ningún libro con ese ID.";
        }
        return libro;
    }
    
    getBookIndexById(number) {
        let libro = this.data.findIndex((libro) => libro.id === number);
        if (libro === -1) {
            throw "No existe ningún libro con ese ID.";
        }
        return libro;
    }
    
    bookExists(userId, moduleCode) {
        let libro = this.data.find((libro) => libro.userId === userId && libro.moduleCode === moduleCode);
        if (libro) {
            return true;
        }
        return false;
    }
    
    booksFromUser(userId) {
        let libros = this.data.filter((libro) => libro.userId === userId);
        if (!libros) {
            throw "Este usuario no tiene ningún libro.";
        }
        return libros;
    }
    
    booksFromModule(moduleCode) {
        let libros = this.data.filter((libro) => libro.moduleCode === moduleCode);
        if (!libros) {
            throw "No existe ningún libro con este código de módulo.";
        }
        return libros;
    }
    
    booksCheeperThan(price) {
        let libros = this.data.filter((libro) => libro.price <= price);
        if (!libros) {
            throw "No existen libros con un precio menor que " + price + ".";
        }
        return libros;
    }
    
    booksWithStatus(status) {
        let libros = this.data.filter((libro) => libro.status === status);
        if (!libros) {
            throw "No existen libros en este estado.";
        }
        return libros;
    }
    
    averagePriceOfBooks() {
        let totalPrecio = this.data.reduce((total, libro) => (total += libro.price), 0);
        let media = totalPrecio / this.data.length;
        if (this.data.length === 0) {
            return "0.00 €";
        }
        return media.toFixed(2) + " €";
    }
    
    booksOfTypeNotes() {
        let libros = this.data.filter((libro) => libro.publisher === NOTES);
        if (!libros) {
            throw "No hay ningún libro de apuntes.";
        }
        return libros;
    }
    
    booksNotSold() {
        let libros = this.data.filter((libro) => libro.soldDate === "");
        if (!libros) {
            throw "Todos los libros han sido vendidos.";
        }
        return libros;
    }
}