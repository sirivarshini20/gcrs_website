import React from 'react';
import ScrollTopButton from './components/ScrollTop';

const withScrollTopButton = (WrappedComponent) => {
  return (props) => (
    <div>
      <WrappedComponent {...props} />
      <ScrollTopButton />
    </div>
  );
};

export default withScrollTopButton;
