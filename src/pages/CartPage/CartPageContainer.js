import React from 'react';
import PropTypes from 'prop-types';
import ListCart from './ListCart';
import CartTotal from './CartTotal';

const CartPageContainer = () => {
    return (
        <div className="cart-page">
            <ListCart />
            <CartTotal />
        </div>
    );
};

CartPageContainer.propTypes = {
    
};

export default CartPageContainer;