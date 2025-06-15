import React, { useEffect, useState } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { api } from '../../api/api';

const LeadsList = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newLead, setNewLead] = useState({
        name: '',
        email: '',
        phone: '',
        status: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        api.getLeads().then((data) => {
            setLeads(data);
            setLoading(false);
        });
    }, []);

    const handleChange = (e) => {
        setNewLead({ ...newLead, [e.target.name]: e.target.value });
    };

    const handleAddLead = async (e) => {
        e.preventDefault();
        if (!newLead.name || !newLead.email) {
            alert('Name and Email are required');
            return;
        }

        const added = await api.addLead(newLead);
        setLeads((prev) => [...prev, added]);
        setNewLead({ name: '', email: '', phone: '', status: '' });
        alert('Lead added!');
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this lead?')) {
            await api.deleteLead(id);
            setLeads((prev) => prev.filter((l) => l.id !== id));
        }
    };

    if (loading) return <div className="loading">Loading leads...</div>;

    return (
        <div className="leads-container">

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <Link to="/settings" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
                    ⚙ Go to Settings
                </Link>
            </div>

            <h1 className="leads-heading">Leads</h1>

            <form onSubmit={handleAddLead} className="lead-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newLead.name}
                    onChange={handleChange}
                    className="lead-input"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newLead.email}
                    onChange={handleChange}
                    className="lead-input"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={newLead.phone}
                    onChange={handleChange}
                    className="lead-input"
                />
                <input
                    type="text"
                    name="status"
                    placeholder="Status"
                    value={newLead.status}
                    onChange={handleChange}
                    className="lead-input"
                />
                <button type="submit" className="submit-btn">Add Lead</button>
            </form>

            <div className="leads-grid">
                {leads.map((lead) => (
                    <div key={lead.id} className="lead-card">
                        <div className="lead-info">
                            <h2>{lead.name}</h2>
                            <p>{lead.email}</p>
                        </div>
                        <div>
                            <Link to={`/leads/${lead.id}/edit`} className="edit-btn">Edit</Link>

                            <Link to={`/leads/${lead.id}`} className="edit-btn view-btn">
                                View
                            </Link>

                            <button
                                className="edit-btn delete-btn"
                                onClick={() => handleDelete(lead.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Outlet />
        </div>
    );
};

export default LeadsList;
