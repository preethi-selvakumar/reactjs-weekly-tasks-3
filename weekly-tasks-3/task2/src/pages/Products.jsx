import React, { useEffect, useState } from 'react';
import { getProducts, getCategories } from '../api/api';
import { Link } from 'react-router-dom';
import CartPopup from '../components/CartPopup';
import ProductPreviewModal from '../components/ProductPreviewModal';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showCart, setShowCart] = useState(false);
    const [previewProduct, setPreviewProduct] = useState(null);

    useEffect(() => {
        getProducts().then(res => setProducts(res.data));
        getCategories().then(res => setCategories(res.data));
    }, []);

    const filteredProducts = selectedCategory
        ? products.filter(p => p.category === selectedCategory)
        : products;

    return (
        <div className="container">
            <h2 style={{ textAlign: "center" }}>All Products</h2>

            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="dropdown"
                >
                    <option value="">All Categories</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <button className="btn" onClick={() => setShowCart(true)}>
                🛒 Open Cart
            </button>
            {showCart && <CartPopup onClose={() => setShowCart(false)} />}

            <div className="grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="card">
                        <img src={product.image} alt={product.title} />
                        <h4>{product.title}</h4>
                        <p>Price: ${product.price}</p>
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                            <Link to={`/product/${product.id}`} className="btn">View</Link>
                            <button className="btn" onClick={() => setPreviewProduct(product)}>Quick View</button>
                        </div>
                    </div>
                ))}
            </div>

            {previewProduct && (
                <ProductPreviewModal
                    product={previewProduct}
                    onClose={() => setPreviewProduct(null)}
                />
            )}
        </div>
    );
};

export default Products;
