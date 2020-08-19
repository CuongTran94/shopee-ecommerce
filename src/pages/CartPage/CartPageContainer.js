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
import {
  addProductsToOrder,
  fetchOrder
} from '../../redux/Order/order.actions';

const CartPageContainer = props => {
  const currentUser = useSelector(state => state.user.currentUser) || {};

  const cart = useSelector(state => state.cart) || {};
  const order = useSelector(state => state.order) || {};

  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser.id !== undefined) {
      dispatch(fetchCart(currentUser.id));
      dispatch(fetchOrder(currentUser.id));
    }
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

  const handleCheckout = () => {
    const products = [...cart.products];
    dispatch(addProductsToOrder(products, currentUser.id));
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
      <CartTotal handleCheckout={handleCheckout} />
    </div>
  );
};

CartPageContainer.propTypes = {};

export default CartPageContainer;
