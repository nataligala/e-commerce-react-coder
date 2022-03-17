import './App.css';
import {Footer} from './components/Footer/Footer.js';
import { HomeView } from './components/HomeView/HomeView.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import {NavBar} from './components/NavBar/NavBar.js';





function App() {
  

  return (
    <main>
      <NavBar />

      <HomeView/>

      <ItemListContainer greeting="Bienvenidos a nuestra Tienda Online de Felices las Cows"/>

      

      <Footer/>

    </main>
  );
}

export default App;
