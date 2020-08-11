import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ListCart from "./ListCart";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../redux/Cart/cart.actions";

const CartPageContainer = (props) => {
  const currentUser = useSelector((state) => state.user.currentUser) || {};

  const cart = useSelector((state) => state.cart) || {};

  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser.id !== undefined) dispatch(fetchCart(currentUser.id));
  }, [currentUser]);
  
  return (
    <div className="cart-page">
      <ListCart />
    </div>
  );
};

CartPageContainer.propTypes = {};

export default CartPageContainer;
