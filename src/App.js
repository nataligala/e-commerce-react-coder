import './App.css';
import { HomeView } from './components/HomeView/HomeView';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {NavBar} from './components/NavBar/NavBar.js';



function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer/>
      <HomeView/>
    </>
  );
}

export default App;
