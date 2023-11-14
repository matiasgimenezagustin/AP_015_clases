import React from "react";
import './Product.css'

const Product = (p) => {

    return (
      <div>
        {p.esFavorito && <span>{'<3'}</span>}
        {
            p.nombre 
                ? <h2>{p.nombre}</h2>
                : <h2 className="red">Error 404!</h2>
        }

        <h2 className={p.nombre ? 'subtitulo' : 'red'}>{p.nombre ? p.nombre : 'Error 404!'}</h2>
   
        <p>{p.descripcion}</p>
        <span>Precio: {p.precio}</span>
        <div>
          Stock: {p.stock}
        </div>
        {
            p.esFavorito 
            ? <button>Quitar de favoritos</button>
            : <button>Agregar a favoritos</button>
        }
      </div>
    )
  
  }

export default Product

/* 

Si el nombre no esta vas a mostrar 'error 404'
EL error 404 va a estar con color rojo, pero el nombre va a ser oscuro


*/