import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/img_navbar/logo.png';
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';




export const NavBar = () => {

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" className='header'>
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 40, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/">
              <Avatar  alt="logo" src={logo} sx={{ width: 97, height: 97 }}/>
            </Link>
          </Typography>


          {/* OPCIONES DE NAVBAR*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="filosofia" style={{ textDecoration: 'none'}} >
              <MenuItem sx={{ my: 2, color: 'white', display: 'block'}}>
                Filosofía
              </MenuItem>
            </Link>

            <Link to="productos" style={{ textDecoration: 'none'}}>
              <MenuItem sx={{ my: 2, color: 'white', display: 'block'}}>
              Productos
              </MenuItem>
            </Link>

            <Link to="recetas" style={{ textDecoration: 'none'}}>
              <MenuItem sx={{ my: 2, color: 'white', display: 'block'}}>
              Recetas
              </MenuItem>
            </Link>
            <Link to="contacto" style={{ textDecoration: 'none'}}>
              <MenuItem sx={{ my: 2, color: 'white', display: 'block'}}>
              Contacto
              </MenuItem>
            </Link>
            <Link to="prensa" style={{ textDecoration: 'none'}}>
              <MenuItem sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none'}}>
              Prensa
              </MenuItem>
            </Link>
          </Box>

          <Link to="cart">
            <CartWidget/>
          </Link>  
          {/* <Button variant="contained" sx={{bgcolor: '#95C11F'}}>Tienda</Button> */}

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
