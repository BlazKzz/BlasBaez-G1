import React from 'react';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './components/Products/Products';
import ItemDetail from './components/ItemDetail/ItemDetail';
import HomePage from './components/Home/Home';
import Notebookpage from './components/Notebook/Notebook'
import ProductsCategory from './components/Category/Category';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/category/:categoryId' element={<ProductsCategory />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Notebookpage' element={<Notebookpage />} />
          <Route path='/products/:productId' element={<ItemDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;