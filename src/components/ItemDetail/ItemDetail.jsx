import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import { CartContext } from '../../context/CartContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import { ItemCount } from '../ItemCount/ItemCount';
import { Stack } from '@mui/material';


export const ItemDetail = ({ id, name, img, weight, desc, price, ingredients, traces, glutenfree, stock }) => {

  const {addToCart, isInCart } = useContext(CartContext)

  
  const navigate = useNavigate()

  const [counter, setCounter] = useState(0);


  const handleVolver = () => {
    navigate(-1)
  }

  
  const handleVolverInicio = () => {
    navigate('/')
  }

  const handleAgregar = () =>{

    if (counter > 0){

        addToCart({
            id,
            name,
            price,
            img,
            counter
        })
    }

}




    return (
      <Card sx={{m: 12, mt: 16}}> 
          <Box sx={{display: 'flex'}}>
              <CardMedia component="img" height="auto" src={img} alt={name} sx={{maxWidth: 350}}/>
              <Box sx={{display: 'flex', flexDirection:'column'}}>
                <CardContent>
                  <Typography gutterBottom component="div">
                    {name}
                  </Typography>
                  <Typography gutterBottom component="div">
                    {weight}
                  </Typography>
                  <Typography gutterBottom component="div">
                    {desc}
                  </Typography>
                  <Typography gutterBottom component="div">
                    <p style={{fontWeight:'bold'}}>Ingredientes:</p>
                    {ingredients}
                  </Typography>
                  <Typography gutterBottom component="div">
                    {traces}
                  </Typography>
                  <Typography gutterBottom component="div">
                    {glutenfree}
                  </Typography>
                  <Typography gutterBottom component="div">
                    Precio: $ {price}
                  </Typography>
                </CardContent>
              </Box>
          </Box>

          {
                !isInCart(id)
                ?  <ItemCount 
                        stock={stock} 
                        counter={counter} 
                        setCounter={setCounter}
                        onAdd={handleAgregar}
                    />
                :   <Button variant="contained" sx={{bgcolor: '#056D45', borderRadius: '20px', marginLeft: '20px' }} >
                      <Link to="/cart" style={{ textDecoration: 'none', color: 'white'}}>Terminar mi compra</Link>
                    </Button>  

            }


          <CardActions sx={{display: 'flex', flexDirection:'column'}}>
              <Stack spacing={2} direction="row" sx={{margin: '20px'}}>
                <Button onClick={handleVolver} variant="outlined" sx={{borderColor: '#056D45', color: '#056D45', borderRadius: '20px'}}>
                  Volver a Productos
                </Button>
                <Button variant="outlined" sx={{borderColor: '#056D45', color: '#056D45', borderRadius: '20px'}} onClick={handleVolverInicio}>
                  Inicio
                </Button>
              </Stack>
          </CardActions>
        </Card>
  )
}