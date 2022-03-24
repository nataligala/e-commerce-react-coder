import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
// import MenuItem from '@mui/material/MenuItem';



export const Item = ({id, name, price, img, alt, desc, category}) => {


    return (
      <Container key={id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Card sx={{ maxWidth: 350}}>
          <CardMedia component="img" height="auto" src={img} alt={name} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">{name}</Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">Precio: $ {price}</Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">{desc} </Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">{category} </Typography>
          </CardContent>
          <CardActions>

          <Link to={`/detail/${id}`}>Ver Más</Link>
          
  
          </CardActions>
        </Card>
      </Container>       
    )
}