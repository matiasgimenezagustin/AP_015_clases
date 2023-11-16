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
      </div>
    )
  
  }

export default Product

/* 

Si el nombre no esta vas a mostrar 'error 404'
EL error 404 va a estar con color rojo, pero el nombre va a ser oscuro


*/