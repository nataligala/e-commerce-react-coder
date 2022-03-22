import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function CartWidget() {

    
    return (
        <Link to="/cart">
            <IconButton sx={{color: '#95C11F'}} aria-label="Agregar a carrito" size="large">
                <AddShoppingCartIcon />   
            </IconButton>
        </Link>
    )
}