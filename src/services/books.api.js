async function getDBBooks() {
    const response = await fetch(SERVER + "/books");
    if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
}

async function getDBBooks(id) {
    const response = await fetch(SERVER + "/books?id=" + ids);
    if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
}

function addDBBook(book) {

}

function removeDBBook(id) {

}

function changeDBBook(book) {

}