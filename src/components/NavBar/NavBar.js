import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import logo from '../../assets/img_navbar/logo.png';
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';

// props menu
const pages = ['Productos', 'Precios', 'Recetas', 'Sobre Nosotros'];

//Exporto NavBar
export const NavBar = () => {
  const [setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl" className='header' //bgcolor NavBar // sx={{bgcolor:'#66bb6a'}} 
      >
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 40, display: { xs: 'none', md: 'flex' } }}>
            {/* Mi Tienda Virtual */}
            <Avatar alt="logo" src={logo} sx={{ width: 97, height: 97 }}/>
          </Typography>


          {/* OPCIONES DE NAVBAR*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>

          {/* <Button variant="contained" sx={{bgcolor: '#95C11F'}}>Tienda</Button> */}


          <CartWidget/>
   

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
