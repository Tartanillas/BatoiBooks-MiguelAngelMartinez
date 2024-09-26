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
let librosUsuario4 = funciones.booksFromUser(data.books, 4);
console.log(librosUsuario4);

let librosModulo5021 = funciones.booksFromModule(data.books, "5021");
let librosEnModulo5021YEnEstadoGood = funciones.booksWithStatus(librosModulo5021, "good");
console.log(librosEnModulo5021YEnEstadoGood);

let incremento = funciones.incrementPriceOfbooks(data.books, 10);
console.log(incremento);