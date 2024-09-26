function getBookById(books, number) {
    let libro = books.find(libro =>  libro.id === number);
    if(!libro) {
        throw "No existe ningún libro con ese ID.";
    } else {
        return libro;
    }
}
function getBookIndexById(books, number) {
    let libro = books.findIndex(libro =>  libro.id === number);
    if(libro === -1) {
        throw "No existe ningún libro con ese ID.";
    } else {
        return libro;
    }
}

function bookExists(books, userId, moduleCode) {
    let libro = books.find(libro => libro.userId === userId && libro.moduleCode === moduleCode);
    if(libro) {
        return true; 
    } else {
        return false;
    }
}

function booksFromUser(books, userId) {
    let libros = books.filter(libro =>  libro.userId === userId);
    if(!libros) {
        throw "Este usuario no tiene ningún libro.";
    } else {
        return libros;
    }
}

function booksFromModule(books, moduleCode) {
    let libros = books.filter(libro =>  libro.moduleCode === moduleCode);
    if(!libros) {
        throw "No existe ningún libro con este código de módulo.";
    } else {
        return libros;
    }
}

function booksCheeperThan(books, price) {
    let libros = books.filter(libro =>  libro.price <= price);
    if(!libros) {
        throw "No existen libros con un precio menor que " + price + ".";
    } else {
        return libros;
    }
}

function booksWithStatus(books, status) {
    let libros = books.filter(libro =>  libro.status === status);
    if(!libros) {
        throw "No existen libros en este estado.";
    } else {
        return libros;
    }
}

function averagePriceOfBooks(books) {
    let totalPrecio = books.reduce((total, libro) => total += libro.price, 0);
    let media = totalPrecio / books.length;
    if(books.length === 0) {
        return "0.00 €"
    } else {
        return media.toFixed(2) + " €";
    }
}

function booksOfTypeNotes(books) {
    let libros = books.filter(libro =>  libro.publisher === "Apunts");
    if(!libros) {
        throw "No hay ningún libro de apuntes.";
    } else {
        return libros;
    }
}

function booksNotSold(books) {
    let libros = books.filter(libro =>  libro.soldDate === "");
    if(!libros) {
        throw "Todos los libros han sido vendidos.";
    } else {
        return libros;
    }
}

function incrementPriceOfbooks(books, percentage) {
    return books.map(libro => (libro.price + libro.price) * (percentage / 100) / 2);
}

function getUserById(users, userId) {
    let usuario = users.find(usuario => usuario.id === userId);
    if(!usuario) {
        throw "No existe ningún usuario con ese ID";
    } else {
        return usuario;
    }
}

function getUserIndexById(users, userId) {
    let usuario = users.findIndex(usuario => usuario.id === userId);
    if(usuario === -1) {
        throw "No existe ningún usuario con ese ID";
    } else {
        return usuario;
    }
}

function getUserByNickName(users, nick) {
    let usuario = users.find(usuario => usuario.nick === nick);
    if(!usuario) {
        throw "No existe ningún usuario con ese nick";
    } else {
        return usuario;
    }
}

function getModuleByCode(modules, moduleCode) {
    let modulo = modules.find(modulo => modulo.code === moduleCode);
    if(!modulo) {
        throw "No existe ningún módulo con ese código";
    } else {
        return modulo;
    }
}

export {
    getBookById,
    getBookIndexById,
    bookExists,
    booksFromUser,
    booksFromModule,
    booksCheeperThan,
    booksWithStatus,
    averagePriceOfBooks,
    booksOfTypeNotes,
    booksNotSold,
    incrementPriceOfbooks,
    getUserById,
    getUserByNickName,
    getModuleByCode,
    getUserIndexById
}