import React from "react"
import './Caja.css'

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


export default Caja
