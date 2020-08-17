import React, { useState, useEffect } from 'react';
import { Steps, Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faCreditCard,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import './styles.scss';
import ShippingAddress from '../ShippingAddress';
import OrderReview from '../OrderReview';
import PaymentMethod from '../Payment';
import CheckoutSuccess from '../CheckoutSuccess';
import { fetchOrder } from '../../../../redux/Order/order.actions';

const { Step } = Steps;

const CheckoutStep = props => {
  const {
    order: { products },
    handleSubmit,
    order,
    handleCheckoutSuccess,
    currentUser
  } = props;

  const [current, setCurrent] = useState(0);

  const onChange = current => {
    setCurrent(current);
  };

  const renderStepForm = () => {
    if (current === 0) {
      return (
        <ShippingAddress
          changeCurrent={onChange}
          order={order}
          handleSubmit={handleSubmit}
        />
      );
    } else {
      if (current === 1) {
        return (
          <PaymentMethod
            changeCurrent={onChange}
            handleCheckoutSuccess={handleCheckoutSuccess}
            order={order}
          />
        );
      }
    }
    return <CheckoutSuccess />;
  };

  return (
    <div className="checkout-step">
      <div className="container">
        <Row gutter={30}>
          <Col span={16}>
            <Steps current={current} onChange={onChange}>
              <Step
                title="Thông tin người mua"
                icon={<FontAwesomeIcon icon={faAddressCard} />}
              ></Step>
              <Step
                title="Hình thức thanh toán"
                icon={<FontAwesomeIcon icon={faCreditCard} />}
              ></Step>
              <Step
                title="Hoàn tất đơn hàng"
                icon={<FontAwesomeIcon icon={faCheck} />}
              ></Step>
            </Steps>
            <div className="checkout-form">{renderStepForm()}</div>
          </Col>
          <Col span={8}>
            <OrderReview currentUser={currentUser} products={products} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CheckoutStep;
