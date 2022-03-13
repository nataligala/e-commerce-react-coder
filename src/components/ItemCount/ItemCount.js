import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1);

    const incrementar = () => {
        if(stock>counter){
            setCounter(counter+1);
        }else{
            alert("No hay stock");
        }

    }

    const decrementar = () => {
        if(counter>1) {
            setCounter(counter-1);
        }else{
            alert("Acción no posible");
        }
    }

    const respuesta = () =>{
        alert(`Agregaste ${counter}`);
    }


    return (
        <Stack spacing={2} direction="row">
            <h2>{counter}</h2>
            <Button variant="contained" sx={{bgcolor: '#95C11F'}} onClick={decrementar}>-</Button>
            <Button variant="contained" sx={{bgcolor: '#95C11F'}} onClick={incrementar}>+</Button>
            <Button variant="contained" sx={{bgcolor: '#95C11F'}} onClick={respuesta}>Agregar al Carrito</Button>
        </Stack>
    )
}