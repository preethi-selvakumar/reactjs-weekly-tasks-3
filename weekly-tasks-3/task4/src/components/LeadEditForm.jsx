import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/api';

const LeadEditForm = ({ leadId }) => {
    const navigate = useNavigate();

    const [lead, setLead] = useState(null);
    const [form, setForm] = useState({ name: '', email: '' });

    useEffect(() => {
        api.getLead(leadId).then((data) => {
            setLead(data);
            setForm({ name: data.name, email: data.email });
        });
    }, [leadId]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.updateLead(leadId, form).then(() => {
            alert('Lead updated');
            navigate('/leads'); 
        });
    };

    if (!lead) return <div className="loading">Loading...</div>;

    return (
        <form className="lead-form" onSubmit={handleSubmit}>
            <input
                className="lead-input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                className="lead-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <button className="submit-btn" type="submit">
                Save
            </button>
        </form>
    );
};

export default LeadEditForm;
