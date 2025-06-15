import React from 'react';

const withPermissions = (Component, requiredPermission) => {
  return (props) => {
    const userPermissions = ['canEditLead']; 

    if (userPermissions.includes(requiredPermission)) {
      return <Component {...props} />;
    }

    return <div>You do not have permission to view this page.</div>;
  };
};

export default withPermissions;
