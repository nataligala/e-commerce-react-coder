import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';



export const ItemDetailContainer = () => {
 
    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState()

    const { id } = useParams()

    useEffect(() => {

        setLoading(true)

        pedirDatos()
            .then( resp  => {
                setItem ( resp.find( prod => prod.id === Number(id)) )  
            })
            .finally( () => {
                setLoading(false)
            })

    }, [id])


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