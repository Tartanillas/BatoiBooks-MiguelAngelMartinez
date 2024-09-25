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

export{getBookById, getBookIndexById}