import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getCart } from '../api/api';

const CartPopup = ({ onClose }) => {
    const [cartData, setCartData] = useState(null);

    useEffect(() => {
        getCart().then(res => setCartData(res.data));
    }, []);

    return ReactDOM.createPortal(
        <div className="popup">
            <div className="popup-content">
                <h3>Cart</h3>
                {cartData ? (
                    <pre>{JSON.stringify(cartData, null, 2)}</pre>
                ) : (
                    <p>Loading...</p>
                )}
                <button className="btn" onClick={onClose}>Close</button>
            </div>
        </div>,
        document.body
    );
};

export default CartPopup;
