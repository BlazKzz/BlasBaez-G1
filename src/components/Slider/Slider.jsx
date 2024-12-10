import React, { useState, useEffect } from 'react';
import './Slider.css';
import { faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Array de imagenes 
const images = [
    { src: '/public/Ngamer/G1.webp', href: '/' },
    { src: '/public/Pcgamer/amd4.png', href: '/' },
    { src: '/public/Pcgamer/intel2.png', href: '/' },
    { src: '/public/Pcgamer/amd2.png', href: '/' },
    { src: '/public/Pcgamer/intel4.png', href: '/' },
];

export default function Carousel (){
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 25000); // Cambia cada 25 segundos
        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="carousel">
            <button className="left-arrow" onClick={goToPrevious}><FontAwesomeIcon icon={faChevronLeft}/></button>
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <a key={index} href={image.href} target="_blank" rel="noopener noreferrer">
                        <img src={image.src} alt={`carousel ${index}`} className="carousel-image" />
                    </a>
                ))}
            </div>
            <button className="right-arrow" onClick={goToNext}><FontAwesomeIcon icon={faChevronRight}/></button>
            <div className="indicators">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};
