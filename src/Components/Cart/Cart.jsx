import React from 'react';
import Store from "../../Store/Store";
import "./Cart.css";

export default function Cart() {
    const cart = Store((state) => state.cart);
    const removeFromCart = Store((state) => state.removeFromCart);

    return (
        <div className="cart-container">
            <h2 className="cart-header">Carrito</h2>
            {cart.length === 0 ? (
                <p className="cart-empty-message">No hay productos en el carrito.</p>
            ) : (
                <ul className="cart-list">
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <img src={item.img} alt={item.name} className="cart-item-image" />
                            <span className="cart-item-name">{item.name}</span>
                            <span className="cart-item-price">$ {item.price}</span>
                            <button 
                                onClick={() => removeFromCart(item.id)} 
                                className="remove-button"
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
