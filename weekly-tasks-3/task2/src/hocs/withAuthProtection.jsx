import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const isLoggedIn = () => {
    return !!localStorage.getItem('token');
};

const withAuthProtection = (WrappedComponent) => {
    const ProtectedComponent = (props) => {
        const [isAuthenticated, setIsAuthenticated] = useState(null);

        useEffect(() => {
            const tokenExists = isLoggedIn();
            setIsAuthenticated(tokenExists);
        }, []);

        if (isAuthenticated === null) {
            return <div style={{ textAlign: 'center', padding: '50px' }}>Checking authentication...</div>;
        }

        if (!isAuthenticated) {
            return <Navigate to="/" replace />;
        }
        
        return <WrappedComponent {...props} />;
    };

    return ProtectedComponent;
};

export default withAuthProtection;
