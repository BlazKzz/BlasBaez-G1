import { Link } from "react-router-dom";
import "./Home.css";
import CardSlider from "../Slider/Slider.";
import Loading from "../Loading/Loading"
import React, { useState, useEffect } from 'react';

export default function HomePage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); 

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />; 
    }

    return (
        <div className="home">
            <div className="home-banner">
                <div className="banner-content">
                    <h2 className="banner-title">Bienvenido a GamingHub</h2>
                    <h3 className="banner-subtitle">Descubre nuestra colección</h3>
                    <Link to="/products" className="shop-now-btn">
                        Comprar Ahora
                    </Link>
                </div>
            </div>
            {/* Categorías Destacadas */}
            <div className="featured-categorie">
                <h2>Categorías populares</h2>
                <div className="categories-grids">
                    <Link to="/category/ngamer" className="category-cards">
                        <img src="./public/Ngamer/G3.jpg" alt="Notebooks gamer" />
                        <h3>Notebooks</h3>
                    </Link>
                    <Link to="/category/amd" className="category-cards">
                        <img src="./public/Pcgamer/amd4.png" alt="Pc gamer" />
                        <h3>ADM</h3>
                    </Link>
                </div>
            </div>
            {/* Productos Destacados */}
            <div className="featured-products">
                <h2>Productos Destacados</h2>
                <CardSlider />
            </div>
        </div>
    );
}