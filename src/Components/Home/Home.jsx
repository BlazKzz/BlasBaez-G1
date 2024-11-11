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
                    <Link to="/notebooks-gamer" className="category-cards">
                        <img src="./public/Ngamer/G1.webp" alt="Notebooks gamer" />
                        <h3>Notebooks gamer</h3>
                    </Link>
                    <Link to="/ps5" className="category-cards">
                        <img src="./public/Ngamer/G1.webp" alt="PS5" />
                        <h3>xd</h3>
                    </Link>
                    <Link to="/smartphones-5g" className="category-cards">
                        <img src="./public/Ngamer/G1.webp" alt="Smartphones 5G" />
                        <h3>xd </h3>
                    </Link>
                    <Link to="/tarjetas-de-video-gamer" className="category-cards">
                        <img src="./public/Ngamer/G1.webp" alt="Monitores gamer" />
                        <h3>Tarjetas de video gamer</h3>
                    </Link>
                    <Link to="/tarjetas-de-video-gamer" className="category-cards">
                        <img src="./public/Ngamer/G1.webp" alt="Monitores gamer" />
                        <h3>Tarjetas de video gamer</h3>
                    </Link>
                    <Link to="/tarjetas-de-video-gamer" className="category-cards">
                        <img src="./public/Ngamer/G1.webp" alt="Monitores gamer" />
                        <h3>Tarjetas de video gamer</h3>
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