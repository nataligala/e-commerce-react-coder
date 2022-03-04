import './App.css';
import { HomeView } from './components/HomeView/HomeView';
import {NavBar} from './components/NavBar/NavBar.js';


function App() {
  return (
    <>
      <NavBar />
      <HomeView/>
    </>
  );
}

export default App;
