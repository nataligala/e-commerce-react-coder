import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Item.css';


export const Item = ({id, name, price, img, alt, category}) => {


    return (
            <article>
              <Card className="cards" key={id} sx={{ maxWidth: 350}}>
                <CardMedia component="img" height="auto" src={img} alt={alt} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Ver más</Button>
                </CardActions>
                <ItemCount stock="5" initial="1" />
              </Card>
            </article>       
    )
}