import React from 'react';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './Components/Products/Products';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import HomePage from './Components/Home/Home';
import Notebookpage from './Components/Notebook/Notebook'
import ProductsCategory from './Components/Category/Category';
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
          <Route path="/Notebookpage" element={<Notebookpage />} />
          <Route path='/products/:productId' element={<ItemDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;