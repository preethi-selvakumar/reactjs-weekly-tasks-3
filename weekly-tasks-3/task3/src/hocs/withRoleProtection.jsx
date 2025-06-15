import React from 'react';

const withRoleProtection = (WrappedComponent, allowedRole = 'student') => {
    return (props) => {
        const userRole = localStorage.getItem('role'); // or context

        if (userRole !== allowedRole) {
            return <p>Access denied. Role: {userRole}</p>;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withRoleProtection;
