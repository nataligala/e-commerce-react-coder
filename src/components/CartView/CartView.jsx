import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'


export const CartView = () => {

    const {cart, emptyCart, totalCompra} = useContext(CartContext)

    return(
        <Container sx={{ marginTop: '150px'}}>
            {

                cart.length > 0 
                ?   <div style={{ display: 'flex'}}>
                        <section style={{ display: 'flex', justifyContent:'center', flexWrap: 'wrap'}} >
                            {
                                cart.map((prod) => <CartItem key={prod.id} {...prod} />)
                            }
                        </section>
                        <div style={{ marginTop: '150px'}}>
                            <p style={{textAlign: 'center'}}>Total a abonar: ${totalCompra()}</p>
                            <Button variant="contained" sx={{bgcolor: '#95C11F', borderRadius: '20px'}}  onClick={emptyCart}>Vaciar carrito</Button>
                            <Button variant="contained" sx={{bgcolor: '#95C11F', borderRadius: '20px'}} component={Link} to="/checkout">Iniciar Compra</Button>
                        </div>
                    </div>

                :   <div>
                        <h2>No agregaste items al carrito aún</h2>
                        <hr/>
                        <Button variant="contained" sx={{bgcolor: '#056D45', borderRadius: '20px', marginLeft: '20px' }} >
                            <Link to="/productos" style={{ textDecoration: 'none', color: 'white'}}>Volver</Link>
                        </Button>  
                    </div>

            }
        </Container>
    )
}

