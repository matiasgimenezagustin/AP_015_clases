import React from 'react'


const App = () => {
  const saludar = () => 'hola desde una funcion'
  return (
    <section>
      <h1 className='titulo'>Soy el titulo</h1>
      Soy el app
      <div>
        Hola
      </div>
      {1 + 1}
      {'hola ' + 'chau'}
      <form>
        <label htmlFor="nombre">Ingresa el nombre:</label>
        <input placeholder='ingresa tu nombre' id='nombre'/>
      </form>
      {saludar()}
      <Caja titulo='soy un rectangulo' author='Pepesito'/>
      <Caja titulo='soy un circulo'  author='Juancito'/>
      <Caja titulo='soy un cuadrado'  author='Pepita'/>
      <Product nombre='tv' descripcion='una tv muy grande' precio='400000' stock='40'/>
    </section>

  )
}

export default App

const Caja = (propiedades) => {
  console.log(propiedades)
  return (
    <div className='caja'>
      <h2>{propiedades.titulo}</h2>
      Soy una caja
      <br/>
      <i>-{propiedades.author}</i>
    </div>
  )
}

const Product = (p) => {

  return (
    <div>
      <h2>{p.nombre}</h2>
      <p>{p.descripcion}</p>
      <span>Precio: {p.precio}</span>
      <div>
        Stock: {p.stock}
      </div>
    </div>
  )

}

/* Crear un componente llamado Product que reciba las propiedades: nombre, precio, stock, descripcion y muestre esta informacion en la sig estructura:

<div>
  <h2>nombre</h2>
  p: descripcion
  span: precio: $precio
  div: stock: stock
</div>

*/