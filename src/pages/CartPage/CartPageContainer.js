import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ListCart from './components/ListCart';

import {
  fetchCart,
  deleteItem,
  decreaseQuantity,
  increaseQuantity,
  handleQuantity
} from '../../redux/Cart/cart.actions';
import CartTotal from './components/CartTotal';

const CartPageContainer = props => {
  const currentUser = useSelector(state => state.user.currentUser) || {};

  const cart = useSelector(state => state.cart) || {};

  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser.id !== undefined) dispatch(fetchCart(currentUser.id));
  }, [currentUser]);

  const handleDelete = id => {
    dispatch(deleteItem(id));
  };

  const handleDecrement = id => {
    dispatch(decreaseQuantity(id));
  };

  const handleIncrement = id => {
    dispatch(increaseQuantity(id));
  };

  const handleBlur = (id, pro_quantity) => {
    dispatch(handleQuantity(id, Number(pro_quantity)));
  };

  return (
    <div className="cart-page">
      <ListCart
        onBlur={handleBlur}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
        onDelete={handleDelete}
        cart={cart}
      />
      <CartTotal />
    </div>
  );
};

CartPageContainer.propTypes = {};

export default CartPageContainer;
