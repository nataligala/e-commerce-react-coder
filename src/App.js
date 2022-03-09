import './App.css';
import {Footer} from './components/Footer/Footer.js';
import { HomeView } from './components/HomeView/HomeView.js';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';
import {NavBar} from './components/NavBar/NavBar.js';




function App() {
  

  return (
    <div>
      <NavBar />

      <ItemListContainer greeting="Bienvenidos a nuestra Tienda Online de Felices las Cows"/>

      <HomeView/>

      <Footer/>

    </div>
  );
}

export default App;
