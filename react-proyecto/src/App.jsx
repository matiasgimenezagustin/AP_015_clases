import React, { useState } from 'react'
import { Caja, Cart, Product } from './components'
import { CiFileOn, CiBatteryFull } from "react-icons/ci";
import { AiFillCloseCircle,AiFillFolder } from "react-icons/ai";
import { productos } from './data';




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
    },
    {
      nombre: 'components',
      extension: 'null',
      peso: '90mb',
      tipo: 'carpeta',
      creadoEn: '2023/03/08'
    }
  ]
  const [contador, setContador ] = useState(0)
  const [tengoHambre, setTengoHambre] = useState(true)

  const [isVisible, setIsVisible] = useState()




  const [cart, setCart] = useState([])

  const addToCart = (product, quantity) =>{

    if(cart.some(productFromCart => productFromCart.id == product.id)){
      setCart(cart.map( (productFromCart) =>{
        if(productFromCart.id == product.id){
          productFromCart.quantity += quantity
        }
        return productFromCart
      }))
    }
    else{
      setCart([...cart, {...product, quantity}])
    }

  }
  console.log(cart)

  const visible = () => {
    setIsVisible(!isVisible)
  }


  const aumentar = () =>{
    setContador(contador + 1)
    console.log(contador)
  }
  console.log('Me recargo')

  const [showCart, setShowCart] = useState(false)
  return (
    <section>
       <section>
        {isVisible && <div className='black'></div>}
      
        {isVisible ? <button onClick={visible}>Ocultar</button> : <button onClick={visible}>Mostrar</button> }
      </section>
      {productos.map(producto =>(
        <Product 
          id={producto.id} 
          key={producto.id} 
          nombre={producto.nombre} 
          stock={producto.stock} 
          descripcion={producto.descripcion} 
          precio={producto.precio} 
          esFavorito={false} 
          addToCart={addToCart}
        />
      ))}
      
      <h1>Eventos <CiBatteryFull /></h1>
      <button onClick={saludar}>Dame click</button>
      <button onClick={() => alert('hola')}>Dame click 2</button>
      <button onClick={() => saludar('pepe')}>Dame click 3</button>

      <h1>Contador: {contador}</h1>
      <button onClick={aumentar}>Aumentar</button>
      <div className='file-list'>
        {archivos.map((archivo) => (
          <div className='file'>
            <div className='header-file'>
              {archivo.tipo == 'carpeta' ? <AiFillFolder/> : <CiFileOn />}
              <h2>{archivo.nombre}{archivo.tipo == 'archivo' && '.' + archivo.extension}</h2>
            </div>
            <span>Peso: {archivo.peso}</span> <br />
            <span>Fecha de creacion: {archivo.creadoEn}</span>
            <button>
              <AiFillCloseCircle />
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => setShowCart(!showCart)}>
        {showCart ? 'Ocultar carrito' : 'Mostrar carrito'}
      </button>
      {
        showCart && <Cart cart={cart}/>
      }
      
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

/* 
Vamos a crear un div que tenga 200 de ancho por 200 de alto y su fondo sea negro
Vamos a crear un estado que diga isVisible que empieze en false

Si isVisible es true la caja se muestra

Vamos a crear un button que diga mostrar o ocultar dependiendo de si isVisible es true o no
El botton al hacerle click debera cambiar al estado a su valor opuesto
*/

/* si se cumple && hago esto */



