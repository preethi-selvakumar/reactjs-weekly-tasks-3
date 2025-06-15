import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import withAuthProtection from './hocs/withAuthProtection';

const Checkout = () => <h2 style={{ textAlign: 'center' }}>Checkout (Protected)</h2>;
const ProtectedCheckout = withAuthProtection(Checkout);

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<ProtectedCheckout />} />
      </Routes>
    </>
  );
}

export default App;
