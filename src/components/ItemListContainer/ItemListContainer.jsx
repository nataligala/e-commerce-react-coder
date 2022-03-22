import React from 'react'
import {useEffect, useState} from 'react'
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';
import { pedirDatos } from '../../helpers/pedirDatos';
import Loader from '../Loader/Loader'



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
                        ? <Loader/>
                        : <ItemList productos={productos}/>
                }
            </>    
                
        </section>        
    )
}

export default ItemListContainer;