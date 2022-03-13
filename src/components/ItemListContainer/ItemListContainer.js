import React from 'react'
import './ItemListContainer.css';
import { ItemCount } from '../../components/ItemCount/ItemCount';



export const ItemListContainer = ( {greeting} ) => {

    // let count = 0

    // const handleCount = () =>{
    //     count = count +1
    // }

    return (
        <section>
            <div className='greeting'>
                <h2>{greeting}</h2>    
            </div>
            {/* <label>{count}</label>
            <button onClick={handleCount}>click</button> */}

            <div className="itemList">
                <div className="itemList__container">
                    <h2 className="itemList__title">Productos</h2>
                    <h3 className="itemList__subtitle">¿Qué tenés ganas de comer hoy?</h3>
                    <p className="itemList__description">Conocé todas nuestras opciones ricas y saludables</p>
                </div>
            </div>

            <ItemCount stock="5" initial="1"/>
                
        </section>        
    )
}

export default ItemListContainer;