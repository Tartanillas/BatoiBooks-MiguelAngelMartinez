import data from './src/services/datos.js';
import Books from './src/model/books.class.js';
import Modules from './src/model/modules.class';
import Users from './src/model/users.class';
import './style.css';

document.querySelector('#app').innerHTML = `
  <div>
      <img src="./public/logoBatoi.png" class="logo" alt="Logo batoi"/>
    <h1>BatoiBooks</h1>
    <p>
      Abre la consola para ver el resultado.
    </p>
  </div>
`

let libros = new Books();
let modulos = new Modules();
let usuarios = new Users();
libros.populate(data.books);
modulos.populate(data.modules);
usuarios.populate(data.users);
console.log(libros.booksFromModule("5021"));
console.log(libros.booksWithStatus("nuevo"));
console.log(libros.incrementPriceOfbooks(0.1));
