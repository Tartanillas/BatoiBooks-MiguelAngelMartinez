import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
      <img src="./public/logoBatoi.png" class="logo" alt="Logo batoi"/>
    <h1>BatoiBooks</h1>
    <p>
      Abre la consola para ver el resultado.
    </p>
  </div>
`
setupCounter(document.querySelector('#counter'))
