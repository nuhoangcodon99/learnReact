import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import products from './products.js';
import MainMenu from './components/MainMenu';
import Jumbotron from './components/Jumbotron.js'
import Footer  from './components/Footer.js';
import Product from './components/Product.js';
function App() {

  return (
    <div className='App'>
      <MainMenu />
      <Jumbotron/>
      <div className="row">
      {products.map(prod => (
        <div className="col">
          <Product 
          key={prod.name}
          name={prod.name}
          description={prod.description}
          />
        </div>
        
      ))}</div>
      <Footer />
    </div>
  )
  
}

export default App;
