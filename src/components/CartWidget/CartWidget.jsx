import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { MenuItem } from '@mui/material';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {
    const {totalCant} = useContext(CartContext)

    return (
        <MenuItem component={Link}>
            <IconButton sx={{color: '#95C11F'}}>
                <AddShoppingCartIcon />   
            </IconButton>
            <span>{totalCant()}</span>
        </MenuItem>
    )
}