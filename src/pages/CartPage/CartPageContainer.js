import React from 'react';
import PropTypes from 'prop-types';
import ListCart from './ListCart';

const CartPageContainer = () => {
    return (
        <div className="cart-page">
            <ListCart />
        </div>
    );
};

CartPageContainer.propTypes = {
    
};

export default CartPageContainer;