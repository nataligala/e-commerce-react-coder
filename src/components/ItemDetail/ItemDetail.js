import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import { ItemCount } from '../ItemCount/ItemCount';


export const ItemDetail = ({id, name, price, img, alt, category}) => {

    const navigation = useNavigate()

    const handleVolver = () => {
        navigation(-1)
    }
  
    const handleVolverInicio = () => {
        navigation('/')
    }



    return (
      <article>
        <Card className="cards" key={id} sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="auto" src={img} alt={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {price}
            </Typography>
          </CardContent>
          <CardActions>
            <ItemCount stock="5" initial="1" />
            <Button size="small" onClick={handleVolver}>
              Volver
            </Button>
          </CardActions>
          <CardActions>
            <Button size="small" onClick={handleVolverInicio}>
              Volver
            </Button>
          </CardActions>
        </Card>
      </article>
    );
}