import React from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import contacto from '../../assets/img_contacto/contacto.png'
import { Stack } from '@mui/material';

export const Contacto = () => {
    
  return (
    <section>
        <div className="contacto" style={{ position: 'absolute' , backgroundImage: `url(${contacto})`, marginTop: '97px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 1000, width: '100%'}}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', textAlign: 'center', color: '#FFFFFF', fontSize: '1.5em'}}>
                <h2 style={{marginTop: '100px'}}>Contacto</h2>
                <p>Dejanos tus datos y tu consulta y nos contactaremos a la brevedad con vos.</p>
            </div>
        </div>
        <Box sx={{ width: 750, height: 700, boxShadow: 20, backgroundColor:'white', borderRadius: '20px', padding: '50px', margin: '0 auto', position: 'relative', top:'350px', marginBottom: '200px'}}>
            <Stack component="form" sx={{width: 500, margin: '0 auto'}} spacing={2} noValidate autoComplete="off"
                // onSubmit={handleSubmit}
                >
                <p>Para contactarnos completá el formulario a continuación. </p>
                <TextField label="Nombre y Apellido" id="outlined-size-small"
                    // onChange={handleInputChange}
                    size="small"
                    name="name"
                    // value={values.name}
                    />

                <TextField label="E-mail" id="outlined-size-small"
                    // onChange={handleInputChange}
                    size="small" name="email"
                    // value={values.email}
                    />

                <TextField label="Asunto" id="outlined-size-small"
                    // onChange={handleInputChange}
                    size="small" name="asunto"
                    // value={values.subject}
                    />    
                <TextField id="outlined-multiline-static" label="Mensaje" multiline rows={10}
                    // value={values.message}
                />
                <Button variant="contained" sx={{bgcolor: '#056D45', borderRadius: '20px', marginLeft: '20px', marginTop: '20px' }}>Enviar</Button>
            </Stack>
        </Box>
    </section>        
  );
}
