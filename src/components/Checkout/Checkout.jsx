import React, { useContext, useState } from 'react'
import { Button, Container } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { CartContext } from '../../context/CartContext'
import { Navigate } from 'react-router-dom';
import { generarOrden } from '../../firebase/generarOrden'
import { validarDatos } from '../../helpers/validarDatos'


export const Checkout = () => {

    const {cart, emptyCart, totalCompra} = useContext(CartContext) 


    const [values, setValues] = useState({ name: '', lastname: '', email: '', emailConfirm: ''})

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        // Exporto a helper validarDatos las validaciones de cada campo
        if(!validarDatos(values)) { return }

        generarOrden(values, cart, emptyCart, totalCompra)
        console.log("checkout: ", values)
    }


  return (

    <>
            {cart.length === 0 
                ? <Navigate to="/"/>
                :
                    <Container sx={{ marginTop: '150px', marginBottom: '50px'}}>
                        <h2>Resumen de compra</h2>
                        <p>Por favor, ingresá tus datos debajo.</p>
                        <FormControl sx={{width: '25ch', marginTop: '20px'}} spacing={3} onSubmit={handleSubmit}>
                            <TextField
                                label="Nombre"
                                id="outlined-size-small"
                                onChange={handleInputChange}
                                size="small"
                                name="name"
                                value={values.name}
                                />   
                            <TextField
                                label="Apellido"
                                id="outlined-size-small"
                                onChange={handleInputChange}
                                size="small"
                                name="lastname"
                                value={values.lastname}
                                />   
                            <TextField
                                label="email"
                                id="outlined-size-small"
                                onChange={handleInputChange}
                                size="small"
                                name="email"
                                value={values.email}
                                />  
                            <TextField
                                label="Repita su email"
                                id="outlined-size-small"
                                onChange={handleInputChange}
                                size="small"
                                name="emailConfirm"
                                value={values.emailConfirm}
                                />      
                        <Button  onClick={handleSubmit} variant="contained" sx={{bgcolor: '#056D45', borderRadius: '20px', marginLeft: '20px', marginTop: '20px' }}>Generar orden de pago</Button>        
                    </FormControl>

                        
                    </Container>  
            }
    </>

    )
}
