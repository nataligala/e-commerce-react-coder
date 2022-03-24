import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader';



export const ItemDetailContainer = () => {
 
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)
    

    const { itemId } = useParams()

    console.log( itemId )

    useEffect(() => {

        setLoading(true)

        pedirDatos()
            .then( resp  => {
                setItem ( resp.find( prod => prod.id === Number(itemId)) )  
            })
            .finally( () => {
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

