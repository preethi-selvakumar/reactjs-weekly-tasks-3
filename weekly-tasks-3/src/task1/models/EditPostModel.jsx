import React, { useState } from 'react';
import Modal from '../components/Modal';

const EditPostModal = ({ post, onClose }) => {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const handleSave = () => {
        console.log('Updated post:', { title, content });
        onClose(); 
    };

    return (
        <Modal onClose={onClose}>
            <h2>Edit Post</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Post Title"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Post Content"
                    rows="5"
                />
                <div>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={onClose} style={{ background: '#e84118' }}>Cancel</button>
                </div>
            </div>
        </Modal>
    );
};

export default EditPostModal;
