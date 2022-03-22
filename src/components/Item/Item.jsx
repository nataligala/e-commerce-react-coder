import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';



export const Item = ({id, name, price, img, desc, category}) => {


    return (
            <article>
              <Card className="cards" key={id} sx={{ maxWidth: 350}}>
                <CardMedia component="img" height="auto" src={img} alt={name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                </CardContent>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">{desc} </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Link href={`/detail/${id}`}>Ver más</Link>
                  </Button>
                </CardActions>
              </Card>
            </article>       
    )
}