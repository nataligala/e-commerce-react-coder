import React, { useContext } from 'react';
import "./CartWidget.css";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Container } from '@mui/material';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {
    const {totalCant, cart} = useContext(CartContext)

    return (
        <Container className={cart.length === 0 ? 'hidden' : ''}>
            <IconButton sx={{color: '#95C11F'}}>
                <AddShoppingCartIcon />   
            </IconButton>
            <span style={{color: '#95C11F', textDecoration: 'none'}}>{totalCant()}</span>
        </Container>
    )
}