import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="container">
        <h1>Welcome to E-Shop</h1>
        <Link to="/products" className="btn">Browse Products</Link>
    </div>
);

export default Home;
