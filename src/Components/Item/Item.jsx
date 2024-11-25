import { Link } from "react-router-dom";
import useStore from "../../Store/Store";
import "./Item.css";

export default function Item({ id, name, price, img }) {
    const addToCart = useStore((state) => state.addToCart);

    const handleAddToCart = () => {
        const product = { id, name, price, img }; // Puedes agregar más propiedades si lo necesitas
        addToCart(product);
    };

    return (
        <div className="item-container">
            <Link to={`/products/${id}`} className="item-image-link">
                <img src={img} alt="Imagen Productos" className="item-image" />
            </Link>
            <Link to={`/products/${id}`} className="item-name">
                {name}
            </Link>
            <h4 className="item-price">$ {price}</h4>
            <button onClick={handleAddToCart} className="item-add-button">
                Agregar al Carrito
            </button>
        </div>
    );
}
