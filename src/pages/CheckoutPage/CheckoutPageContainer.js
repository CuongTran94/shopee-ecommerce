import React from 'react';
import PropTypes from 'prop-types';
import CheckoutStep from './components/Steps/CheckoutStep';

const CheckoutPageContainer = () => {
    return (
        <div className="checkout-page">
            <CheckoutStep />
        </div>
    );
};

CheckoutPageContainer.propTypes = {
    
};

export default CheckoutPageContainer;