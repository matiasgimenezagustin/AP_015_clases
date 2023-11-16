import React, { useState } from "react";
import './Product.css'

const Product = ({nombre, precio, esFavorito, stock, descripcion}) => {
    const [isCurrentFavorite, setIsCurrentFavorite] = useState(esFavorito)

    const addFavorite = () =>{
      setIsCurrentFavorite(!isCurrentFavorite)
    }
    console.log('me recargo')
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
        <button>
          Agregar al carrito
        </button>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
          <button>Cancelar</button>
        </div>
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