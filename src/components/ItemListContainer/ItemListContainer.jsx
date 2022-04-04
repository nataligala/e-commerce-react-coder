import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';
import Loader from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../../firebase/config';




export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { catId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1.- Armo la referencia a la colección que se quiere consumir
        // 'productos' es el nombre de la colección

        const productosRef = collection(db, 'productos')

        //Filtros!! . where compara en firebase, no acá
        const q =  catId ? query(productosRef, where('category', '==', catId)) : productosRef
        // 2.- GET a esa referencia. Promesa
        getDocs(q)
            .then((collection) => {
                // el metodo collection.docs.map permite obtener un array con los datos cargados en la db
                // el metodo .data permite verlos como un objeto
                const productosDb = collection.docs.map((doc) => ({
                    id: doc.id,
                    //...doc.data() equivale a que ubique todos los campos que retorna el objeto con formato "name: doc.data().name," etc
                    ...doc.data()
                }))
                setProductos(productosDb)
            })
            .finally(() => {
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

