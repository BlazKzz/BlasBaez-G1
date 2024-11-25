import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import Store from '../../Store/Store'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const cart = Store((state) => state.cart); // Obtener el carrito del Store
  const cartCount = cart.length;  //Contar la cantidad de productos

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
          <a href="/" onClick={toggleDropdown}>Tecnología</a>
          {isDropdownOpen && (
            <div className="dropdown-content">
            <Link to="/Notebookpage">
              <h4>Notebooks</h4>
            </Link>
            <a href="/category/ngamer">
              <p>Gamer</p>
            </a>
            <Link to="/products">
              <p>Trabajo y estudios</p>
            </Link>
            <Link to="/products">
              <p>Convertibles(2-en-1)</p>
            </Link>
            <Link to="/products">
              <h4>Celulares</h4>
            </Link>
            <Link to="/products">
              <p>Samsung</p>
            </Link>
            <Link to="/products">
              <p>Iphone</p>
            </Link>
            <Link to="/products">
              <p>Xiaomi</p>
            </Link>
            <Link to="/products">
              <h4>Consolas</h4>
            </Link>
            <Link to="/products">
              <p>Switch</p>
            </Link>
            <Link to="/products">
              <p>Play</p>
            </Link>
            <Link to="/products">
              <p>Xbox</p>
            </Link>
          </div>
        )}
      </div>
      <div 
        className="dropdown"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      > 
        <Link to="/products">Hardware</Link>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <Link to="/products">
              <h4>Tarjetas de Video</h4>
            </Link>
            <Link to="/products">
              <p>Nvidia</p>
            </Link>
            <Link to="/products">
              <p>AMD Radeon</p>
            </Link>
            <Link to="/products">
              <h4>Procesadores</h4>
            </Link>
            <Link to="/products">
              <p>Intel</p>
            </Link>
            <Link to="/products">
              <p>AMD</p>
            </Link>
            <Link to="/products">
              <h4>Ram</h4>
            </Link>
            <Link to="/products">
              <p>DDR4 Desktop</p>
            </Link>
            <Link to="/products">
              <p>DDR4 Notebook</p>
            </Link>
          </div>
        )}
      </div>
      <div 
        className="dropdown"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      > 
        <Link to="/products">Perifericos</Link>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <Link to="/products">
              <h4>Mouses</h4>
            </Link>
            <Link to="/products">
              <p>Opticos</p>
            </Link>
            <Link to="/products">
              <p>Laser</p>
            </Link>
            <Link to="/products">
              <p>Inalambricos</p>
            </Link>
            <Link to="/products">
              <h4>Teclados</h4>
            </Link>
            <Link to="/products">
              <p>Mecanicos</p>
            </Link>
            <Link to="/products">
              <p>Inalambricos</p>
            </Link>
            <Link to="/products">
              <h4>Monitores</h4>
            </Link>
            <a href="/category/monitor">
              <p>144Hz o más</p>
            </a>
            <Link to="/products">
              <p>Con FreeSync</p>
            </Link>
            <Link to="/products">
              <p>Con G-Sync</p>
            </Link>
          </div>
          )}
        </div>
        <div 
          className="dropdown" 
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <div className="user-icon">
            <Link to="">
              <FontAwesomeIcon icon={faUser } /> 
            </Link>
          </div>
          {isDropdownOpen && (
            <div className='dropdown-content'>
            <Link to="/cuenta"><p>Cuenta</p></Link>
            <Link to="/carrito"><p>Ver Carrito</p></Link>
            <Link to="/cerrar-sesion"><p>Cerrar sesión</p></Link>
            </div>
          )}
        </div>
        <div className="shopping-cart-icon">
          <Link to="/cart">
            <FontAwesomeIcon className="icon-bag" icon={faBagShopping} />
          </Link>
          {cartCount > 0 && (
            <span className='cart-count'>
              {cartCount}
            </span>
          )} 
        </div>
      </nav>
    </header>
  );
};

export default Navbar;