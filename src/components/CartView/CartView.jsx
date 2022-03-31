import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'


export const CartView = () => {
    const {cart, emptyCart} = useContext(CartContext)

    return(
        <Container sx={{ marginTop: '300px'}}>
            {
                cart.length > 0 

                ?   <div>
                        <section>
                            {
                                cart.map((prod) => <CartItem {...prod} />)
                            }
                        </section>
                        <div>
                            <Button variant="contained" sx={{bgcolor: '#95C11F', borderRadius: '20px'}}  onClick={emptyCart}>Vaciar carrito</Button>
                            <Button variant="contained" sx={{bgcolor: '#95C11F', borderRadius: '20px'}}>Terminar mi compra</Button>
                        </div>
                    </div>

                :   <div>
                        <h2>No agregaste items al carrito aún</h2>
                        <hr/>
                        <Button variant="contained" sx={{bgcolor: '#056D45', borderRadius: '20px', marginLeft: '20px' }} >
                            <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>Volver</Link>
                        </Button>  
                    </div>
            }
        </Container>
    )
}

