import React from 'react';
import { Container } from '@mui/material';
import { RecetasItem } from '../RecetasItem/RecetasItem';


export const RecetasLista = ( {recetas}) => {

    return (

        <Container style={{ display: 'flex', justifyContent:'center', flexWrap: 'wrap', margin: '100px'}}>
                {recetas.map((recetas) => <RecetasItem key={recetas.id} {...recetas}/>)}
        </Container>
    );

}    