import React from 'react'
import { Caja, Product } from './components'
import { CiFileOn, CiBatteryFull } from "react-icons/ci";
import { AiFillCloseCircle } from "react-icons/ai";




const App = () => {
  const saludar = (nombre) => {
    let edad = prompt('ingrese su edad')
    console.log('hola ' + nombre + ' desde una funcion', edad)
  }
  const archivos = [
    {
      nombre: 'hola',
      extension: 'txt',
      peso: '3kb',
      tipo: 'archivo',
      creadoEn: '2023/09/08'
    },
    {
      nombre: 'index',
      extension: 'html',
      peso: '90kb',
      tipo: 'archivo',
      creadoEn: '2023/03/08'
    }
  ]

  return (
    <section>
      <h1>Eventos <CiBatteryFull /></h1>
      <button onClick={saludar}>Dame click</button>
      <button onClick={() => alert('hola')}>Dame click 2</button>
      <button onClick={() => saludar('pepe')}>Dame click 3</button>
      <div className='file-list'>
        {archivos.map((archivo) => (
          <div className='file'>
            <div className='header-file'>
              <CiFileOn />
              <h2>{archivo.nombre}.{archivo.extension}</h2>
            </div>
            <span>Peso: {archivo.peso}</span> <br />
            <span>Fecha de creacion: {archivo.creadoEn}</span>
            <button>
              <AiFillCloseCircle />
            </button>
          </div>
        ))}
      </div>
    </section>

  )
}

export default App



/* Separa al componente Product del app.jsx */

/* Crear un componente llamado Product que reciba las propiedades: nombre, precio, stock, descripcion y muestre esta informacion en la sig estructura:

<div>
  <h2>nombre</h2>
  p: descripcion
  span: precio: $precio
  div: stock: stock
</div>

*/


/*  <h1 className='titulo'>Soy el titulo</h1>
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
      <Product descripcion='una tv muy grande' precio='400000' stock='40' esFavorito={true}/>
      <Product nombre='tv' descripcion='una tv muy grande' precio='400000' stock='40' esFavorito={false}/> */


/*
 
<div className='file'>
  <div className='header-file'>
    <CiFileOn/>
    <h2>Titulo.extension</h2>
  </div>
  <span>Peso: 3kb</span> <br/>
  <span>Fecha de creacion: 2023/07/09</span>
  <button>
    <AiFillCloseCircle/>
  </button>
</div>
 
*/