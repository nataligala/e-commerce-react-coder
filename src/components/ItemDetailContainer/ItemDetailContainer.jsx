import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader';
import { doc, getDoc, collection } from 'firebase/firestore/lite';
import { db } from '../../firebase/config';



export const ItemDetailContainer = () => {
 
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)
    

    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)

        const productosRef = collection(db, 'productos')
        //metodo doc en vez de collection
        const docRef = doc(productosRef, itemId)
        getDoc(docRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(()=>{
                setLoading(false)
            })

    }, [itemId])


    return (
        <>
                {
                    loading
                        ? <Loader/>
                        : <ItemDetail {...item}/>
                }
        </>    
    )
}

