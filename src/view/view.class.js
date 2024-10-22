export default class View {
    constructor(){
        this.bookList = document.getElementById("list");
        this.bookForm = document.getElementById('bookForm');
        this.remove = document.getElementById('remove');
        this.messages = document.getElementById('messages');
    }

    renderModulesOptions(modules){
        modules.forEach(module => {
        const option = document.createElement("option");
        option.innerHTML = module.cliteral;
        option.value = module.code;     
        const select = document.getElementById("id-module");
        select.appendChild(option);
        });
    }

    renderBook(book){
        const contenedor = document.createElement('div');
        contenedor.innerHTML += `<div class="libro"><h1>Libro: ${book.id}</h5><h5>Código de módulo: ${book.moduleCode}</h5><h5>Editorial: ${book.publisher}</h5><h5>Precio: ${book.price}</h5><h5>Páginas: ${book.pages}</h5><h5>Estado: ${book.status}</h5><h5>Vendido el: ${book.soldDate}</h5><h5>Comentarios: ${book.comments}</h5></div>`;
        this.bookList.append(contenedor);
    }

    removeBook(bookId){
        const libro = document.getElementById(bookId);
        this.bookList.remove(libro);
    }

    renderMessage(message, tipo){
        this.messages.innerHTML = `<div class="${tipo} alert alert-danger alert-dismissible" role="alert"> ${message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()">x</button></div>`;
        if(tipo === 'success'){
        setTimeout(() => {
        this.messages.innerHTML = '';
        }, 3000)
    }
}

    setBookSubmitHandler(callback) {  
        this.bookForm.addEventListener('submit', (event) => {
            event.preventDefault()
            const moduleCode = document.getElementById('id-module').value;
            const publisher = document.getElementById('publisher').value;
            const price = document.getElementById('price').value;
            const pages = document.getElementById('pages').value;
            const status = document.getElementById('status').value;
            const comments = document.getElementById('comments').value;
            const book = {
                moduleCode,
                publisher,
                price,
                pages,
                status,
                comments
            }
        callback(book)
        })
        }

    setBookRemoveHandler(callback) {
        this.remove.addEventListener('click', () => {
            const idLibro = document.getElementById('id-remove').value;
            callback(idLibro);
        })
    }
}
