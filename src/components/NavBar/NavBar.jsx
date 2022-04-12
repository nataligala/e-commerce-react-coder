import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { bindMenu } from 'material-ui-popup-state';
import logo from '../../assets/img_navbar/logo.png';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import { usePopupState, bindHover} from 'material-ui-popup-state/hooks'



export const NavBar = () => {

  const [setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoMenu',
  })

  return (    
    <AppBar position="fixed">
      <Container maxWidth="xl" sx={{backgroundColor:'#333333'}}>
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 40, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/">
              <Avatar  alt="logo" src={logo} sx={{ width: 97, height: 97 }}/>
            </Link>
          </Typography>
          {/* OPCIONES DE NAVBAR*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <MenuItem  sx={{ my: 2, color: 'white', display: 'block'}} component={Link} to="filosofia">Filosofía</MenuItem>

            <React.Fragment>
              <MenuItem sx={{ my: 2, color: 'white', display: 'block'}} component={Link} to="/productos" onClick={handleClick} {...bindHover(popupState)}>
                Productos
              </MenuItem>
              <HoverMenu {...bindMenu(popupState)} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
                <MenuItem onClick={popupState.close} component={Link} to="productos/aderezos">Aderezos</MenuItem>
                <MenuItem onClick={popupState.close} component={Link} to="productos/alfajores">Alfajores</MenuItem>
                <MenuItem onClick={popupState.close} component={Link} to="productos/bebibles">Bebibles</MenuItem>
                <MenuItem onClick={popupState.close} component={Link} to="productos/carnesvegetales">Carnes Vegetales</MenuItem>
                <MenuItem onClick={popupState.close} component={Link} to="productos/pizzas">Pizzas</MenuItem>
                <MenuItem onClick={popupState.close} component={Link} to="productos/postres">Postres</MenuItem>
                <MenuItem onClick={popupState.close} component={Link} to="productos/quesos">Quesos</MenuItem>
                <MenuItem onClick={popupState.close} component={Link} to="productos/untables">Untables</MenuItem>
              </HoverMenu>
            </React.Fragment>

            <MenuItem  sx={{ my: 2, color: 'white', display: 'block'}} component={Link} to="recetas">Recetas</MenuItem>
            <MenuItem  sx={{ my: 2, color: 'white', display: 'block'}} component={Link} to="contacto">Contacto</MenuItem>
          </Box>

          <MenuItem component={Link} to="cart">
            <CartWidget/>
          </MenuItem>
          {/* <Button variant="contained" sx={{bgcolor: '#95C11F'}}>Tienda</Button> */}
        </Toolbar>
      </Container>
    </AppBar>
);

}
