import './App.css';
import { CartProvider } from './context/CartContext';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { HomeView } from './components/HomeView/HomeView.jsx';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/CartView/CartView';
import { Footer } from './components/Footer/Footer.jsx';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Recetas } from './components/Recetas/Recetas';
import { Checkout } from './components/Checkout/Checkout';


function App() {
  

  return (
    <CartProvider>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={ <HomeView/> } />

          <Route path="/filosofia" element={ <HomeView/> } />

          <Route path="/productos" element={ <ItemListContainer/> } />
          <Route path="/productos/:catId" element={ <ItemListContainer/> } />

          <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />

          <Route path="/cart" element={ <CartView/> } />

          <Route path="/checkout" element={ <Checkout/>} />

          <Route path="/recetas" element={ <Recetas/> } />

          <Route path="*" element={ <Navigate to="/" />  } />
        </Routes>
        

        <Footer/>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
