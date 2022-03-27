import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const CartItem = ({name, price, cantidad, id}) => {

    const {removerDelCarrito} = useContext(CartContext)

    return (
        <div>
            <h3>{name}</h3>
            <p>Precio: ${price}</p>
            <p>Cantidad: {cantidad}</p>
            <button 
                className="btn btn-danger"
                onClick={() => { removerDelCarrito(id) }}
            >
            </button>
            <AddShoppingCartIcon />
        </div>
    )
}