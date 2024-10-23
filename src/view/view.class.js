import Modules from "../model/modules.class"
export default class View {
    constructor(){
        this.bookList = document.getElementById("list")
        this.bookForm = document.getElementById('bookForm')
        this.remove = document.getElementById('remove')
        this.messages = document.getElementById('messages')
    }
    // Envia los modulos al select del HTML
    renderModulesOptions(modules){
        modules.forEach(module => {
        const option = document.createElement("option")
        option.innerHTML = module.cliteral
        const select = document.getElementById("id-module")
        select.appendChild(option)
        })
    }
    // Renderiza el libro pasado por parámetro para mostrarlo por pantalla
    renderBook(book){
        const contenedor = document.createElement('div')
        contenedor.innerHTML += `<div class="card"><h1>Libro: ${book.id}</h5><h5>Código de módulo: ${book.moduleCode}</h5><h5>Editorial: ${book.publisher}</h5><h5>Precio: ${book.price}</h5><h5>Páginas: ${book.pages}</h5><h5>Estado: ${book.status}</h5><h5>Vendido el: ${book.soldDate}</h5><h5>Comentarios: ${book.comments}</h5></div>`
        this.bookList.append(contenedor)
    }
    // Elimina el libro pasado por parámetro de la pantalla
    removeBook(bookId){
        const libro = document.getElementById(bookId)
        this.bookList.remove(libro)
    }
    // Recibe un mensaje y su tipo y lo muestra por pantalla con su esitlo correspondiente
    renderMessage(message, tipo){
        this.messages.innerHTML = `<div class="${tipo} alert alert-danger alert-dismissible" role="alert"> ${message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()">x</button></div>`
        if(tipo === 'success'){
        setTimeout(() => {
        this.messages.innerHTML = ''
        }, 3000)
    }
}
    // Cuando se hace click en el botón de submit, recoge los datos del formulario, construye un libro con esos datos y lo envía a la función que llame a esta función
    setBookSubmitHandler(callback) {  
        this.bookForm.addEventListener('submit', (event) => {
            event.preventDefault()
            const moduleCode = document.getElementById('id-module').value
            const publisher = document.getElementById('publisher').value
            const price = document.getElementById('price').value
            const pages = document.getElementById('pages').value
            const status = document.getElementById('status').value
            const comments = document.getElementById('comments').value
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
    // Cuando se hace click en el botón de borrar, coge la id del libro y la envía a la función que llame a esta función
    setBookRemoveHandler(callback) {
        this.remove.addEventListener('click', () => {
            const idLibro = document.getElementById('id-remove').value
            callback(idLibro)
        })
    }
}
