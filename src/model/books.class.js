import Book from './book.class';
const NOTES = "Apunts";
export default class Books {
    constructor() {
        this.data = [];
    }
    populate(array) {
        for(let i = 0; i < array.length; i++) {
            this.data[i] = new Book(array[i]);
        }
    }
    addBook(libro) {
        let nextId = this.data.reduce((max, book) => book.id > max ? book.id : max, 0) + 1;
        let nuevoLibro = new Book({...libro, id: nextId});
        this.data.push(nuevoLibro);
        return nuevoLibro;
    }
    
    removeBook(id) {
        let libro = this.data.findIndex((book) => book.id == id);
        if (libro === -1) {
            throw "No existe ningún libro con ese ID.";
        }
        this.data.splice(libro, 1);
    }

    changeBook(libro) {
        let libroAModificar = this.data.findIndex(book => book.id === libro.id);
        if (libroAModificar === -1) {
            throw "No existe ningún libro con ese ID.";
        } else {
            this.data.splice(libroAModificar, 1, libro);
            return libro;
        }
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
    
    incrementPriceOfbooks(percentage) {
        return this.data.map((libro) => ({...libro, price: Math.round(libro.price * (1 + percentage) * 100) / 100}));
    }

}