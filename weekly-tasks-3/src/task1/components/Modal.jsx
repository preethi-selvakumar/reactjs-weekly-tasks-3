import ReactDOM from 'react-dom';
import React from 'react';

const Modal = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
                <button className="modal-close" onClick={onClose}>X</button>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;
