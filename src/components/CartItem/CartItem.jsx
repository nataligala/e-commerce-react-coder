import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CartContext } from '../../context/CartContext'
import Typography from '@mui/material/Typography';

export const CartItem = ({name, price, counter, id, img}) => {

    const {removeFromCart} = useContext(CartContext)

    return (

        <Card p={1} sx={{ maxWidth: 300, p: 1, m: 1 }}>
          <CardMedia component="img" height="auto" src={img} alt={name}/>
          <Box sx={{display: 'flex', flexDirection:'column'}}> 
            <CardContent>
              <Typography gutterBottom variant="h7" component="div" sx={{color: '#95C11F', fontWeight:'bold'}}>{name}</Typography>
              <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight:'bold'}}>Precio: ${price}</Typography>
              <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight:'bold'}}>Cantidad seleccionada: {counter}</Typography>
            </CardContent>
          </Box>  
            <CardActions>
              <Button variant="contained" sx={{bgcolor: '#95C11F', borderRadius: '20px'}} onClick={() => { removeFromCart(id) }}>
                <MdDelete/>
              </Button>
            </CardActions>
        </Card> 
    )
}