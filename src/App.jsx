import './App.css';
import {NavBar} from './components/NavBar/NavBar.jsx';
import { HomeView } from './components/HomeView/HomeView.jsx';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { CartView } from './components/CartView/CartView.jsx';
import {Footer} from './components/Footer/Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';






function App() {
  

  return (
    <BrowserRouter>

      <NavBar />

      {/* <HomeView/> */}

      <Routes>
        <Route path="/filosofia" element={ <HomeView/> } />
        <Route path="/productos" element={ <ItemListContainer/> } />
        <Route path="/detail" element={ <ItemDetailContainer/> } />
        <Route path="/cart" element={ <CartView/> } />
      </Routes>
      
      

      

      <Footer/>

    </BrowserRouter>
  );
}

export default App;
