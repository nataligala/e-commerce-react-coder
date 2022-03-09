import React from 'react'
import './ItemListContainer.css';




export const ItemListContainer = ( {greeting}) => {

    return (
        <div className='greeting'>
            <h2>{greeting}</h2>
            <p>Somos Alimentación Consciente. Somos respeto por los animales. Somos amor por el mundo.</p>    
        </div>
    )
}