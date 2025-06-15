import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const handleLogin = () => {
        localStorage.setItem('token', 'dummy-token');
        alert('Logged in. You can now access protected routes.');
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('Logged out. Protected routes will redirect.');
    };

    return (
        <nav className="container" style={{ marginBottom: '20px' }}>
            <Link to="/" className="btn">🏠 Home</Link>
            <Link to="/products" className="btn">🛍️ Products</Link>
            <Link to="/checkout" className="btn">✅ Checkout</Link>
            <button className="btn" onClick={handleLogin}>🔓 Login</button>
            <button className="btn" onClick={handleLogout}>🔒 Logout</button>
        </nav>
    );
};

export default Navbar;
