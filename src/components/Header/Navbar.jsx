import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import Store from '../../store/Store'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar (){

  const cart = Store((state) => state.cart);
  const cartCount = cart.length; 

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault(); 
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <a href="/" className="logo">Gaming</a>
      <div className="search-bar">
        <input type="text" placeholder="Busca un Producto" />
      </div>
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div 
            className="dropdown" 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="/">Notebooks</Link>
            {isDropdownOpen && (
            <div className="dropdown-content">
                <h4>Categorias</h4>
              <Link to="/category/ngamer"><p>Gamer</p></Link>  
              <Link to="/category/estudio"><p>Trabajo y estudios</p></Link>
              <Link to="/category/convertible"><p>Convertibles(2-en-1)</p></Link>
            </div>
          )}
        </div>
        <div 
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        > 
          <Link to="/">Pc gamer</Link>
          {isDropdownOpen && (
            <div className="dropdown-content">
                <h4>Categorias</h4>
              <Link to="/category/amd"><p>AMD</p></Link>
              <Link to="/category/intel"><p>INTEL</p></Link>
            </div>
            )}
        </div>
        <div>
          <Link to="/about">Nosotros</Link>
        </div>
        <div>
          <Link to="/contact">Contacto</Link>
        </div>
        <div className="user-icon">
          <Link to="/"><FontAwesomeIcon icon={faUser } /> </Link>
        </div>
          <div className="shopping-cart-icon">
            <Link to="/cart"><FontAwesomeIcon className="icon-bag" icon={faBagShopping} /></Link>
            {cartCount > 0 && (
              <span className='cart-count'>{cartCount}</span>
            )} 
          </div>
      </nav>
    </header>
  );
};