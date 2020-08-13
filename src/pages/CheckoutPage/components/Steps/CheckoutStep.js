import React, { useState } from 'react';
import { Steps, Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCreditCard, faCheck } from '@fortawesome/free-solid-svg-icons'
import './styles.scss';
import ShippingAddress from '../ShippingAddress';

const { Step } = Steps;

const CheckoutStep = () => {
    const [current, setCurrent] = useState(0);

    const onChange = (current) => {
        setCurrent(current);
    }

    return (
        <div className="checkout-step">
            <div className="container">
                <Row gutter={30}>
                    <Col span={16}>
                        <Steps current={current} onChange={onChange}>
                            <Step title="Thông tin người mua" icon={<FontAwesomeIcon icon={faAddressCard} />}></Step>
                            <Step title="Hình thức thanh toán" icon={<FontAwesomeIcon icon={faCreditCard} />}></Step>
                            <Step title="Hoàn tất đơn hàng" icon={<FontAwesomeIcon icon={faCheck} />}></Step>
                        </Steps>
                        <div className="checkout-form">
                            <ShippingAddress />
                        </div>
                    </Col>
                    <Col span={8}>Product</Col>
                </Row>                
            </div>
        </div>
    );
}

export default CheckoutStep;