import React from 'react'
import './Recetas.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import receta1 from '../../assets/img_recetas/Receta1.png'
import receta2 from '../../assets/img_recetas/Receta2.png'
import receta3 from '../../assets/img_recetas/Receta3.png'
import receta4 from '../../assets/img_recetas/Receta4.png'
import { Container } from '@mui/material';


export const Recetas = () => {
    const nombreReceta1 = "EMPANADAS DE PICADA SABOR CARNE"
    const nombreReceta2 = "MACARONS CON UNTABLE DE ALMENDRAS"
    const nombreReceta3 = "CHOCOTORTA VEGANA"
    const nombreReceta4 = "PAPAS RELLENAS"


    return (
        <section>
            <div className="recetas">
                <div className="recetas__container">
                    <h2 className="recetas__title">Recetas</h2>
                    <p className="recetas__description">Nuevas ideas para hacer de tus comidas, platos deliciosos y saludables.</p>
                </div>
            </div>
            <Container style={{ display: 'flex', justifyContent:'center', flexWrap: 'wrap', margin: '100px'}}> 
                <Card p={1} sx={{ maxWidth: 250, p: 1, m: 1}}>
                    <CardMedia component="img" height="auto" src={receta1} alt={nombreReceta1} sx={{borderRadius: "5px"}}/>
                    <CardContent>
                        <Typography gutterBottom variant="h7" component="div" sx={{color: '#95C11F', fontWeight:'bold'}}>{nombreReceta1}</Typography>
                    </CardContent>
                </Card>

                <Card p={1} sx={{ maxWidth: 250, p: 1, m: 1}}>
                    <CardMedia component="img" height="auto" src={receta2} alt={nombreReceta2} sx={{borderRadius: "5px"}}/>
                    <CardContent>
                        <Typography gutterBottom variant="h7" component="div" sx={{color: '#95C11F', fontWeight:'bold'}}>{nombreReceta2}</Typography>
                    </CardContent>
                </Card>
                <Card p={1} sx={{ maxWidth: 250, p: 1, m: 1}}>
                    <CardMedia component="img" height="auto" src={receta3} alt={nombreReceta3} sx={{borderRadius: "5px"}}/>
                    <CardContent>
                        <Typography gutterBottom variant="h7" component="div" sx={{color: '#95C11F', fontWeight:'bold'}}>{nombreReceta1}</Typography>
                    </CardContent>
                </Card>
                <Card p={1} sx={{ maxWidth: 250, p: 1, m: 1}}>
                    <CardMedia component="img" height="auto" src={receta4} alt={nombreReceta4} sx={{borderRadius: "5px"}}/>
                    <CardContent>
                        <Typography gutterBottom variant="h7" component="div" sx={{color: '#95C11F', fontWeight:'bold'}}>{nombreReceta4}</Typography>
                    </CardContent>
                </Card>
            </Container>
        </section>        
    )
}