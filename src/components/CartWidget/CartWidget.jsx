import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { MenuItem } from '@mui/material';

export const CartWidget = () => {

    
    return (
        <MenuItem component={Link}>
            <IconButton sx={{color: '#95C11F'}}>
                <AddShoppingCartIcon />   
            </IconButton>
        </MenuItem>
    )
}