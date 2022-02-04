import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Item from './pages/Item'
import Cart from './pages/Cart'

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='shop' element={<Shop />} />
        <Route exact path='product/:id' element={<Item />} />
        <Route exact path='cart' element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
