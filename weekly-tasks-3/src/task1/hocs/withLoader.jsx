import React from 'react';
import Loader from '../components/Loader';

const withLoader = (WrappedComponent) => {
  return function WithLoaderComponent({ isLoading, error, ...props }) {
    if (isLoading) return <Loader />;

    let errorMessage = '';
    if (error) {
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      } else {
        errorMessage = 'Something went wrong';
      }

      return <p style={{ color: 'red' }}>Error: {errorMessage}</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoader;
