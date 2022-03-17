import React from 'react'
import {useEffect, useState} from 'react'
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';
import { pedirDatos } from '../helpers/pedirDatos';



export const ItemListContainer = ( ) => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() => {

        setLoading(true)
        pedirDatos()
        .then( (resp)  => {
            setProductos(resp)
        })
        .catch( (error)  => {
            console.log(error)
        })
        .finally( () => {
            setLoading(false)
        })

    }, [])

    return (
        <section>
            {/* <div className='greeting'>
                <h2>{greeting}</h2>    
            </div> */}
            {/* <label>{count}</label>
            <button onClick={handleCount}>click</button> */}

            <div className="itemList">
                <div className="itemList__container">
                    <h2 className="itemList__title">Productos</h2>
                    <h3 className="itemList__subtitle">¿Qué tenés ganas de comer hoy?</h3>
                    <p className="itemList__description">Conocé todas nuestras opciones ricas y saludables</p>
                </div>
            </div>


            <>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={productos}/>
            }
        </>    
                
        </section>        
    )
}

export default ItemListContainer;