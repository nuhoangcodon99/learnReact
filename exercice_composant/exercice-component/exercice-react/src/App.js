import { Fragment } from 'react';
import './App.css';
import MainMenu from './MainMenu';
import 'bootstrap/dist/css/bootstrap.css';
import Jumbotron from './Jumbotron.js'
import Footer  from './Footer.js';
function App() {

  return (
    <div className='App'>
      <MainMenu />
      <Jumbotron/>
      <Footer />
    </div>
  )
  
}

export default App;
