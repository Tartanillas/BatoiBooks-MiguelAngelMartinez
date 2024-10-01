import * as funciones from './src/functions';
import './style.css';
import data from './src/services/datos.js';

document.querySelector('#app').innerHTML = `
  <div>
      <img src="./public/logoBatoi.png" class="logo" alt="Logo batoi"/>
    <h1>BatoiBooks</h1>
    <p>
      Abre la consola para ver el resultado.
    </p>
  </div>
`
console.log(funciones.booksFromUser(data.books, 4));

let librosModulo5021 = funciones.booksFromModule(data.books, "5021");
console.log(funciones.booksWithStatus(librosModulo5021, "good"));

console.log(funciones.incrementPriceOfbooks(data.books, 0.1));