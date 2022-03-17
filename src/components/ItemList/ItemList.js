import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ItemCount } from '../ItemCount/ItemCount.js';

export const ItemList = ( {productos}) => {

    return (
      <div>
        {productos.map((prod) => (
      
            <div>
            <Card className="cards" key={prod.id} sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="140" src={prod.img} alt={prod.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">{prod.name}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Ver más</Button>
              </CardActions>

              <ItemCount stock="5" initial="1" />
            </Card>
            </div>  
        ))}

      </div>
    );

}       