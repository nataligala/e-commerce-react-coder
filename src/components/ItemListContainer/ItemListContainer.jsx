import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';
import Loader from '../Loader/Loader'




export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { catId } = useParams()

    useEffect(() => {

        setLoading(true)
        pedirDatos()
        .then( (resp)  => {
            /* Cuando en la URL no haya catID que no pase nada, cuando si haya, que filtre por categoria */
            if(!catId) {
                setProductos(resp)
            }else{
                setProductos( resp.filter( prod => prod.category === catId))
            }
        })
        .catch( (error)  => {
            console.log(error)
        })
        .finally( () => {
            setLoading(false)
        })

    }, [catId])

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

