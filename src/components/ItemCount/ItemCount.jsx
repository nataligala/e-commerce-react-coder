import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const ItemCount = ({stock, setCounter, counter, onAdd}) => {
    const incrementar = () => {
        if (counter < stock){
            setCounter(counter + 1)
        }
    }
    
    const decrementar = () => {
        if(counter > 1 ){
            setCounter(counter - 1)
        }    
    }


    return (
        <Stack spacing={2} direction="row" sx={{margin: '20px'}}>
            <Box sx={{display:'flex', border: '1px solid lightgrey', borderRadius: '5px'}}>
                <Button onClick={decrementar} sx={{fontWeight: 'bold'}}>-</Button>
                <h2>{counter}</h2>
                <Button onClick={incrementar} sx={{fontWeight: 'bold'}}>+</Button>
            </Box>    
            <Button variant="contained" sx={{bgcolor: '#056D45', borderRadius: '20px'}} onClick={onAdd}>Agregar al Carrito</Button>
        </Stack>
    )
}