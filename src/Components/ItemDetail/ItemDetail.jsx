import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock';
import Loading from '../Loading/Loading';
import useStore from "../../Store/Store";
import './ItemDetail.css';

export default function ItemDetail() {
    const addToCart = useStore((state) => state.addToCart);
    
    const handleAddToCart = () => {
        if (product) {
            const { id, name, price, img } = product;
            addToCart({ id, name, price, img });
        }
    };
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductById(productId);
                if (data) {
                    setProduct(data);
                } else {
                    console.error("Producto no encontrado");
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [productId]);
    // Funciones para control de cantidad
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const incrementQuantity = () => {
        if (product && quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };
    // Cálculo del precio total
    const calculateTotalPrice = () => {
        return product ? product.price * quantity : 0;
    };
    

    if (loading) return <Loading />;
    if (!product) return <div className="error-message">Producto no encontrado</div>;
    

    return (
        <div className="item-detail-container">
            <div className="item-detail-grid">
                <div className="item-detail-image">
                    <img src={product.img} alt={product.name} /> {/* Imagen única del producto */}
                </div>
                <div className="item-detail-info">
                    <h1>{product.name}</h1>
                    <p className="description">{product.description}</p>
                    <p className="price">Precio: ${product.price}</p>
                    <p className="stocks">Stock: {product.stock}</p>
                    {/* Control de cantidad */}
                    <div className="quantity-controls">
                        <button onClick={decrementQuantity}>-</button>
                        <span>{quantity}</span>
                        <button onClick={incrementQuantity}>+</button>
                    </div>
                    {/* Precio total */}
                    <p className="total-price">Precio Total: ${calculateTotalPrice()}</p>
                    {/* Botón de compra */}
                    <button className="buy-button">
                        Comprar
                    </button>
                    <button onClick={handleAddToCart} className="item-add-button">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}
