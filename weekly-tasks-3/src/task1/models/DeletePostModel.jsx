import React from 'react';
import Modal from "../components/Modal";

const DeletePostModal = ({ postId, onClose, onDeleteConfirm }) => {
    const handleDelete = () => {
        onDeleteConfirm(postId); 
        onClose(); 
    };

    return (
        <Modal onClose={onClose}>
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this post?</p>
            <div>
                <button onClick={handleDelete} style={{ background: '#e84118' }}>Yes, Delete</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </Modal>
    );
};

export default DeletePostModal;
