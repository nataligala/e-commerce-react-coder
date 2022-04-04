import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/img_navbar/logo.png';
import "./NavBar.css";
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';




export const NavBar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <MenuItem sx={{ my: 2, color: 'white', display: 'block'}} id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                Productos
                </MenuItem>

                <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
                  <Link to="productos/aderezos">
                    <MenuItem onClick={handleClose}>Aderezos</MenuItem>
                  </Link>
                  <Link to="productos/alfajores">  
                    <MenuItem onClick={handleClose}>Alfajores</MenuItem>
                    </Link>
                    <Link to="productos/bebibles">  
                      <MenuItem onClick={handleClose}>Bebibles</MenuItem>
                    </Link>
                    <Link to="productos/carnesvegetales">
                      <MenuItem onClick={handleClose}>Carnes Vegetales</MenuItem>
                    </Link>
                    <Link to="productos/pizzas">
                      <MenuItem onClick={handleClose}>Pizzas</MenuItem>
                    </Link>
                    <Link to="productos/postres">
                      <MenuItem onClick={handleClose}>Postres</MenuItem>
                    </Link>
                    <Link to="productos/quesos">
                      <MenuItem onClick={handleClose}>Quesos</MenuItem>
                    </Link>
                    <Link to="productos/untables">
                      <MenuItem onClick={handleClose}>Untables</MenuItem>
                    </Link>
                </Menu>
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
          <Link to="cart" style={{ textDecoration: 'none'}}>
            <CartWidget/>
          </Link>  
          {/* <Button variant="contained" sx={{bgcolor: '#95C11F'}}>Tienda</Button> */}
        </Toolbar>
      </Container>
    </AppBar>
);

}
