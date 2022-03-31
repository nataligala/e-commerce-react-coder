import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';



export const Item = ({id, name, price, img, alt, desc, category}) => {


    return (
      <Card key={id} p={1} sx={{ maxWidth: 300, p: 1, m: 1}}>
          <CardMedia component="img" height="auto" src={img} alt={name} />
          <CardContent>
              <Typography gutterBottom variant="h7" component="div" sx={{color: '#95C11F', fontWeight:'bold'}}>{name}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" sx={{bgcolor: '#95C11F', borderRadius: '20px'}}>
                <Link to={`/detail/${id}`} style={{ textDecoration: 'none', color:'white'}}>Leer Más</Link>
              </Button>
            </CardActions>
        </Card>      
    )
}