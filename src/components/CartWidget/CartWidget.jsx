import React, { useContext } from 'react';
import "./CartWidget.css";
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { MenuItem } from '@mui/material';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {
    const {totalCant, cart} = useContext(CartContext)

    return (
        <MenuItem className={cart.length === 0 ? 'hidden' : ''}>
            <Link to="/cart">
                <IconButton sx={{color: '#95C11F'}}>
                    <AddShoppingCartIcon />   
                </IconButton>
                <span>{totalCant()}</span>
            </Link>
        </MenuItem>
    )
}