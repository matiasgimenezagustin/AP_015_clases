import React from 'react'

const Cart = ({cart}) => {
  return (
    <div>
        {
            cart.map(item =>(
                <div>
                    <h3>{item.nombre}</h3>
                    <span>{item.precio}</span>
                    <h4>Cantidad: {item.quantity}</h4>
                    <hr/>
                </div>
            ))
        }
        <div>
            <button>Confirmar compra</button>
            <button>Cancelar compra</button>
        </div>
    </div>
  )
}

export default Cart