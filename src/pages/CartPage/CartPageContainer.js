import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ListCart from "./components/ListCart";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, deleteItem } from "../../redux/Cart/cart.actions";

const CartPageContainer = (props) => {
  const currentUser = useSelector((state) => state.user.currentUser) || {};

  const cart = useSelector((state) => state.cart) || {};

  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser.id !== undefined) dispatch(fetchCart(currentUser.id));
  }, [currentUser]);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="cart-page">
      <ListCart onDelete={handleDelete} cart={cart} />
    </div>
  );
};

CartPageContainer.propTypes = {};

export default CartPageContainer;
