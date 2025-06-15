import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../api/api';
import QuickViewPortal from '../../components/QuickViewPortal';

const LeadDetailSidebar = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [lead, setLead] = useState(null);

    useEffect(() => {
        api.getLead(id).then((data) => {
            if (data) setLead(data);
            else navigate('/leads'); 
        });
    }, [id, navigate]);

    const handleClose = () => {
        navigate('/leads'); 
    };

    if (!lead) return null;

    return (
        <QuickViewPortal>
            <div className="quickview-overlay" onClick={handleClose}></div>
            <div className="quickview-container">
                <button className="close-btn" onClick={handleClose}>✖</button>
                <h2 className="lead-detail-title">{lead.name}</h2>
                <div className="lead-detail-item">
                    <span className="lead-label">Email:</span>
                    <span className="lead-value">{lead.email}</span>
                </div>
                <div className="lead-detail-item">
                    <span className="lead-label">Phone:</span>
                    <span className="lead-value">{lead.phone || 'N/A'}</span>
                </div>
                <div className="lead-detail-item">
                    <span className="lead-label">Status:</span>
                    <span className="lead-value">{lead.status || 'Not specified'}</span>
                </div>
            </div>
        </QuickViewPortal>
    );
};

export default LeadDetailSidebar;
