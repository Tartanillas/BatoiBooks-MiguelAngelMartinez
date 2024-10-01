const NOTES = "Apunts";
function getBookById(books, number) {
    let libro = books.find((libro) => libro.id === number);
    if (!libro) {
        throw "No existe ningún libro con ese ID.";
    }
    return libro;
}

function getBookIndexById(books, number) {
    let libro = books.findIndex((libro) => libro.id === number);
    if (libro === -1) {
        throw "No existe ningún libro con ese ID.";
    }
    return libro;
}

function bookExists(books, userId, moduleCode) {
    let libro = books.find((libro) => libro.userId === userId && libro.moduleCode === moduleCode);
    if (libro) {
        return true;
    }
    return false;
}

function booksFromUser(books, userId) {
    let libros = books.filter((libro) => libro.userId === userId);
    if (!libros) {
        throw "Este usuario no tiene ningún libro.";
    }
    return libros;
}

function booksFromModule(books, moduleCode) {
    let libros = books.filter((libro) => libro.moduleCode === moduleCode);
    if (!libros) {
        throw "No existe ningún libro con este código de módulo.";
    }
    return libros;
}

function booksCheeperThan(books, price) {
    let libros = books.filter((libro) => libro.price <= price);
    if (!libros) {
        throw "No existen libros con un precio menor que " + price + ".";
    }
    return libros;
}

function booksWithStatus(books, status) {
    let libros = books.filter((libro) => libro.status === status);
    if (!libros) {
        throw "No existen libros en este estado.";
    }
    return libros;
}

function averagePriceOfBooks(books) {
    let totalPrecio = books.reduce((total, libro) => (total += libro.price), 0);
    let media = totalPrecio / books.length;
    if (books.length === 0) {
        return "0.00 €";
    }
    return media.toFixed(2) + " €";
}

function booksOfTypeNotes(books) {
    let libros = books.filter((libro) => libro.publisher === NOTES);
    if (!libros) {
        throw "No hay ningún libro de apuntes.";
    }
    return libros;
}

function booksNotSold(books) {
    let libros = books.filter((libro) => libro.soldDate === "");
    if (!libros) {
        throw "Todos los libros han sido vendidos.";
    }
    return libros;
}

function incrementPriceOfbooks(books, percentage) {
    return books.map((libro) => ({...libro, price: Math.round(libro.price * (1 + percentage) * 100) / 100}));
}

function getUserById(users, userId) {
    let usuario = users.find((usuario) => usuario.id === userId);
    if (!usuario) {
        throw "No existe ningún usuario con ese ID";
    }
    return usuario;
}

function getUserIndexById(users, userId) {
    let usuario = users.findIndex((usuario) => usuario.id === userId);
    if (usuario === -1) {
        throw "No existe ningún usuario con ese ID";
    }
    return usuario;
}

function getUserByNickName(users, nick) {
    let usuario = users.find((usuario) => usuario.nick === nick);
    if (!usuario) {
        throw "No existe ningún usuario con ese nick";
    }
    return usuario;
}

function getModuleByCode(modules, moduleCode) {
    let modulo = modules.find((modulo) => modulo.code === moduleCode);
    if (!modulo) {
        throw "No existe ningún módulo con ese código";
    }
    return modulo;
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
    getUserIndexById,
};
