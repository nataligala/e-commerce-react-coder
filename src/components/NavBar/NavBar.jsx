import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import logo from '../../assets/img_navbar/logo.png';
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';

// props menu
const pages = ['Filosofía', 'Productos', 'Recetas', 'Contacto', 'Prensa'];

//Exporto NavBar
export const NavBar = () => {
  const [setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" className='header'>
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 40, display: { xs: 'none', md: 'flex' } }}>
            {/* Mi Tienda Virtual */}
            <Avatar alt="logo" src={logo} sx={{ width: 97, height: 97 }}/>
          </Typography>


          {/* OPCIONES DE NAVBAR*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <nav>
                <Button onClick={handleCloseNavMenu} >
                  <Link href="/filosofia" underline="none" sx={{color: 'white', display: 'block' }}>
                    Filosofía
                  </Link>
                </Button>  

                <Button onClick={handleCloseNavMenu} >
                  <Link href="/productos" underline="none" sx={{color: 'white', display: 'block' }}>
                    Productos
                  </Link>
                </Button> 

                <Button onClick={handleCloseNavMenu} >
                  <Link href="/recetas" underline="none" sx={{color: 'white', display: 'block' }}>
                    Recetas
                  </Link>
                </Button>

                <Button onClick={handleCloseNavMenu} >
                  <Link href="/contacto" underline="none" sx={{color: 'white', display: 'block' }}>
                    Contacto
                  </Link>
                </Button>

                <Button onClick={handleCloseNavMenu} >
                  <Link href="/prensa" underline="none" sx={{color: 'white', display: 'block' }}>
                    Prensa
                  </Link>
                </Button>
            </nav>
          </Box>

          {/* <Button variant="contained" sx={{bgcolor: '#95C11F'}}>Tienda</Button> */}
          <Link href="/cart" underline="none" sx={{color: 'white', display: 'block' }}>
            <CartWidget/>
          </Link>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;