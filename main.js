import "./style.css"
import batoiLogo from "/logoBatoi.png"
import Controller from "./src/controller/controller.class"

document.querySelector("#app").innerHTML = `
  <header>
    <img src="${batoiLogo}" alt="Logo Batoi" />
    <h1>BatoiBooks</h1>
  </header>
    <nav>
      <ul>
        <li><a href="#list">Ver Libros</a></li>
        <li><a href="#form">Añadir Libro</a></li>
        <li><a href="#about">Acerca de...</a></li>
      </ul>
    </nav>
    <div>
      <div id="messages"></div>
      <div id="list"></div>
      <div id="form>
        <div>
          <label for="id-remove">Id:</label>
          <input type="number" id="id-remove" min="1">
          <button id="remove">Borrar libro</button>
        </div>

        <form id="bookForm">
          <div>
            <label for="id-module">Módulo:</label>
            <select id="id-module">
              <option>- Selecciona un módulo -</option>
            </select>
          </div>

          <div>
            <label for="publisher">Editorial:</label>
            <input type="text" id="publisher" required>
          </div>

          <div>
            <label for="price">Precio:</label>
            <input type="number" id="price" min="0">
          </div>

          <div>
            <label for="pages">Páginas:</label>
            <input type="number" id="pages" required min="1">
          </div>

          <div>
            <label>Estado:</label>
            <label for="good">
            <input type="radio" id="status" name="status" value="good" required>Good</label>
            <label for="new">
            <input type="radio" id="status" name="status" value="new" required>New</label>
            <label for="bad">
            <input type="radio" id="status" name="status" value="bad" required>Bad</label>
          </div>

          <div>
            <label for="comments">Comentarios:</label>
            <textarea id="comments"></textarea>
          </div>

          <button type="submit">Añadir</button>
          <button type="reset">Reset</button>
        </form>
      </div>
      <div id="about">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    <footer>
      <p>Miguel Ángel Martínez Domínguez | 2DAWA</p>
    </footer>
`
document.addEventListener("DOMContentLoaded", () => {
  const myController = new Controller()
  myController.init()
})

