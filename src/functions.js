function getBookById(books, number) {
    let libro = books.find(libro =>  libro.id === number);
    if(!libro) {
        throw "No existe ningún libro con ese ID.";
    } else {
        return libro;
    }
}

export{getBookById}