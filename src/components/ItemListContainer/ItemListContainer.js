import React from 'react'
import './ItemListContainer.css';




export const ItemListContainer = ( {greeting}) => {

    return (
        <section>
            <div className='greeting'>
                <h2>{greeting}</h2>    
            </div>
            <div className="itemList">
                <div className="itemList__container">
                    <h2 className="itemList__title">Productos</h2>
                    <h3 className="itemList__subtitle">¿Qué tenés ganas de comer hoy?</h3>
                    <p className="itemList__description">Conocé todas nuestras opciones ricas y saludables</p>
                </div>
            </div>
                
        </section>        
    )
}