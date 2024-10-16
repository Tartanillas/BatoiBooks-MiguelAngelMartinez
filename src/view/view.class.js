export default class View {
    constructor(){
        this.bookList = document.getElementById("list");
        this.bookForm = document.getElementById('bookForm');
        this.remove = document.getElementById('remove');
    }

    renderModulesOptions(modules){
        modules.forEach(module => {
        const option = document.createElement("option");
        option.innerHTML = module.cliteral;     
        const select = document.getElementById("id-module");
        select.appendChild(option);
        });
    }

    renderBook(book){
        const contenedor = document.createElement('div');
        contenedor.innerHTML += `<h3>Libro: ${book.id}</h3><h3>${book.moduleCode}</h3><h3>${book.publisher}</h3><h3>Precio: ${book.price}</h3><h3>Páginas: ${book.pages}</h3><h3>Estado: ${book.status}</h3><h3>Vendido el ${book.soldDate}</h3><h3>Comentarios: ${book.comments}</h3>`;
        this.bookList.append(contenedor);
    }

    removeBook(bookId){
        const libro = document.getElementById(bookId);
        this.bookList.remove(libro);
    }

    renderMessage(message){

    }

    setBookSubmitHandler(callback) {  
        this.bookForm.addEventListener('submit', (event) => {
            event.preventDefault()
           // a continuación recoge los datos del formulario y los guarda en un objeto // por último llama a la función recibida pasándole dicho objeto
            const publisher = document.getElementById('publisher').value;
            const price = document.getElementById('price').value;
            const book = {
                publisher,
                price
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