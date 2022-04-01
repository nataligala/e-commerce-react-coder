import React, { createContext, useState } from "react";

export const CartContext = createContext()

//Custom Provider

export const CartProvider = ( {children} ) =>{

    const [cart, setCart] = useState([])

    console.log({cart})
    const addToCart = (item) => {
        
        if(isInCart(item.id)){
            
            const prod = cart.find((p) => p.id === item.id)
            const { cantidad } = prod
            
            prod.cantidad = item.cantidad + cantidad
            const newCart = [ ...cart ]
            setCart(newCart)

        } else {

            setCart ( [...cart, item ])
        }
        
    }

    const removeFromCart = (id) => {
        setCart ( cart.filter(prod => prod.id !== id ) ) 
    }

    const emptyCart = () => {
        setCart([])
    }

    const totalCant = () => {
        // return cart.reduce((acc, prod) => acc + prod.quantity, 0 )
    }

    const totalCompra = () =>{
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    }

    const isInCart = (id) =>{
        return cart.some( prod => prod.id === id )
    }


    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            emptyCart,
            totalCant,
            isInCart,
            totalCompra
        }}>
            {children}
        </CartContext.Provider>
    )
} 