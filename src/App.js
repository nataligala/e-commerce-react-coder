import './App.css';
import { HomeView } from './components/HomeView/HomeView';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {NavBar} from './components/NavBar/NavBar.js';



function App() {
  
  return (
    <div>
      <NavBar />

      <ItemListContainer greeting="Bienvenido a nuestra Tienda Online de Felices las Cows"/>

      <HomeView/>

    </div>
  );
}

export default App;
