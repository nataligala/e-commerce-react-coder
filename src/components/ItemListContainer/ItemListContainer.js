import React from 'react'
import './ItemListContainer.css';




export const ItemListContainer = ( {greeting}) => {

    return (
        <div className='greeting'>
            <h2>{greeting}</h2>    
        </div>
    )
}