import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { ItemCount } from '../ItemCount/ItemCount';
import { Stack } from '@mui/material';


export const ItemDetail = ({ id, name, img, weight, desc, price, ingredients, traces, glutenfree, stock }) => {

    const navigate = useNavigate()

    const [counter, setCounter] = useState(1);

    const [agregado, setAgregado] = useState(false);

    const handleVolver = () => {
        navigate(-1)
    }
    
    const handleVolverInicio = () => {
      navigate('/')
    }

    const handleAgregar = () =>{

      if (counter > 0){

          console.log('Item agregado: ', {
              id,
              name,
              price,
              counter
          })

          setAgregado(true)

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
                    <p>Ingredientes</p>
                    {ingredients}
                  </Typography>
                  <Typography gutterBottom component="div">
                    {traces}
                  </Typography>
                  <Typography gutterBottom component="div">
                    {glutenfree}
                  </Typography>
                </CardContent>
              </Box>
          </Box>

          {
                !agregado
                ?  <ItemCount 
                        stock={stock} 
                        counter={counter} 
                        setCounter={setCounter}
                        onAdd={handleAgregar}
                    />
                :   <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>  

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