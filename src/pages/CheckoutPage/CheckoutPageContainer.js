import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import CheckoutStep from './components/Steps';
import {
  fetchOrder,
  addInforToOrder,
  setCheckoutSuccess
} from '../../redux/Order/order.actions';

const CheckoutPageContainer = props => {
  const order = useSelector(state => state.order.orderUser) || {};
  const currentUser = useSelector(state => state.user.currentUser) || {};
  const dispatch = useDispatch();
  useEffect(() => {
    const { id } = currentUser;
    if (id !== undefined) {
      dispatch(fetchOrder(id));
    }
  }, [currentUser]);

  const handleSubmitInformation = customerInfo => {
    dispatch(addInforToOrder(customerInfo));
  };

  const handleCheckoutSuccess = (status) => {
    dispatch(setCheckoutSuccess({ status }));
  };

  return (
    <div className="checkout-page">
      <CheckoutStep
        currentUser={currentUser}
        order={order}
        handleSubmit={handleSubmitInformation}
        handleCheckoutSuccess={handleCheckoutSuccess}
        order={order}
      />
    </div>
  );
};

CheckoutPageContainer.propTypes = {};

export default CheckoutPageContainer;
