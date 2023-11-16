import React, { useState } from "react";
import './Product.css'

const Product = ({ id, nombre, precio, esFavorito, stock, descripcion, addToCart }) => {
  const [isCurrentFavorite, setIsCurrentFavorite] = useState(esFavorito)
  const [showCounter, setShowCounter] = useState(false)
  const [counter, setCounter] = useState(0)

  const addFavorite = () => {
    setIsCurrentFavorite(!isCurrentFavorite)
  }
  console.log('me recargo')

  const addCart = () =>{
    setShowCounter(true)
    setCounter(1)
  }
  const cancelCart = () =>{
    setShowCounter(false)
    setCounter(0)
  }

  const incrementCounter = () =>{
    setCounter(counter + 1)
  }
  const decrementCounter = () =>{
    if(counter == 1){
      cancelCart()
    }
    else{
      setCounter(counter - 1)
    }
    
  }

  const handleConfirm = () =>{
    addToCart({nombre, descripcion, precio, id}, counter)
    cancelCart()
  }


  return (
    <div>
      {esFavorito && <span>{'<3'}</span>}
      {
        nombre
          ? <h2>{nombre}</h2>
          : <h2 className="red">Error 404!</h2>
      }

      {/* <h2 className={nombre ? 'subtitulo' : 'red'}>{nombre ? nombre : 'Error 404!'}</h2> */}

      <p>{descripcion}</p>
      <span>Precio: {precio}</span>
      <div>
        Stock: {stock}
      </div>
      {
        isCurrentFavorite
          ? <button onClick={addFavorite}>Quitar de favoritos</button>
          : <button onClick={addFavorite}>Agregar a favoritos</button>
      }
      {
        showCounter
          ? (
            <div>
              <button onClick={decrementCounter}>-</button>
              <span>{counter}</span>
              <button onClick={incrementCounter}>+</button>
              <button onClick={cancelCart}>Cancelar</button>
              <button onClick={handleConfirm}>Confirmar</button>
            </div>
          )
          : <button onClick={addCart}>Agregar al carrito</button>
  
        }
      
    </div>
  )

}

export default Product

/* 

Si el nombre no esta vas a mostrar 'error 404'
EL error 404 va a estar con color rojo, pero el nombre va a ser oscuro


*/

/* 
Crear un estado que se llame showCounter que empieze en false

Si le doy click a agregar al carrito showCounter va a ser true

Si le doy click a cancelar showCounter va a ser false

Si showCounter es verdadero vamos a mostrar el contador sino mostraremos el agregar al carrito


 <button>
          Agregar al carrito
        </button>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
          <button>Cancelar</button>
        </div>

*/