import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './Recetas.css'
import { RecetasLista } from '../RecetasLista/RecetasLista';
import Loader from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../../firebase/config';


export const Recetas = () => {

    const [loading, setLoading] = useState(false)
    const [recetas, setRecetas] = useState([])

    const { recetaId } = useParams()

    useEffect(() => {

        // 1.- Armo la referencia a la colección que se quiere consumir
        // 'recetas' es el nombre de la colección

        const recetasRef = collection(db, 'recetas')

        //Filtros!! . where compara en firebase, no acá
        const q =  recetaId ? query(recetasRef, where('category', '==', recetaId)) : recetasRef
        // 2.- GET a esa referencia. Promesa
        getDocs(q)
            .then((collection) => {
                // el metodo collection.docs.map permite obtener un array con los datos cargados en la db
                // el metodo .data permite verlos como un objeto
                const recetasDb = collection.docs.map((doc) => ({
                    id: doc.id,
                    //...doc.data() equivale a que ubique todos los campos que retorna el objeto con formato "name: doc.data().name," etc
                    ...doc.data()
                }))
                setRecetas(recetasDb)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [recetaId])


    return (
        <section>
            <div className="recetas">
                <div className="recetas__container">
                    <h2 className="recetas__title">Recetas</h2>
                    <p className="recetas__description">Nuevas ideas para hacer de tus comidas, platos deliciosos y saludables.</p>
                </div>
            </div>

            <>
                {
                    loading
                        ? <Loader/>
                        : <RecetasLista recetas={recetas}/>
                }
            </>  

        </section>        
    )
}