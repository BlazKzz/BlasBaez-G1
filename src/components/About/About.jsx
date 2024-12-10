import React from 'react';
import './About.css';

export default function About(){
  return (
        <div className="aboutus-container">
            <h1 className='header-container'>Sobre Nosotros</h1>
            <p>
                Bienvenido a nuestra tienda de Notebooks y Computadoras. 
                Nos especializamos en ofrecerte los mejores productos de tecnología 
                para satisfacer tus necesidades, ya sea para trabajo, estudio o entretenimiento.
            </p>
            <h2 className='caption-container'>Nuestra Misión</h2>
            <p>
                Nuestra misión es proporcionar a nuestros clientes productos de alta calidad 
                a precios competitivos.
            </p>
            <h2 className='caption-container'>Nuestra Visión</h2>
            <p>
                Nos esforzamos por ser líderes en el mercado de tecnología, 
                innovando constantemente y adaptándonos a las necesidades de nuestros clientes.
            </p>
            <h2 className='caption-container'>¿Por qué elegirnos?</h2>
            <ul>
                <li>Amplia variedad de productos de las mejores marcas.</li>
                <li>Asesoramiento personalizado para ayudarte a elegir lo que necesitas.</li>
                <li>Garantía de satisfacción y soporte post-venta.</li>
            </ul>
        </div>
    );
};
