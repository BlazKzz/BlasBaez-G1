import React, { useEffect, useState } from 'react';
import { getProducts } from '../../data/asyncMock'; 
import './Slider.css';

const CardSlider = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="slider-container">
      <button onClick={prevSlide} className="slider-button">◀</button>
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.despcription}</p>
              <p>Precio: ${product.price}</p>
              <p>Stock: {product.stock}</p>
            </div>
          ))}
        </div>
      </div>
      <button onClick={nextSlide} className="slider-button">▶</button>
    </div>
  );
};

export default CardSlider;