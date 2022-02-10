import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Item from './pages/Item'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='shop' element={<Shop />} />
          <Route exact path='product/:id' element={<Item />} />
          <Route exact path='blog' element={<Blog />} />
          <Route exact path='contact' element={<Contact />} />
          <Route exact path='cart' element={<Cart />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
