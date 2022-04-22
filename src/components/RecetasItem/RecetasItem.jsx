import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const RecetasItem = ({id, name, img, alt, subtitle, ingredientstitle, ingredientsdetails, fillingtitle, filling, preparationtitle, preparationdetails}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Card p={1} sx={{ maxWidth: 250, p: 1, m: 1}}>
            <CardMedia component="img" height="auto" src={img} alt={alt} sx={{borderRadius: "5px"}}/>
            <CardContent>
                <Typography gutterBottom variant="h7" component="div" sx={{color: '#95C11F', fontWeight:'bold'}}>{name}</Typography>
                <Button sx={{color: '#95C11F', fontWeight:'bold'}} onClick={handleOpen}>Ver Más</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color: '#676767', fontWeight:'bold'}}>
                            {name}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {subtitle}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2, color: '#676767', fontWeight:'bold'}}>
                            {ingredientstitle}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {ingredientsdetails}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2, color: '#676767', fontWeight:'bold'}}>
                            {fillingtitle}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {filling}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2, color: '#676767', fontWeight:'bold' }}>
                            {preparationtitle}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {preparationdetails}
                        </Typography>
                        <Button sx={{color: '#95C11F', fontWeight:'bold'}} onClick={handleClose}>Cerrar</Button>
                    </Box>
                </Modal>
            </CardContent>
        </Card>
    )    

}