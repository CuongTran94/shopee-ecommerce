import React from 'react';
import PropTypes from 'prop-types';
import ListCart from './components/ListCart';
import CartTotal from './components/CartTotal';

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