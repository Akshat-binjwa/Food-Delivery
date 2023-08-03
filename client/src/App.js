import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import { useState } from 'react';
import Checkout from './Pages/Checkout';

function App() {

    const [Cart,SetCart]= useState([]);

  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home Cart={Cart} SetCart={SetCart} />} />
        <Route exact path='/about' element={<About Cart={Cart} SetCart={SetCart} />} />
        <Route exact path='/contact' element={<Contact Cart={Cart} SetCart={SetCart} />} />
        <Route exact path='/register' element={<Register Cart={Cart} SetCart={SetCart}/>} />
        <Route exact path='/login' element={<Login Cart={Cart} SetCart={SetCart}/>} />
        <Route exact path='/checkout' element={<Checkout Cart={Cart} SetCart={SetCart}/>} />
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
