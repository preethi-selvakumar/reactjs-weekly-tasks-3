import React from 'react';
import ReactDOM from 'react-dom';

const ProductPreviewModal = ({ product, onClose }) => {
    return ReactDOM.createPortal(
        <div className="popup" onClick={onClose}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
                <p>{product.description}</p>
                <p><strong>${product.price}</strong></p>
                <button className="btn" onClick={onClose}>Close</button>
            </div>
        </div>,
        document.body
    );
};

export default ProductPreviewModal;
