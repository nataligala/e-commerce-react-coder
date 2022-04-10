import React, { useContext, useState } from 'react'
import { Button, Container } from '@mui/material'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { CartContext } from '../../context/CartContext'
import { Navigate } from 'react-router-dom';
import { validarDatos } from '../../helpers/validarDatos'
import { db } from '../../firebase/config'
import { addDoc, collection, Timestamp } from 'firebase/firestore/lite'


export const Checkout = () => {

    const {cart, totalCompra} = useContext(CartContext) 


    const [values, setValues] = useState({
        name:'',
        lastname:'',
        email:''
    })

    const handleInputChange = (e) =>{

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) =>{
        e.preventDefault()

        // Exporto a helper validarDatos las validaciones de cada campo
        if(!validarDatos(values)) {return}

        const orden = {
            buyer: {...values},
            items: cart,
            total: totalCompra(),
            date: Timestamp.fromDate ( new Date())
        }

        const orderRef = collection(db, "orders")

        addDoc(orderRef, orden)
            .then((res) => {
                console.log(res.id)
            })

        console.log(orden)
    }

  return (

    <>
            {cart.length === 0 
                ? <Navigate to="/"/>
                :
                    <Container sx={{ marginTop: '150px', marginBottom: '50px'}}>
                        <h2>Resumen de compra</h2>
                        <p>Por favor, ingresá tus datos debajo.</p>
                        <Stack
                            component="form"
                            sx={{
                                width: '25ch', marginTop: '20px'
                            }}
                            spacing={2}
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                            >
                            <div>
                                <TextField
                                    label="Nombre"
                                    id="outlined-size-small"
                                    onChange={handleInputChange}
                                    size="small"
                                    name="name"
                                    value={values.name}
                                    />
                            </div>

                            <div>
                                <TextField
                                    label="Apellido"
                                    id="outlined-size-small"
                                    onChange={handleInputChange}
                                    size="small"
                                    name="lastname"
                                    value={values.lastname}
                                    />
                            </div>
                            <div>
                                <TextField
                                    label="E-mail"
                                    id="outlined-size-small"
                                    onChange={handleInputChange}
                                    size="small"
                                    name="email"
                                    value={values.email}
                                    />
                            </div>
                    </Stack>

                        <Button variant="contained" sx={{bgcolor: '#056D45', borderRadius: '20px', marginLeft: '20px', marginTop: '20px' }} onClick={handleSubmit}>Finalizar</Button>
                    </Container>  
            }
    </>

    )
}
