import React from 'react';
import './Contact.css'; 

export default function Contact() {
    return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      <form className="contacto-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" required></textarea>
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};
