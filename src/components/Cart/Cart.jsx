import Store from "../../store/Store";
import Loading from "../Loading/Loading";
import React, { useState, useEffect } from 'react';
import "./Cart.css";

export default function Cart() {
    const cart = Store((state) => state.cart);
    const removeFromCart = Store((state) => state.removeFromCart);
    const clearCart = () => Store.setState({ cart: [] });
    const increaseQuantity = Store((state) => state.increaseQuantity);
    const decreaseQuantity = Store((state) => state.decreaseQuantity);
    const totalPrice = Store((state) => state.totalPrice);
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
        <div className="cart-container">
            <h2 className="cart-header">Carrito</h2>
            <button onClick={clearCart} className="clear-cart-button">Eliminar Todos los Productos</button>
            {cart.length === 0 ? (
                <p className="cart-empty-message">No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul className="cart-list">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.img} alt={item.name} className="cart-item-image" />
                                <span className="cart-item-name">{item.name}</span>
                                <span className="cart-item-price">
                                    $ {item.price * item.quantity}
                                </span>
                                <div className="quantity-controls">
                                    <button
                                        onClick={() => decreaseQuantity(item.id)}
                                        className="quantity-button"
                                    >
                                        -
                                    </button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button
                                        onClick={() => increaseQuantity(item.id)}
                                        className="quantity-button"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="remove-button"
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <h3>Total: $ {totalPrice}</h3>
                    </div>
                </div>
            )}
        </div>
    );
}
