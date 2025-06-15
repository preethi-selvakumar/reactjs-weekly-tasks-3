import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/api';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById(id).then(res => setProduct(res.data));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="container product-detail">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <h3>${product.price}</h3>
        </div>
    );
};

export default ProductDetail;
