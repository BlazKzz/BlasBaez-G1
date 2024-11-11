import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from "../../data/asyncMock"; 
import './Item.css'; 

const ItemCard = ({ product }) => {
    return (
        <Link to={`/products/${product.id}`} className="card"> 
            <img alt={product.name} src={product.img} />
            <div className="badge">{product.category}</div>
            <div className="title">{product.name}</div>
            <div className="price">${product.price.toFixed(2)}</div>
            <div className="description">{product.description}</div> 
            <div className="stock">Stock: {product.stock}</div>
        </Link>
    );
};

const Item = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                console.log(productsData); 
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products:", error); 
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container">
            {products.map(product => (
                <ItemCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Item; 
